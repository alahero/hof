# Stitch → Cursor export instructions

## MCP config (already in `.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "stitch": {
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "AQ.Ab8RN6K2msSfbDudsoooAZ0MpCCORBX2O7TgjQZbbITA-80pUQ"
      }
    }
  }
}
```

## Project and screen to export

| Field    | Value |
|----------|--------|
| **Project ID** | `11087646655474598034` |
| **Screen name** | HOF - Events & Guest List |
| **Screen ID**   | `c51dda5f1d82461b85fed0afdf3e7d85` |

## How to get images and code into Cursor

1. **Ensure Stitch MCP is connected**  
   In Cursor: Settings → MCP. Confirm **stitch** is listed and connected. Restart Cursor if needed.

2. **Ask the agent to export this screen**  
   In a new chat (so MCP is loaded), say for example:
   - *“Use the Stitch MCP to get the screen with project_id 11087646655474598034 and screen_id c51dda5f1d82461b85fed0afdf3e7d85. Get the screen details, then download any hosted image URLs with curl and save the code and images into this project.”*

3. **What the agent should do**  
   - Call `get_screen` with:
     - `project_id`: `11087646655474598034`
     - `screen_id`: `c51dda5f1d82461b85fed0afdf3e7d85`
   - From the response, take any **hosted image URLs** and **code** (e.g. HTML/CSS).
   - Download images with `curl -L -o <local-path> <url>` into e.g. `stitch-export/` or `public/`.
   - Save code into the repo (e.g. a new component or page under `src/` or a file in `stitch-export/`).

4. **If you export from the Stitch web UI instead**  
   Use Stitch’s export option to download images/code, then add the files to this repo (e.g. under `stitch-export/` or the paths above).

## Target folder in this repo

- **Images:** `stitch-export/images/` (or `public/design/`)
- **Code:** `stitch-export/` or integrate into `src/` as needed.
