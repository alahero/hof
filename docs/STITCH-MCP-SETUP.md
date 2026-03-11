# Stitch MCP Setup (Cursor)

Connect Cursor to [Stitch](https://stitch.withgoogle.com) using the [official Model Context Protocol (MCP) setup](https://stitch.withgoogle.com/docs/mcp/setup/). Stitch is a **remote** MCP server: it runs in the cloud and requires a secure handshake so the AI agent has permission to work with your designs.

---

## Authentication: API Keys vs OAuth

The Stitch MCP server supports **two** methods:

| | **API Keys** | **OAuth** |
|---|--------------|------------|
| **Best for** | Fastest setup; Cursor accepts a key in config. | Web-based tools or “Sign In” flows; zero-trust / ephemeral environments. |
| **Storage** | Key in `.cursor/mcp.json` (or env). | No persistent secret on disk; session can expire. |
| **Revocation** | Delete key in Stitch Settings and remove from local config. | “Log Out” in Stitch Settings to invalidate access. |

**For Cursor, API Keys are the recommended approach.**

---

## API Key Setup

1. Go to your [Stitch Settings](https://stitch.withgoogle.com) page.
2. Open the **API Keys** section.
3. Click **Create API Key** and copy the key.
4. Store it somewhere safe. **Never** commit it to a repo or expose it in client-side code.

---

## Cursor MCP Config (API Key)

Create a project-level MCP config so Cursor talks to Stitch:

**File:** `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "stitch": {
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "YOUR-API-KEY"
      }
    }
  }
}
```

Replace `YOUR-API-KEY` with the key from Stitch Settings. Use the example in this repo: copy `.cursor/mcp.json.example` to `.cursor/mcp.json` and paste your key there. The real `.cursor/mcp.json` is gitignored so the key is not committed.

---

## Alternative: OAuth (Bearer token)

If you use the OAuth flow and get a `.env` with `STITCH_ACCESS_TOKEN` and `GOOGLE_CLOUD_PROJECT`, you can point Cursor at the **remote** Stitch MCP with:

```json
{
  "mcpServers": {
    "stitch": {
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_ACCESS_TOKEN>",
        "X-Goog-User-Project": "<YOUR_PROJECT_ID>"
      }
    }
  }
}
```

Replace `<YOUR_ACCESS_TOKEN>` and `<YOUR_PROJECT_ID>` with the values from your `.env`. **Note:** The access token expires (e.g. hourly); you must refresh it and update the `Authorization` header when it does.

---

## Available Stitch MCP Tools

Once authenticated, the AI assistant can use:

| Tool | Purpose |
|------|---------|
| **create_project** | Create a new container for UI work (`name`). |
| **list_projects** | List all active designs (`filter`: owned or shared). |
| **list_screens** | List screens in a project (`project_id`). |
| **get_project** | Get details for one project (`name`). |
| **get_screen** | Get details for one screen (`project_id`, `screen_id`). |
| **generate_screen_from_text** | Create a design from a text prompt (`project_id`, `prompt`, `model_id`: `GEMINI_3_PRO` or `GEMINI_3_FLASH`). |

---

## Using Stitch for HOF

After Stitch MCP is connected, you can ask the agent to:

- **Create a project:** “Create a Stitch project named ‘HOF House of Fiesta’.”
- **Generate a screen:** “In the HOF project, generate a dark landing page for House of Fiesta nightclub in Cancún. Primary red #E30613, gold #FFA800, black background. Bold, tribal tone. Tagline: Rush the night. Break the rules. Be HOF. Use the HOF Design System in `design-system/HOF-Design-System.md`.”

The agent will call `create_project`, then `generate_screen_from_text` (and optionally `get_screen` for code/export) to produce designs aligned with the HOF brand.

---

## Reference

- [Stitch – MCP setup (official)](https://stitch.withgoogle.com/docs/mcp/setup/)
