#!/usr/bin/env bash
# Build a JupyterLite distribution into apps/web/public/jupyterlite/.
# Bundles every datapath/M*/lab.ipynb as in-browser content so
# students can open the notebook for any lesson without a server kernel.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WEB_DIR="$ROOT/apps/web"
OUT_DIR="$WEB_DIR/public/jupyterlite"
VENV_DIR="$ROOT/.venv-jupyterlite"

if [ ! -d "$VENV_DIR" ]; then
  echo "→ Creating Python venv at $VENV_DIR"
  python3 -m venv "$VENV_DIR"
  "$VENV_DIR/bin/pip" install --upgrade pip
  "$VENV_DIR/bin/pip" install \
    "jupyterlite-core>=0.4,<0.5" \
    "jupyterlite-pyodide-kernel>=0.4,<0.5" \
    "jupyter-server>=2,<3"
fi

echo "→ Cleaning previous build"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

cd "$WEB_DIR"
echo "→ Running jupyter lite build (this can take a minute on first run)"
"$VENV_DIR/bin/jupyter" lite build \
  --config jupyter_lite_config.json \
  --output-dir "$OUT_DIR"

echo "✓ JupyterLite built at $OUT_DIR"
