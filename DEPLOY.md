# Deploying Your Portfolio

## Option 1: GitHub Pages (Recommended for Static Sites)

GitHub Pages is free and perfect for hosting static websites (HTML, CSS, JS) directly from your repository.

### Steps:

1.  **Push your code to GitHub** (if you haven't already).
    - Initialize git: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a repo on GitHub and follow the instructions to push:
      ```bash
      git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
      git branch -M main
      git push -u origin main
      ```
2.  **Enable GitHub Pages**:
    - Go to your repository **Settings** on GitHub.
    - Scroll down to the **Pages** section (sidebar).
    - Under **Build and deployment**, select **Source** as `Deploy from a branch`.
    - Select `main` as the branch and `/ (root)` as the folder.
    - Click **Save**.
3.  **Wait for Deployment**:
    - GitHub will give you a URL (e.g., `https://yourusername.github.io/repo-name/`). It might take a minute or two.

---

## Option 2: Render (Great for Web Apps & Static Sites)

Render is powerful and can also host static sites easily.

### Steps:

1.  **Push your code to GitHub** (same as above).
2.  **Sign up/Log in to Render** (dashboard.render.com).
3.  **Create a New Web Service**:
    - Click **New +** -> **Static Site**.
    - Connect your GitHub account and select your portfolio repository.
4.  **Configure Settings**:
    - **Name**: Choose a name (e.g., `dennis-portfolio`).
    - **Branch**: `main`.
    - **Publish Directory**: `./` (or leave blank if files are in the root).
5.  **Deploy**:
    - Click **Create Static Site**.
    - Render will deploy your site and provide a URL (e.g., `https://dennis-portfolio.onrender.com`).

---

## Which one to choose?

- **GitHub Pages**: Best for simplicity and if you just want `username.github.io`.
- **Render**: Great if you plan to add a backend later or want faster global CDN features out of the box.
