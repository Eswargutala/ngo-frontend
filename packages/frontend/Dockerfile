# Frontend Dockerfile
FROM node:18-alpine AS base
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

# Dependencies stage
FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/shared/package.json ./packages/shared/
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app
ENV BUILD_STANDALONE=true
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/packages/frontend/node_modules ./packages/frontend/node_modules
COPY --from=dependencies /app/packages/shared/node_modules ./packages/shared/node_modules
RUN pnpm --filter @ngo-ecommerce/shared build
RUN pnpm --filter @ngo-ecommerce/frontend build

# Runner stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/packages/frontend/public ./packages/frontend/public
COPY --from=builder --chown=nextjs:nodejs /app/packages/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/frontend/.next/static ./packages/frontend/.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "packages/frontend/server.js"]
