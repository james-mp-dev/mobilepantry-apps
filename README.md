# MobilePantry Apps Monorepo

This monorepo contains the MobilePantry applications:
- Web Application (`apps/web-app`)
- Driver Mobile Application (`apps/driver-app`)
- Client Mobile Application (`apps/client-app`)

It also includes shared packages:
- API definitions and types (`packages/api`)
- Shared UI components (`packages/ui`)
- Shared theme configurations (`packages/theme`)
- Shared ESLint, Prettier, TypeScript configurations (`packages/config`)

## Tech Stack
- Monorepo: Turborepo
- Package Manager: pnpm
- Web App: Next.js, TypeScript, TailwindCSS, Clerk
- Mobile Apps: React Native, Expo, TypeScript, NativeWind, React Native Reanimated, Clerk
- API: Hosted by Next.js (`web-app`), shared types in `packages/api`

## Getting Started

1.  **Install pnpm**: If you don't have pnpm, install it globally: `npm install -g pnpm`
2.  **Install dependencies**: From the root of the monorepo, run `pnpm install`
3.  **Build all packages/apps**: `pnpm run build`
4.  **Run an app in dev mode** (examples):
    - Web app: `pnpm --filter web-app dev`
    - Driver app: `pnpm --filter driver-app dev` (then follow Expo CLI instructions)
    - Client app: `pnpm --filter client-app dev` (then follow Expo CLI instructions)

## Notes
- PostgreSQL on AWS is planned for the database.
- Prisma ORM is planned for database interaction.
- Mock data will be used initially.
