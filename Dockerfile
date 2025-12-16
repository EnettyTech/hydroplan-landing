# Build stage
FROM node:18.20.4-alpine AS deps

WORKDIR /app

# Install necessary build tools
RUN apk add --no-cache python3 make g++

# Install dependencies with caching
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Builder stage
FROM node:18.20.4-alpine AS builder

WORKDIR /app

# Install all dependencies (including dev dependencies for build)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY next.config.ts tsconfig.json ./
COPY public ./public
COPY src ./src
COPY postcss.config.mjs ./

# Build application with optimizations
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production stage
FROM node:18.20.4-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

ENV PORT 8050
ENV NODE_ENV production

EXPOSE 8050

CMD ["node", "server.js"]