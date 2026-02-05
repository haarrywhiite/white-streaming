# White Streaming Project

This project uses a **hybrid approach** to satisfy two requirements:
1.  **PHP Requirement**: The source code is written in PHP modules (`.php`).
2.  **GitHub Pages Compatibility**: The live site is served as static HTML (`.html`).

## File Structure

-   **`*.php` (e.g., `index.php`, `videos.php`)**:
    -   **EDIT THESE FILES.**
    -   This is your actual source code.
    -   Contains the logic and includes `header.php`/`footer.php`.
-   **`*.html` (e.g., `index.html`, `videos.html`)**:
    -   **DO NOT EDIT THESE DIRECTLY.**
    -   These are generated automatically by the build script.
    -   They exist solely so GitHub Pages can display the site.
-   **`includes/`**:
    -   Contains shared implementation code like the Header and Footer.
-   **`build.php`**:
    -   The script that converts your PHP code into HTML.

## Workflow

When you want to make changes:

1.  Edit the **PHP** files (e.g., change `index.php` or `includes/header.php`).
2.  Commit and push to GitHub:
    ```bash
    git add .
    git commit -m "Update site content"
    git push origin main
    ```
3.  **GitHub Actions** will automatically:
    -   Run the build script.
    -   Generate the `dist/` folder.
    -   Deploy it to GitHub Pages.

You do **not** need to run `php build.php` locally anymore, unless you want to verify changes before pushing.

