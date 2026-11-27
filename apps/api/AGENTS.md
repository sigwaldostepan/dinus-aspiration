# AGENTS.md

Guidelines for working in `apps/api` (Elysia). Follow the [Elysia best practices](https://elysiajs.com/essential/best-practice.html).

## Module structure

- Each feature lives in `src/modules/<feature-name>/` (kebab-case folder name).
- Files per module:
  - `index.ts`: controller. An Elysia instance with a `prefix`. Handles routing, request/response validation, and cookies.
  - `service.ts`: business logic. An `abstract class` with `static` methods. No HTTP concerns.
  - `model.ts`: `t.Object` schemas grouped in one `const` object, plus `UnwrapSchema` types when needed.
  - `repository.ts`: data access. Only create it when a feature needs persistence.
- Do not create files a feature does not need.

## Infrastructure

- External systems live in `src/infra/<system>/` (for example `database`, `storage`, `logger`, `config`).
- Only `src/infra/` imports third-party SDKs (Drizzle, postgres, AWS S3 SDK, pino). Modules use the wrappers from `infra/`.
- `infra/` must not import from `modules/`.
- `src/infra/config/env.ts` is the only place that reads `process.env`. Other code imports the `env` object.
- Create `infra/<system>/` only when the system is used.
- Database: PostgreSQL on Supabase, accessed through Drizzle (`src/infra/database/database.ts`). Table definitions go in `src/infra/database/schema.ts`.
- Storage: S3-compatible API on Supabase Storage (`src/infra/storage/s3.ts`).
- Database migrations are generated with `drizzle-kit` into `apps/api/drizzle/`. Do not edit generated migration files by hand.
- Required env variables are listed in `apps/api/.env.example`. Add new variables there too.
- Deployment: Netlify, one site with base directory `apps/api`. Config in `netlify.toml` (Node 24). Secrets are set in the Netlify UI, never in `netlify.toml` (functions cannot read it).
- CORS origins come from `env.CORS_ORIGIN`. Do not hardcode origins.

## Rules

- Controllers are Elysia instances. Do not write controller classes that take a `Context`.
- Do not pass the full `Context` to services or other functions. Destructure the values you need first.
- Services must not depend on Elysia, except for `status()` when throwing HTTP errors.
- Services call repositories. Controllers call services. Controllers do not call repositories directly.
- Do not declare interfaces or classes for models. Derive types from `t` schemas.
- Decorate only request-dependent values (for example `session`, `requestIP`).
- Mount each module in `src/app.ts` with `.use()`. Keep `src/index.ts` limited to starting the server.
- Do not edit generated or build output by hand.
- Do not use `any` or `@ts-ignore` without a stated reason.

## Commands

- From the root: `bun run --filter api dev`, `bun run --filter api typecheck`.
- Tests are not set up yet.
