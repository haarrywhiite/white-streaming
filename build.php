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
    $htmlFile = $outputDir . '/' . $page . '.html';

    if (file_exists($phpFile)) {
        echo "Building $htmlFile from $phpFile...\n";

        // Capture output
        ob_start();
        include $phpFile;
        $content = ob_get_clean();

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

