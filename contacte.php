<?php
$pageTitle = 'Contacte - White Streaming';
$currentPage = 'contacte';
include 'includes/header.php';
?>

    <main class="container">
        <h2 class="section-title">Parla amb nosaltres</h2>

        <div style="max-width: 600px; margin: 0 auto;">
            <div class="card">
                <form action="#" method="POST" onsubmit="event.preventDefault(); alert('Gràcies pel teu missatge!');">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" id="name" class="form-control" required placeholder="El teu nom">
                    </div>

                    <div class="form-group">
                        <label for="email">Correu Electrònic</label>
                        <input type="email" id="email" class="form-control" required placeholder="exemple@correu.cat">
                    </div>

                    <div class="form-group">
                        <label for="message">Missatge</label>
                        <textarea id="message" class="form-control" rows="5" required
                            placeholder="En què et podem ajudar?"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary"
                        style="width: 100%; border: none; cursor: pointer;">Enviar Missatge</button>
                </form>
            </div>

            <div style="margin-top: 3rem; text-align: center; opacity: 0.8;">
                <p>També ens pots trobar a:</p>
                <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; font-size: 1.5rem;">
                    <span>📧 info@whitestreaming.cat</span>
                    <span>📱 +34 600 000 000</span>
                </div>
            </div>
        </div>
    </main>

<?php include 'includes/footer.php'; ?>
