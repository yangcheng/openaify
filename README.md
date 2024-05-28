# What does this do?

The worker script act as adapter to convert Other LLM API to be fully compatible with OpenAI API. So you can use this for many apps where it ask for an OpenAI API key and Base URL.

Currently Azure OpenAI and Anthropic Claude Message are supported

After the script is deployed to cloudflare worker, use the worker URL `

## Azure OpenAI
https://xxx.xxx.workers.dev/` as Base URL , and Azure api-key as OpenAI API Key. 

## Anthropic Claude

https://xxx.xxx.workers.dev/claude` as Base URL , and anthropic api-key in bearer header. 

# Deploy to Cloudflare

Click the button below to deploy this Cloudflare Worker to your account.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/yangcheng/openaify)

## Environment Variables

During the deployment process, you will be prompted to enter the following environment variables:

- `AZURE_RESOURCE_NAME`: Your Azure resource name.
- `AZURE_DEPLOYMENT_NAME`: Your Azure deployment name.

Make sure you have these values ready before starting the deployment.

## Setup Instructions

1. Fork this repository to your own GitHub account.
2. Go to your repository's settings.
3. Navigate to the "Secrets" section.
4. Add the following secrets:
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API Token.
5. Click the "Deploy to Cloudflare" button above to start the deployment process.

see [Deploy button](https://developers.cloudflare.com/workers/tutorials/deploy-button/) for any deployment related questions.

