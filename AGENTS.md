# AGENTS.md

Guide for agents working in the `dinus-aspiration` monorepo.

## Structure

- `apps/web`: frontend (TanStack Start, Rsbuild, Tailwind v4). See `apps/web/AGENTS.md`.
- `apps/api`: backend (Elysia, Drizzle, Supabase). See `apps/api/AGENTS.md`.
- `apps/admin`: planned, not created yet.
- `packages/ui`: shadcn components (Radix) and shared theme tokens.
- `packages/config`: shared configuration (`tsconfig.base.json`).

## Commands

- `bun run dev`: run api and web.
- `bun run build`: build web.
- `bun run typecheck`: typecheck all workspaces.
- `bun run check`: Biome on web.

## Rules

- Shared code goes in `packages/`.
- Add shadcn components with the CLI from `packages/ui` (`bunx shadcn@latest add <name>`). Do not retype them by hand.
- Components in `packages/ui` must be generic, with no feature or domain logic.
- Add dependencies to the workspace that uses them.
- Import shared packages by package name (`@dinus-aspiration/...`), not by relative paths across packages.
- Do not edit `apps/web/src/routeTree.gen.ts` or `dist/` by hand.
- Intent skills: follow the block in `apps/web/AGENTS.md`. Load a skill with `bunx @tanstack/intent@latest intent load <package>#<skill>`.
