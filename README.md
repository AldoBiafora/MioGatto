# MioGatto

Hub digitale per la cura del gatto domestico. Salute, dispensa, diario e profilo per uno o più felini.

## Stack

- **React Native + Expo** (SDK 51, Expo Router)
- **TypeScript** (strict, alias `@/*` → `src/*`)
- **Supabase** (auth + data, stub pronto — auth attivata in Fase 2)
- **TanStack Query** (server state) + **Zustand** (client state)
- **@expo-google-fonts** (Quicksand, Inter) + **lucide-react-native** (icone)

## Struttura

```
app/                    # Expo Router (file-based)
  _layout.tsx           # Provider root (Query, Theme, Auth, SafeArea, fonts)
  (tabs)/               # Tab navigator (4 sezioni)
    salute/             # Appuntamenti, vaccini, peso
    dispensa/           # Scorte, budget, lista spesa
    diario/             # Timeline + dettaglio
    profilo/            # Profilo gatto + modifica

src/
  theme/                # Design system tokens + ThemeProvider
  components/           # Primitivi UI (Button, Card, Badge, ...)
  features/
    auth/               # Scaffolding auth (NON wired alle rotte)
    cats/               # Multi-gatto + activeCatId (Zustand)
    health/ pantry/ diary/
  lib/                  # Supabase, env, queryClient, storage
  types/ constants/ hooks/ utils/
```

## Setup

```bash
# 1. Installa dipendenze
npm install

# 2. Env vars
cp .env.example .env
# poi compila EXPO_PUBLIC_SUPABASE_URL e EXPO_PUBLIC_SUPABASE_ANON_KEY

# 3. Avvia
npm start
```

## Auth

In Fase 1 l'auth è solo uno scaffold dentro `src/features/auth/` (AuthProvider + hook stub). Nessun redirect, nessun guard: tutte le rotte sono liberamente accessibili. L'integrazione reale con `supabase.auth` avviene in Fase 2.

## Design system

- **Primario** ocher `#D99758` · **Secondari** sage `#7E9A71`, dust blue `#6F8A98`
- **Neutri caldi** cream `#FAF6EF` (background, niente bianco puro)
- **Urgenza** coral `#C84A39`
- **Font** Quicksand (heading) + Inter (body)
- **Icone** line-art Lucide, radius morbidi ispirati alla zampa
