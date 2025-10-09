# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages automatically.

## 🚀 Automatic Deployment (Recommended)

### Initial Setup

1. **Push your code to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/stellar-verse.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. **Configure the base path:**
   - Open `vite.config.ts`
   - Change the base path from `/stellar-verse/` to `/YOUR_REPO_NAME/`
   - If your repo name is different from "stellar-verse"

4. **Trigger deployment:**
   - The workflow will run automatically on every push to `main`
   - Or manually trigger it from **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

Your site will be available at: `https://YOUR_USERNAME.github.io/stellar-verse/`

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install gh-pages package:**

   ```bash
   pnpm add -D gh-pages
   ```

2. **Deploy:**
   ```bash
   pnpm run deploy
   ```

## ⚙️ Configuration Details

### What's Been Set Up

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)

- Builds the client-side app
- Deploys to GitHub Pages
- Caches dependencies for faster builds

✅ **Vite Configuration** (`vite.config.ts`)

- Base path configured for GitHub Pages
- Production builds output to `dist/spa`

✅ **SPA Routing Support**

- `404.html` redirect for client-side routing
- Index.html script to handle deep links

✅ **Jekyll Bypass** (`.nojekyll`)

- Ensures all files are served correctly

## 🔍 Troubleshooting

### Routes not working (404 errors)

- The `404.html` and index.html scripts handle this automatically
- Make sure you're using React Router's `BrowserRouter` (already configured in `App.tsx`)

### Assets not loading

- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that it's set to: `base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/'`

### Workflow fails

- Check the **Actions** tab for error details
- Ensure GitHub Pages is set to use GitHub Actions (not a branch)

## 📝 Important Notes

- **Backend API routes will NOT work on GitHub Pages** - It only serves static files
- If you need backend functionality, consider:
  - Deploying the backend separately (Render, Railway, Fly.io)
  - Using Netlify/Vercel with serverless functions (already configured in the project)
  - Or use a different hosting provider that supports Node.js

- **Local development** continues to work with the Express server
- The `base` path is only applied in production builds

## 🌐 Alternative Hosting Options

If you need full backend support, consider these alternatives mentioned in AGENTS.md:

- **Netlify**: Use the MCP integration or the existing `netlify.toml`
- **Vercel**: Use the MCP integration for deployment
- Both support the full stack (frontend + serverless backend)
