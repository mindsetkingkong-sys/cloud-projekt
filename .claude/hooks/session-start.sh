#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# --- Project dependencies ---
npm install

# --- rtk CLI (https://github.com/rtk-ai/rtk) ---
RTK_BIN="$HOME/.local/bin/rtk"
mkdir -p "$HOME/.local/bin"

if [ ! -x "$RTK_BIN" ]; then
  RTK_SRC="$HOME/.cache/rtk-src"
  if [ ! -d "$RTK_SRC" ]; then
    GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://github.com/rtk-ai/rtk "$RTK_SRC"
  fi
  (cd "$RTK_SRC" && cargo build --release)
  cp "$RTK_SRC/target/release/rtk" "$RTK_BIN"
  chmod +x "$RTK_BIN"
fi

case ":$PATH:" in
  *":$HOME/.local/bin:"*) ;;
  *) echo "export PATH=\"$HOME/.local/bin:\$PATH\"" >> "$CLAUDE_ENV_FILE" ;;
esac

# --- rtk global init (RTK.md, filters.toml, CLAUDE.md reference) ---
"$RTK_BIN" init -g || true

# --- Register PreToolUse hook in the global Claude settings ---
SETTINGS="$HOME/.claude/settings.json"
mkdir -p "$HOME/.claude"

if [ ! -f "$SETTINGS" ]; then
  echo '{}' > "$SETTINGS"
fi

if ! grep -q '"rtk hook claude"' "$SETTINGS" 2>/dev/null; then
  python3 - "$SETTINGS" << 'EOF'
import json, sys

path = sys.argv[1]
with open(path) as f:
    data = json.load(f) or {}

hooks = data.setdefault("hooks", {})
pretooluse = hooks.setdefault("PreToolUse", [])

already = any(
    h.get("command") == "rtk hook claude"
    for entry in pretooluse
    for h in entry.get("hooks", [])
)

if not already:
    pretooluse.append({
        "matcher": "Bash",
        "hooks": [{"type": "command", "command": "rtk hook claude"}]
    })

with open(path, "w") as f:
    json.dump(data, f, indent=2)
    f.write("\n")
EOF
fi
