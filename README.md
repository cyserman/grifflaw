# Grifflaw - Local Law Website

A professional website for local law services, optimized for development in GitHub Codespaces.

## Getting Started with GitHub Codespaces

### Quick Start

1. **Open in Codespace**: Click the green "Code" button on GitHub and select "Create codespace on main"
2. **Wait for Setup**: The Codespace will automatically install Node.js and development tools
3. **Start Development**: Your environment is ready to go!

## How to Add Your Existing Website

If you have an existing website you want to add to this repository:

### Option 1: Copy Your Files Directly

1. Open the Codespace
2. Upload your files:
   - Drag and drop files into the file explorer, OR
   - Use the terminal: `git clone <your-website-repo>` then copy files
3. Replace the example files:
   - Replace `index.html` with your homepage
   - Replace or add to the `css/` and `js/` folders
   - Add any images to an `images/` or `assets/` folder

### Option 2: Use Git

```bash
# If your website is in another repository
git clone <your-website-repository-url> temp-website
cp -r temp-website/* .
rm -rf temp-website

# Stage and commit your files
git add .
git commit -m "Add my existing website"
git push
```

### Option 3: Upload via GitHub Web Interface

1. Go to your repository on GitHub
2. Click "Add file" > "Upload files"
3. Drag your website files or select them
4. Commit the changes

## Running Your Website

### Method 1: Using Python Simple Server (Pre-installed)
```bash
python3 -m http.server 8000
```
Then open the browser to the forwarded port 8000.

### Method 2: Using http-server (Installed automatically)
```bash
http-server -p 8000
```

### Method 3: Using live-server (Auto-reload on changes)
```bash
live-server --port=8000
```

### Method 4: Using VS Code Live Server Extension
1. Right-click on `index.html`
2. Select "Open with Live Server"

The website will be accessible via the forwarded ports in your Codespace.

## Project Structure

```
grifflaw/
├── .devcontainer/          # Codespace configuration
│   └── devcontainer.json   # Development environment setup
├── css/                    # Stylesheets
│   └── style.css          # Main stylesheet
├── js/                     # JavaScript files
│   └── main.js            # Main JavaScript
├── index.html             # Homepage (example)
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Example Website Included

This repository includes an example law firm website to help you get started. Feel free to:
- Use it as a template and modify it
- Replace it entirely with your own website
- Study it to understand the structure

## Features

### Development Environment
- **Node.js LTS**: Pre-installed with npm
- **Live Server**: Auto-reload on file changes
- **VS Code Extensions**: 
  - ESLint for code quality
  - Prettier for code formatting
  - Live Server for instant preview
  - Auto Close/Rename Tag for HTML
- **Port Forwarding**: Ports 8000, 3000, and 5500 are automatically forwarded

### Example Website Features
- Responsive design (works on mobile, tablet, desktop)
- Modern CSS with CSS variables
- Smooth scrolling navigation
- Contact form (frontend only)
- Professional law firm styling
- Service cards with hover effects

## Customization Tips

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Dark blue-gray */
    --secondary-color: #3498db;  /* Light blue */
    --accent-color: #e74c3c;     /* Red */
}
```

### Add More Pages
1. Create new HTML files (e.g., `about.html`, `services.html`)
2. Link them in the navigation menu in `index.html`

### Add Images
1. Create an `images/` folder
2. Add your images there
3. Reference them in HTML: `<img src="images/logo.png" alt="Logo">`

## Need Help?

- **Codespaces Documentation**: https://docs.github.com/en/codespaces
- **HTML/CSS Tutorials**: https://www.w3schools.com/
- **VS Code Tips**: https://code.visualstudio.com/docs

## Next Steps

1. Customize the example website or replace it with your own
2. Test your website using one of the server methods above
3. Commit your changes: `git add . && git commit -m "Update website"`
4. Push to GitHub: `git push`
5. Deploy to GitHub Pages, Netlify, or your hosting provider

Happy coding! 🚀
