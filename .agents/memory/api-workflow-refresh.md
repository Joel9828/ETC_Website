---
name: API workflow refresh
description: Backend preview refresh behavior for the API service.
---

Backend source edits are not hot-reloaded by the API workflow; the workflow builds the server bundle once and then starts it. Restart the API workflow before testing backend changes.

**Why:** A request can continue executing the previous bundled implementation even when the source file already contains the new code.

**How to apply:** After backend code, dependency, or environment changes, restart the managed API workflow before making a runtime verification request.