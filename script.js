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

    // --- Video Randomizer Logic ---
    const videoGrid = document.querySelector('.video-grid-container');
    if (videoGrid) {
        // Curated pool of "Trending" style videos (Music, viral, tech, funny)
        // IDs must be valid YouTube video IDs
        const videoPool = [
            { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up" },
            { id: "jNQXAC9IVRw", title: "Me at the zoo" },
            { id: "3SUMJhQ_1y4", title: "Audrey Hepburn - Moon River" },
            { id: "5qap5aO4i9A", title: "lofi hip hop radio - beats to relax/study to" },
            { id: "jfKfPfyJRdk", title: "lofi hip hop radio - beats to sleep/chill to" },
            { id: "L_jWHffIx5E", title: "Smash Mouth - All Star" },
            { id: "9bZkp7q19f0", title: "PSY - GANGNAM STYLE" },
            { id: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito" },
            { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk" },
            { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
            { id: "fJ9rUzIMcZQ", title: "Queen - Bohemian Rhapsody" },
            { id: "CevxZvSJLk8", title: "Katy Perry - Roar" },
            { id: "RgKAFK5djSk", title: "Wiz Khalifa - See You Again" },
            { id: "YQHsXMglC9A", title: "Adele - Hello" },
            { id: "papuvlVeZg8", title: "Clean Bandit - Rockabye" },
            { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You" },
            { id: "uelHwf8o7_U", title: "Eminem - Love The Way You Lie" },
            { id: "ALZHF5UqnU4", title: "Marshmello - Alone" },
            { id: "p7Qp321t8Ww", title: "Coldplay - Hymn For The Weekend" },
            { id: "PT2_F-1esPk", title: "The Chainsmokers - Closer" }
        ];

        // Shuffle function
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Shuffle and pick top 9
        const selectedVideos = shuffle([...videoPool]).slice(0, 9);

        // Clear existing content (if any placeholders exist)
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
});
