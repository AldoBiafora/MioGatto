# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MioGatto — Hub digitale per la cura del gatto domestico (Salute, Dispensa, Diario, Profilo, multi-gatto). UI testi in italiano.

**Status: Fase 1 — solo scaffolding architetturale.** Nessuna logica di business, nessuna integrazione Supabase attiva, auth non cablata alle rotte. Le query/mutation files esistono ma esportano `{}` per fissare il contratto senza implementarlo.

## Commands

```bash
npm install              # install dependencies (babel-plugin-module-resolver required for @/* alias)
npm start                # expo start (QR + dev menu)
npm run ios              # iOS simulator
npm run android          # Android emulator
npm run web              # web target
npm run typecheck        # tsc --noEmit — canonical check before commit
```

Before running the app: `cp .env.example .env` and fill `EXPO_PUBLIC_SUPABASE_URL` + `EXPO_PUBLIC_SUPABASE_ANON_KEY`. `src/lib/env.ts` throws at startup if either is missing.

No test runner, linter, or formatter is configured. Treat `npm run typecheck` as the quality gate.

## Architecture

### Routing (Expo Router, file-based)
- `app/_layout.tsx` is the provider root: `GestureHandlerRootView → QueryClientProvider → ThemeProvider → AuthProvider → SafeAreaProvider → Stack`. Fonts gate the whole tree via `useAppFonts()` — return `null` until loaded. **Any new global provider goes here, in that order.**
- `app/index.tsx` redirects to `/(tabs)/salute`.
- `app/(tabs)/_layout.tsx` renders `<CatSwitcher />` above the tab bar (inside a `SafeAreaView` with `edges={['top']}`) and mounts 4 tabs driven by `src/constants/tabs.ts`. The tab list is the single source of truth — add/remove sections by editing that file, not the layout.
- Each section has its own `_layout.tsx` with a themed `<Stack>` so nested routes (e.g. `diario/[id]`) push naturally.
- **No `(auth)` route group, no redirects based on session.** All routes are freely reachable in Phase 1.

### Design system (`src/theme/`)
Tokens split into `colors.ts`, `typography.ts`, `spacing.ts`, `radii.ts`, `shadows.ts`. `ThemeProvider` exposes the merged object; **always consume via `useTheme()` — never import tokens directly in components**, so dark-mode branching can be added later without touching callers. `shadows` is platform-aware (`Platform.select`). Primitives in `src/components/` (Button/Card/Badge/Avatar/ProgressBar/EmptyState/Screen/Text/CatSwitcher) are the only components that exist — they have no business logic.

### State management
- **TanStack Query** for all server state. `queryClient` singleton in `src/lib/queryClient.ts`.
- **Zustand** for client state. Currently one store: `src/features/cats/store/catStore.ts` (`activeCatId`, `cats`). Selectors used one-at-a-time inside hooks (see `useActiveCat`) to avoid re-render cascades.
- **React Context** only for Theme and Auth session.

### Feature modules (`src/features/<domain>/`)
Domains: `auth`, `cats`, `health`, `pantry`, `diary`. Each follows the same shape:
```
api/{queries,mutations}.ts   # TanStack Query hooks (empty stubs in Phase 1)
hooks/                       # Composed hooks (e.g. useActiveCat)
store/                       # Zustand slices (only if needed)
types.ts                     # Domain types (will derive from Database later)
index.ts                     # Public barrel — import features only via this
```
When implementing a feature, keep the split: UI in `app/(tabs)/<section>/`, data in `src/features/<domain>/api/`, shared UI atoms in `src/components/`.

### Auth scaffolding (NOT wired)
`src/features/auth/AuthProvider.tsx` mounts in `app/_layout.tsx` and exposes `{ session, user, loading, signIn, signUp, signOut }` — all handlers are no-op stubs. Hook stubs (`useSignIn`, `useSignUp`, `useSignOut`) are exported. **Phase 2** will: subscribe to `supabase.auth.onAuthStateChange` inside `AuthProvider`, add `app/(auth)/sign-in.tsx`, and introduce a `useProtectedRoute()` hook. Do not add route guards in Phase 1.

### Supabase (`src/lib/`)
`supabase.ts` imports `react-native-url-polyfill/auto` (required on RN), uses `AsyncStorage` via `storage.ts` as the auth storage adapter, and is typed against `Database` from `src/types/database.ts` — currently a placeholder to be regenerated later with `supabase gen types typescript`.

### Path alias
`@/*` → `src/*`. Two places must stay in sync: `tsconfig.json` (type-check) and `babel.config.js` via `babel-plugin-module-resolver` (runtime). Changing one without the other breaks the build silently.

## Conventions for this codebase
- File naming: `PascalCase.tsx` for components, `camelCase.ts` for hooks/utilities, Italian kebab-case route segments (`lista-spesa.tsx`).
- Screens are thin: wrap content in `<Screen>` and delegate composition to `src/components/` primitives. Do not introduce per-screen StyleSheets when a primitive + `useTheme()` suffices.
- When adding placeholder screens, follow the existing pattern: `<Screen>` + `<EmptyState icon={<LucideIcon />} title subtitle />` with Italian copy.
