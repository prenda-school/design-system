# Prenda Design System (Nx / Spark)

Shared startup instructions. Edit `AGENTS.md`; `CLAUDE.md` imports it.

## Purpose and map

Nx monorepo containing reusable design libraries. This is separate from the
`prenda-ds` and `prenda-icons` repositories and their `@prenda-school` packages.
Spark (`@prenda/spark`, MUI 4) is consumed today by bridge and parent-invites
only; the Next.js apps use `prenda-ds` on MUI 9. Prefer fixing Spark in place
for those two consumers over porting new components here.

- `packages/components/`, `packages/tokens/`, `packages/icons/`,
  `packages/dataviz/`: source, per-package README, stories, and tests.
- Each package's `project.json` defines its Nx targets.
- `libs/storybook-host/`: composed Storybook host.
- `tsconfig.base.json`, `nx.json`, `jest.preset.js`: shared tooling.
- Root README is incomplete (documentation/contribution TODOs); package READMEs
  and colocated MDX/stories are the useful component references.

## Development and checks

At root: `nvm use`, `npm install`. The repo pins its own runtime in `.nvmrc`.

- `npm run storybook`: package Storybooks plus the composed host.
- `npx nx test components` / `npx nx build components`: example focused targets;
  replace `components` with the affected project's name from `project.json`.
- `npm run lint`, `npm run format:check`, `npm run build`: repository checks
  reflected in `.github/workflows/ci.yml`.
- `npm test`: available test targets across projects.
- `npm run format:write`: rewrites formatting across the repo; avoid incidental
  formatting churn when working on a small change.

Keep stories and public exports aligned with API changes. Check the intended
consumer's dependency version before assuming a component exists in newer theme
packages. Use existing tokens and component patterns. Inspect git status before
editing and preserve unrelated work. Update this map when targets or package
boundaries change; keep component-specific detail in its own docs/stories.
