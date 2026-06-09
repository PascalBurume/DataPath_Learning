.PHONY: up down logs pull-gemma ollama-up dev jupyterlite

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

# Pull the tutor model into the ollama container. Must match OLLAMA_MODEL in
# docker-compose.yml and the app/notebooks (canonical tag: gemma4:e2b).
pull-gemma:
	docker compose exec ollama ollama pull gemma4:e2b

ollama-up:
	docker compose up -d ollama

dev:
	pnpm dev

# Build the in-browser JupyterLite distribution into apps/web/public/jupyterlite/.
# Requires python3 on PATH; first run creates a local venv at .venv-jupyterlite/.
jupyterlite:
	pnpm jupyterlite:build
