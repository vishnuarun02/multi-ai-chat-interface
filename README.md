This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## AI Chatbot with Multiple Models

This chatbot supports multiple AI models:
- **GPT-4** (OpenAI)
- **Grok** (xAI)
- **Deepseek**
- Claude Sonnet 4 (coming soon)
- Gemini (coming soon)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory and add your API keys:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual API keys:
```
OPENAI_API_KEY=your-openai-api-key
XAI_API_KEY=your-xai-api-key
DEEPSEEK_API_KEY=your-deepseek-api-key
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Option 1: Deploy Everything to Vercel (Recommended)

Since this is a Next.js app with API routes, you can deploy the entire application (frontend + backend) to Vercel:

1. Push your code to GitHub (make sure `.env.local` is in `.gitignore`)
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel's project settings:
   - `OPENAI_API_KEY`
   - `XAI_API_KEY`
   - `DEEPSEEK_API_KEY`
4. Deploy!

### Option 2: Separate Frontend (Vercel) and Backend (Railway)

If you prefer to separate concerns:

**Frontend (Vercel):**
- Deploy the Next.js app to Vercel
- Set an environment variable `NEXT_PUBLIC_API_URL` pointing to your Railway backend

**Backend (Railway):**
- Extract the API routes to a standalone Express.js or similar backend
- Deploy to Railway with the API keys as environment variables
- Enable CORS to allow requests from your Vercel frontend

**Note:** For this app, Option 1 is simpler and recommended since Next.js API routes handle both frontend and backend efficiently. You don't need a separate backend unless you have specific requirements (like connecting to a database, running long-running processes, etc.).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
