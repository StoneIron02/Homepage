#!/usr/bin/env bash
# history-commit.sh
# Claude Code stop hook: 현재 작업 트리를 history 브랜치에 스냅샷 커밋한다.
# 브랜치 전환 없이 git plumbing 명령어만 사용.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$REPO_ROOT"

# 변경사항이 없으면 즉시 종료
if git diff --quiet HEAD 2>/dev/null && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  exit 0
fi

HISTORY_REF="refs/heads/history"
TMP_INDEX="$REPO_ROOT/.git/tmp-history-index"

# 임시 인덱스 정리 보장
cleanup() { rm -f "$TMP_INDEX"; }
trap cleanup EXIT

# 임시 인덱스에 현재 작업 트리 전체를 추가
GIT_INDEX_FILE="$TMP_INDEX" git read-tree HEAD 2>/dev/null || true
GIT_INDEX_FILE="$TMP_INDEX" git add -A

# tree 객체 생성
TREE=$(GIT_INDEX_FILE="$TMP_INDEX" git write-tree)

# 이전 history 커밋의 tree와 비교하여 중복 방지
if git rev-parse --verify "$HISTORY_REF" >/dev/null 2>&1; then
  PREV_TREE=$(git rev-parse "$HISTORY_REF^{tree}" 2>/dev/null || echo "")
  if [ "$TREE" = "$PREV_TREE" ]; then
    exit 0
  fi
  PARENT_FLAG="-p $(git rev-parse "$HISTORY_REF")"
else
  PARENT_FLAG=""
fi

# 커밋 메시지 생성
CURRENT_BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null || echo "detached")
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
CHANGED_FILES=$(git diff --name-only HEAD 2>/dev/null; git ls-files --others --exclude-standard 2>/dev/null)
MSG="auto: snapshot from '${CURRENT_BRANCH}' at ${TIMESTAMP}

Changed files:
${CHANGED_FILES}"

# 커밋 생성 및 history 브랜치 포인터 이동
COMMIT=$(echo "$MSG" | git commit-tree $TREE $PARENT_FLAG)
git update-ref "$HISTORY_REF" "$COMMIT"
