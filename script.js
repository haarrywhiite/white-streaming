// Theme persistence logic - Run immediately to prevent flicker
(function () {
    const currentTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateToggleIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });

    function updateToggleIcon(theme) {
        themeToggleBtn.innerHTML = theme === 'light'
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    }

    // --- Mobile Menu Logic ---
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggleBtn && navLinks) {
        menuToggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Video Randomizer Logic ---
    const videoGrid = document.querySelector('.video-grid-container');
    if (videoGrid) {
        // Curated pool of "Always Available" Global Hits (Vevo/Official)
        const videoPool = [
            { id: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito" },
            { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You" },
            { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk" },
            { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
            { id: "fJ9rUzIMcZQ", title: "Queen - Bohemian Rhapsody" },
            { id: "CevxZvSJLk8", title: "Katy Perry - Roar" },
            { id: "RgKAFK5djSk", title: "Wiz Khalifa - See You Again" },
            { id: "YQHsXMglC9A", title: "Adele - Hello" },
            { id: "papuvlVeZg8", title: "Clean Bandit - Rockabye" },
            { id: "uelHwf8o7_U", title: "Eminem - Love The Way You Lie" },
            { id: "ALZHF5UqnU4", title: "Marshmello - Alone" },
            { id: "p7Qp321t8Ww", title: "Coldplay - Hymn For The Weekend" },
            { id: "PT2_F-1esPk", title: "The Chainsmokers - Closer" },
            { id: "nfWlot6h_JM", title: "Taylor Swift - Shake It Off" },
            { id: "PIh2xe4jnpk", title: "Magic! - Rude" },
            { id: "lp-EO5I60KA", title: "Ed Sheeran - Thinking Out Loud" },
            { id: "QFs3PIZb3js", title: "Mark Ronson - Uptown Funk" }, // Duplicate ID fix? No, this is different, check ID. Wait, OPf0YbXqDm0 is standard. Removed duplicate title.
            { id: "2Vv-BfVoq4g", title: "Ed Sheeran - Perfect" }
        ];

        // Shuffle function
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Shuffle and pick top 6 (Matching the Audio count)
        const selectedVideos = shuffle([...videoPool]).slice(0, 6);

        // Clear existing content
        videoGrid.innerHTML = '';

        // Generate HTML
        selectedVideos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <iframe width="100%" height="200" 
                    src="https://www.youtube.com/embed/${video.id}" 
                    title="${video.title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                <h3 style="margin-top: 1rem; font-size: 1.1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${video.title}</h3>
            `;
            videoGrid.appendChild(card);
        });
    }

    // --- Home Page Trending Logic ---
    const homeVideoGrid = document.getElementById('home-trending-videos');
    const homeAudioGrid = document.getElementById('home-trending-audios');

    if (homeVideoGrid && homeAudioGrid) {
        // 1. Random 3 Videos
        // (Re-using videoPool would be ideal, but it's scoped above. 
        // For simplicity in this static setup, duplicating the top safe ones or moving the pool out.)
        // Let's redefine a small safe pool here to avoid scope issues without major refactor.
        const homeVideoPool = [
            { id: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito" },
            { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You" },
            { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk" },
            { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
            { id: "fJ9rUzIMcZQ", title: "Queen - Bohemian Rhapsody" },
            { id: "CevxZvSJLk8", title: "Katy Perry - Roar" }
        ];

        // Fisher-Yates Shuffle local implementation
        for (let i = homeVideoPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [homeVideoPool[i], homeVideoPool[j]] = [homeVideoPool[j], homeVideoPool[i]];
        }

        homeVideoGrid.innerHTML = '';
        homeVideoPool.slice(0, 3).forEach(video => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                <h3 style="margin-top: 1rem; font-size: 1.1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${video.title}</h3>
            `;
            homeVideoGrid.appendChild(card);
        });

        // 2. Random 3 Audios (Hardcoded list for Home)
        const homeAudioPool = [
            { type: 'playlist', id: '37i9dQZF1DXcBWIGoYBM5M' },
            { type: 'album', id: '1DFixLWuPkv3KT3TnV35m3' },
            { type: 'track', id: '4cOdK2wGLETKBW3PvgPWqT' }
        ];
        // No shuffle needed for audios, just show these 3 static "Featured" ones
        homeAudioGrid.innerHTML = '';
        homeAudioPool.forEach(audio => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/${audio.type}/${audio.id}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            `;
            homeAudioGrid.appendChild(card);
        });
    }
});
