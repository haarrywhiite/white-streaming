<?php
// Build script to generate static HTML files from PHP source

$outputDir = 'dist';

// Create output directory if it doesn't exist
if (!is_dir($outputDir)) {
    mkdir($outputDir, 0755, true);
}

$pages = [
    'index',
    'audios',
    'videos',
    'sobre',
    'contacte',
    'subscripcio'
];

echo "Starting build process...\n";

// 1. Generate HTML pages
foreach ($pages as $page) {
    $phpFile = $page . '.php';
    
    // Determine output path
    if ($page === 'index') {
        // Index stays at root
        $htmlFile = $outputDir . '/index.html';
        $relativeRoot = './';
    } else {
        // Others go into subdirectories: dist/videos/index.html
        $pageDir = $outputDir . '/' . $page;
        if (!is_dir($pageDir)) {
            mkdir($pageDir, 0755, true);
        }
        $htmlFile = $pageDir . '/index.html';
        // Relative root for assets (css/js are in root)
        $relativeRoot = '../';
    }

    if (file_exists($phpFile)) {
        echo "Building $htmlFile from $phpFile...\n";

        // Capture output
        ob_start();
        include $phpFile;
        $content = ob_get_clean();

        // Fix asset paths in content (styles.css -> ../styles.css) if needed
        // But since we use <base> or absolute paths, or just fix the links dynamically?
        // Easiest is to inject a variable $assetsPath before include.
        // Let's rely on updating the PHP files to use a variable for asset paths.
        // But to keep it simple without changing every PHP file too much:
        // We can string replace strict asset paths in the HTML output.
        if ($page !== 'index') {
            $content = str_replace('href="styles.css"', 'href="../styles.css"', $content);
            $content = str_replace('src="script.js"', 'src="../script.js"', $content);
            // Fix navigation links to be root-relative or handled correctly
            // If we change nav links to '/videos', it works on root domain but maybe not subpath?
            // GitHub Pages usually implies /repo-name/
            // Safer: Use absolute paths or handle relative up-navigation.
            
            // Fix Nav Links: "index.html" -> "../" or "../index.html"
            // "videos.html" -> "../videos/"
            
            // Let's do a rude replace for now to get it working quickly over the previous .html links
            $content = str_replace('href="index.html"', 'href="../"', $content);
            $content = str_replace('href="videos.html"', 'href="../videos/"', $content);
            $content = str_replace('href="audios.html"', 'href="../audios/"', $content);
            $content = str_replace('href="sobre.html"', 'href="../sobre/"', $content);
            $content = str_replace('href="contacte.html"', 'href="../contacte/"', $content);
            $content = str_replace('href="subscripcio.html"', 'href="../subscripcio/"', $content);
        } else {
             // Root index page replacements
            $content = str_replace('href="index.html"', 'href="./"', $content);
            $content = str_replace('href="videos.html"', 'href="videos/"', $content);
            $content = str_replace('href="audios.html"', 'href="audios/"', $content);
            $content = str_replace('href="sobre.html"', 'href="sobre/"', $content);
            $content = str_replace('href="contacte.html"', 'href="contacte/"', $content);
            $content = str_replace('href="subscripcio.html"', 'href="subscripcio/"', $content);
        }

        // Save to file
        if (file_put_contents($htmlFile, $content) !== false) {
            echo "Successfully created $htmlFile\n";
        } else {
            echo "ERROR: Failed to write to $htmlFile\n";
            exit(1);
        }
    } else {
        echo "ERROR: Source file $phpFile not found!\n";
        exit(1);
    }
}

// 2. Copy Assets
$assets = ['styles.css', 'script.js'];
foreach ($assets as $asset) {
    $source = $asset;
    $dest = $outputDir . '/' . $asset;

    if (file_exists($source)) {
        if (copy($source, $dest)) {
            echo "Copied $source to $dest\n";
        } else {
            echo "ERROR: Failed to copy $source\n";
        }
    } else {
        echo "WARNING: Asset $source not found\n";
    }
}

echo "Build complete! Static site generated in '$outputDir/'.\n";

