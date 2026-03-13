---
description: HOF dual-remote commit and sync workflow
alwaysApply: false
---

# Rule: HOF — Commit and Sync (Mandala Group + Alahero)

When the user asks to **commit and sync** (or "commit and push", "sync changes") on the HOF project, follow this workflow.

## Remotes

- **origin** — Mandala Group's repo: `https://github.com/MandalaGroup/hof.git`
- **alahero** — Alahero's mirror: `https://github.com/alahero/hof.git`

## Default workflow (current branch, usually `main`)

1. **Stage** the changes the user intends to commit (respect any explicit inclusion/exclusion).
2. **Commit** with a clear message (project language: Mexican Spanish for commit messages per OpenSpec).
3. **Push to Mandala Group first:** `git push origin <current-branch>` (e.g. `main`).
4. **Mirror to Alahero:** `git push alahero <same-branch>`.

Always sync to **origin** first, then to **alahero**, so the canonical repo (Mandala Group) is updated before the mirror.

## When the user asks to commit and sync to another branch

If the user **explicitly** asks to commit and/or sync to **another branch** (e.g. "commit to develop", "push to feature/x"):

1. **Ask** the user:
   - **Which branch** to commit and push to on **Mandala Group (origin)**.
   - **Which branch** to push to on **Alahero (alahero)** (can be the same name or different, e.g. `main` on both, or `develop` on both).
2. Then run the same workflow: push to `origin <branch>`, then `alahero <branch>` (or the branch names they specified).

Do not assume branch names; confirm with the user when the target branch is not the current one.
