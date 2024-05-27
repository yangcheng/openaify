# Deploy to Cloudflare

Click the button below to deploy this Cloudflare Worker to your account.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/yangcheng/azure-openai)

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
   - `CF_ACCOUNT_ID`: Your Cloudflare Account ID.
   - `CF_API_TOKEN`: Your Cloudflare API Token.
5. Click the "Deploy to Cloudflare" button above to start the deployment process.
