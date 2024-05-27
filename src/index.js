/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {

async fetch(request,env, ctx) {
  // Extract the OpenAI API request body
  const openaiRequest = await request.json()

  // Extract the Bearer token from the Authorization header
  const authorizationHeader = request.headers.get('Authorization')
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return new Response('Missing or invalid Authorization header', { status: 401 })
  }
  const azureApiKey = authorizationHeader.replace('Bearer ', '').trim()

  // Convert OpenAI request format to Azure OpenAI format
  const azureRequest = {
    messages: openaiRequest.messages,
    // Add any other necessary parameters here
  }

  const azureResourceName = env.AZURE_RESOURCE_NAME
  const azureDeploymentName = env.AZURE_DEPLOYMENT_NAME

  // Call Azure OpenAI
  const azureResponse = await fetch(`https://${azureResourceName}.openai.azure.com/openai/deployments/${azureDeploymentName}/chat/completions?api-version=2024-02-15-preview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': azureApiKey
    },
    body: JSON.stringify(azureRequest)
  })

  // Extract the response from Azure
  const azureData = await azureResponse.json()

  // Convert Azure OpenAI response format to OpenAI response format
  const openaiResponse = {
    id: azureData.id,
    object: azureData.object,
    created: azureData.created,
    model: azureData.model,
    usage: azureData.usage,
    choices: azureData.choices.map(choice => ({
      message: choice.message,
      finish_reason: choice.finish_reason,
      index: choice.index
    }))
  }

  // Return the response to the client
  return new Response(JSON.stringify(openaiResponse), {
    headers: { 'Content-Type': 'application/json' }
  })
};

}