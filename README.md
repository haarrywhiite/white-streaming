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
2.  Run the build script:
    ```bash
    php build.php
    ```
3.  Verify the changes.
4.  Commit and push **both** types of files to GitHub.
