# DataPath Learning

Next.js 15 learning app with Prisma + SQLite and seeded DataPath modules.

## Running with Docker Desktop

This is the recommended way to run the full stack (Next.js + JupyterLab + Ollama).

> **Note:** If you have Ollama installed locally, stop it first to avoid a port conflict on `11434`.

### CPU (any machine, including Apple Silicon)

```bash
docker compose up -d
```

### NVIDIA GPU

```bash
docker compose -f docker-compose.yml -f docker-compose.gpu.yml up -d
```

Once running, open:

| Service | URL |
|---|---|
| Next.js web app | http://localhost:3001 |
| JupyterLab | http://localhost:8888 |
| Ollama API | http://localhost:11434 |

Sign in with:
- Email: `sofia@datapath.local`
- Password: `datapath123`

### Stopping

```bash
docker compose down
# or to also remove old/orphaned containers:
docker compose down --remove-orphans
```

---

## Local Development (without Docker)

### Setup

```bash
pnpm i
```

### Database

Run migrations and seed the local curriculum/demo data:

```bash
cd apps/web
pnpm prisma migrate deploy
npx tsx prisma/seed.ts
```

### Development

```bash
cd apps/web
pnpm dev
```

Open http://localhost:3000 and sign in with the credentials above.

## Optional Gemma/Ollama

For live Gemma streaming, install Ollama and run a compatible local model (for example `ollama run gemma4:e2b`). If Ollama is not running, the app uses a friendly fallback response.

JupyterLite/notebook assets are optional for local verification and are not required for the main app smoke tests.
