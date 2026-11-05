#!/usr/bin/env bash
# Runs on the host before the container is created.
# The claude-code feature bind-mounts $HOME/.claude.json and $HOME/.claude.
# Docker creates a missing bind source as a directory, so a missing
# .claude.json is mounted as a directory rather than a JSON file.
set -euo pipefail

claude_dir="${HOME}/.claude"
claude_json="${HOME}/.claude.json"

mkdir -p "$claude_dir"

if [ -d "$claude_json" ]; then
  if [ -z "$(ls -A "$claude_json")" ]; then
    rmdir "$claude_json"
  else
    echo "ensure-claude-mounts: ${claude_json} is a non-empty directory; left unchanged" >&2
    exit 0
  fi
fi

if [ ! -e "$claude_json" ]; then
  printf '%s\n' '{}' >"$claude_json"
fi
