.PHONY: up down logs pull-gemma ollama-up dev jupyterlite

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

pull-gemma:
	docker compose exec ollama ollama pull gemma3:4b

ollama-up:
	docker compose up -d ollama

dev:
	pnpm dev

# Build the in-browser JupyterLite distribution into apps/web/public/jupyterlite/.
# Requires python3 on PATH; first run creates a local venv at .venv-jupyterlite/.
jupyterlite:
	pnpm jupyterlite:build
