<!-- intent-skills:start -->
## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:
- Run `bunx @tanstack/intent@latest intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `bunx @tanstack/intent@latest intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Feature structure

- Features live in `src/features/<name>/` and contain `api/`, `components/`, `hooks/`, `types/` as needed, plus an `index.ts` as the feature's public API.
- `src/routes/` only contains thin routes that render components from features. Do not put business logic in routes.
- One-way dependencies: routes -> features -> components/lib/hooks. A feature must not import another feature.
- Code shared across features moves to `src/components`, `src/lib`, or `src/hooks`.
- Internal app imports use the `#/*` alias. Shared UI imports use `@dinus-aspiration/ui/...`.
- Do not modify shadcn components in place. If a variant is needed, create a wrapper in the feature.
- Forbidden: `any` without a reason, `@ts-ignore` without a reason, and editing generated files (`src/routeTree.gen.ts`, `dist/`).

## Environment

- `API_URL` is the base URL of `apps/api`. It is read in `rsbuild.config.ts` and inlined with `source.define` as `process.env.API_URL`, so it works in both client and server code.
- The build fails if `API_URL` is missing. Set it in `.env` locally and in the Netlify UI.
- Do not read `process.env` anywhere else in app code. Add new variables to `.env.example` too.
