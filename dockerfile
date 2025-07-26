# syntax=docker/dockerfile:1

# install dependencies
FROM oven/bun:1.2.19-slim AS base

FROM base AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN if [ -f bun.lock ]; then bun install --frozen-lockfile; else bun install; fi

# build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# setup
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# deploy
USER nextjs
CMD ["bun", "server.js"]
