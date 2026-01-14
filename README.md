# Griffiths Law Office - Site Replacement

## ⚠️ Site Has Been Replaced

This repository has been updated with a new placeholder site. The previous version has been **backed up** and preserved.

## 📦 Backup Location

The complete original Griffiths Law Office website has been saved in:

```
/backup/old-site/
```

See `/backup/README.md` for detailed restoration instructions.

## 🔄 What Was Backed Up

The backup includes:
- ✅ All pages (Home, Attorney bio, War Room, Contact)
- ✅ All components (Navigation, FloatingActionButton, SchedulerModal, ReviewTicker)
- ✅ Complete configuration (Next.js, TypeScript, Tailwind)
- ✅ Full documentation (README, Implementation Summary)

## 🛠️ Current Site

The current site is a simple placeholder that displays:
- Notice that the site has been replaced
- Location of the backup
- Instructions for accessing the old content

## 🚀 Development

To run the current (placeholder) site:

```bash
npm install
npm run dev
```

## 📋 Restoring the Old Site

If you need to restore the original Griffiths Law Office website:

1. **Copy backup files back:**
   ```bash
   cp -r backup/old-site/app .
   cp -r backup/old-site/components .
   cp backup/old-site/layout.tsx app/
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the site:**
   ```bash
   npm run dev
   ```

See `/backup/old-site/README.md` for complete documentation of the original site.

## 📄 License

© 2024 The Griffiths Law Office. All rights reserved.
