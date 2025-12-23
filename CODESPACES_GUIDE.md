# GitHub Codespaces Quick Reference

## What is a Codespace?

A Codespace is a cloud-based development environment hosted by GitHub. It's like VS Code running in your browser with all the tools you need pre-installed.

## Opening Your Codespace

1. Go to https://github.com/cyserman/grifflaw
2. Click the green **"Code"** button
3. Select the **"Codespaces"** tab
4. Click **"Create codespace on [branch-name]"**

Your Codespace will start building. This takes 1-2 minutes the first time.

## What Happens Automatically

When your Codespace starts, it automatically:
- ✅ Installs Node.js LTS
- ✅ Installs `http-server` (simple web server)
- ✅ Installs `live-server` (auto-reloading web server)
- ✅ Installs helpful VS Code extensions
- ✅ Forwards ports 8000, 3000, and 5500 for web servers

## Running Your Website

### Quickest Method - Python
```bash
python3 -m http.server 8000
```

### Auto-reload Method - live-server
```bash
live-server --port=8000
```

### Viewing Your Website
After starting a server:
1. Look for a popup: "Your application running on port 8000 is available"
2. Click **"Open in Browser"**
3. OR go to the **PORTS** tab at the bottom and click the globe icon 🌐

## Common Tasks

### Adding Your Website Files

**Upload files:**
1. Drag files from your computer into the file explorer (left sidebar)
2. Drop them in the appropriate folders

**Or use terminal commands:**
```bash
# Create directories if needed
mkdir -p images assets

# If you have files in a zip
unzip my-website.zip

# Copy files
cp ~/Downloads/index.html .
```

### Making Changes

1. Edit files in the editor (they auto-save)
2. Refresh your browser to see changes
   - OR use `live-server` for automatic refresh

### Saving Your Work

```bash
# See what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Updated website content"

# Push to GitHub
git push
```

## File Explorer Navigation

- **Left Sidebar**: Your project files
- **Click** a file to open it
- **Right-click** for more options (rename, delete, etc.)
- **Drag & drop** to move files between folders

## Terminal Commands

Open terminal: **View** → **Terminal** or press `` Ctrl+` ``

Useful commands:
```bash
# List files
ls -la

# Create a directory
mkdir foldername

# Move a file
mv oldname.html newname.html

# Copy a file
cp file.html copy-of-file.html

# Delete a file
rm filename.txt

# Navigate folders
cd foldername     # Enter folder
cd ..             # Go up one level
pwd               # Show current location
```

## Troubleshooting

### Port Already in Use?
```bash
# Find what's using the port
lsof -i :8000

# Kill the process (replace PID with the number from above)
kill <PID>
```

### Start Fresh?
```bash
# Discard all changes
git checkout .

# OR keep your changes but pull latest from GitHub
git pull
```

### Codespace Acting Strange?
1. **Stop & Restart**: Codespaces → ⋯ → Stop codespace → Restart
2. **Rebuild**: Codespaces → ⋯ → Rebuild container (takes longer but fixes most issues)

## Tips & Tricks

### Split Editor
- **Right-click** a file → "Split Right" to view two files side-by-side
- Great for editing HTML and CSS together

### Quick Search
- Press `Ctrl+P` (or `Cmd+P` on Mac) to quickly find and open files
- Press `Ctrl+Shift+F` to search across all files

### Terminal Shortcuts
- `Ctrl+C` - Stop a running command
- `Up Arrow` - Previous command
- `Tab` - Auto-complete file/folder names

### Multiple Terminals
- Click the **+** in the terminal panel to open another terminal
- Run different servers or commands simultaneously

## Ports & Forwarding

The Codespace automatically forwards these ports:
- **8000**: Default for http-server and Python server
- **3000**: Common for Node.js apps
- **5500**: Default for Live Server extension

### View Forwarded Ports
1. Click **PORTS** tab at bottom of VS Code
2. See all active ports and their visibility
3. Click the globe icon 🌐 to open in browser

### Add a New Port
1. Go to **PORTS** tab
2. Click **Forward a Port**
3. Enter the port number

## Keeping Codespaces Running

- **Active Use**: Stays running while you use it
- **Timeout**: Stops after 30 minutes of inactivity (default)
- **Restart**: Just open it again from GitHub to resume

## Codespace Limits (Free Tier)

- 60 hours/month of usage
- 15 GB storage per codespace
- Up to 2 cores

Your website development should fit comfortably within these limits!

## Resources

- [Codespaces Docs](https://docs.github.com/en/codespaces)
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
