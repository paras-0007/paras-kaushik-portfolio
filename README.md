# Paras Kaushik — Portfolio

Personal portfolio for Paras Kaushik, an AI systems engineer focused on multimodal systems, retrieval, evaluation, and production AI infrastructure.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build emits a Cloudflare Worker-compatible application in `dist/`.

## Deploy to Cloudflare

Connect this repository to Cloudflare Workers Builds and use:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Node.js version: `22.13.0` or newer

Generated output, dependencies, local environment files, and Wrangler state are excluded from Git.
