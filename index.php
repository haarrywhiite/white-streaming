<?php
$pageTitle = 'White Streaming - La teva plataforma de streaming';
$currentPage = 'index';
include 'includes/header.php';
?>

    <main>
        <section class="hero">
            <h1>Benvingut a <span>White Streaming</span></h1>
            <p>La millor selecció de contingut audiovisual en català. Gaudeix de vídeos i música sense límits.</p>
            <div class="cta-buttons">
                <a href="videos.php" class="btn btn-primary">Veure Vídeos</a>
                <a href="audios.php" class="btn btn-secondary">Escoltar Música</a>
            </div>
        </section>

        <section class="container">
            <h2 class="section-title">Contingut Destacat</h2>

            <h3 style="margin-bottom: 1.5rem; font-size: 1.8rem;">Vídeos Tendència</h3>
            <div id="home-trending-videos" class="grid" style="margin-bottom: 4rem;">
                <!-- Injected by JS -->
            </div>

            <h3 style="margin-bottom: 1.5rem; font-size: 1.8rem;">Àudios Populars</h3>
            <div id="home-trending-audios" class="grid">
                <!-- Injected by JS -->
            </div>
        </section>
    </main>

<?php include 'includes/footer.php'; ?>
