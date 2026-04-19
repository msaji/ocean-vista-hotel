For all GitHub-related operations (issues, pull requests, etc.), use raw `git` commands executed via the Bash tool instead of the `gh` CLI.

**Why:** User explicitly requested this constraint.
**How to apply:** When asked to interact with GitHub, I must rely on commands like `git fetch`, `git log`, and `git diff` to gather necessary information for manual PR creation or state checking, avoiding the `gh` tool.