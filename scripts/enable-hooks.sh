#!/usr/bin/env bash
set -euo pipefail

git config core.hooksPath .githooks
chmod +x .githooks/* || true
echo "Hooks enabled: core.hooksPath set to .githooks"

