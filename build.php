<?php
// Build script to generate static HTML files from PHP source

$pages = [
    'index',
    'audios',
    'videos',
    'sobre',
    'contacte',
    'subscripcio'
];

echo "Starting build process...\n";

foreach ($pages as $page) {
    $phpFile = $page . '.php';
    $htmlFile = $page . '.html';

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

echo "Build complete! Static HTML files generated.\n";
