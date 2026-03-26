This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Celestial Odyssey Wiki** - A community wiki for the Roblox tower defense game.

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- Discord webhook (for feedback notifications)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by copying `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`:
   - `MONGODB_URI`: Your MongoDB connection string
   - `DISCORD_WEBHOOK_URL`: Your Discord webhook URL for feedback

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create an optimized production build:

```bash
npm run build
npm run start
```

Build for Cloudflare Workers (OpenNext):

```bash
npm run build:cloudflare
```

## Environment Variables

See `.env.example` for required environment variables:

- `MONGODB_URI` - MongoDB Atlas connection string
- `DISCORD_WEBHOOK_URL` - Discord webhook URL for feedback notifications

**Important**: Never commit `.env.local` to the repository. Use Vercel's environment variables dashboard to set these values in production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

### Prerequisites
1. Push code to GitHub repository
2. Import project to Vercel from GitHub
3. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `DISCORD_WEBHOOK_URL`
4. Click "Deploy"

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Auto deploy from GitHub (recommended)

This repository includes GitHub Action workflow:

- `.github/workflows/deploy-vercel.yml`

Required repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Deploy on Cloudflare

1. Set the same environment variables in Cloudflare Worker settings:
   - `MONGODB_URI`
   - `DISCORD_WEBHOOK_URL`
2. Build OpenNext output:

```bash
npm run build:cloudflare
```

3. Deploy to Cloudflare Workers:

```bash
npm run deploy:cloudflare
```

`deploy:cloudflare` now runs a clean build first, then deploys.

### Auto deploy from GitHub (recommended)

This repository includes GitHub Action workflow:

- `.github/workflows/deploy-cloudflare.yml`

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Windows note

Cloudflare OpenNext build can fail on Windows with symlink permission (`EPERM`).
If you hit this locally, deploy via GitHub Actions (Linux runner) or use WSL.
Running terminal as Administrator and enabling Developer Mode can also help on Windows.
