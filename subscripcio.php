<?php
$pageTitle = 'Subscripció - White Streaming';
$currentPage = 'subscripcio';
include 'includes/header.php';
?>

    <main class="container">
        <h2 class="section-title">Dona suport al projecte</h2>
        <p style="text-align: center; margin-bottom: 3rem; opacity: 0.8;">Tria el pla que millor s'adapti a tu i
            ajuda'ns a seguir creant contingut.</p>

        <div class="grid">
            <div class="card" style="text-align: center; padding: 3rem 1.5rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Gratuït</h3>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">0€<span
                        style="font-size: 1rem; font-weight: 400;">/mes</span></div>
                <ul style="list-style: none; margin-bottom: 2rem; opacity: 0.8; line-height: 2;">
                    <li>Accés a vídeos amb anuncis</li>
                    <li>Qualitat estàndard</li>
                    <li>Comunitat bàsica</li>
                </ul>
                <a href="#" class="btn btn-secondary" style="width: 100%; display: inline-block;">Començar</a>
            </div>

            <div class="card"
                style="text-align: center; padding: 3rem 1.5rem; border-color: var(--primary-color); position: relative; overflow: hidden;">
                <div
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));">
                </div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Prèmium</h3>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">4.99€<span
                        style="font-size: 1rem; font-weight: 400;">/mes</span></div>
                <ul style="list-style: none; margin-bottom: 2rem; opacity: 0.8; line-height: 2;">
                    <li>Sense anuncis</li>
                    <li>Qualitat 4K i HD</li>
                    <li>Contingut exclusiu</li>
                    <li>Suport prioritari</li>
                </ul>
                <a href="#" class="btn btn-primary" style="width: 100%; display: inline-block;">Subscriure's</a>
            </div>

            <div class="card" style="text-align: center; padding: 3rem 1.5rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Mecenes</h3>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">9.99€<span
                        style="font-size: 1rem; font-weight: 400;">/mes</span></div>
                <ul style="list-style: none; margin-bottom: 2rem; opacity: 0.8; line-height: 2;">
                    <li>Tot el pla Prèmium</li>
                    <li>Accés anticipat</li>
                    <li>Marxandatge oficial</li>
                    <li>Discord privat</li>
                </ul>
                <a href="#" class="btn btn-secondary" style="width: 100%; display: inline-block;">Fer-se Mecenes</a>
            </div>
        </div>
    </main>

<?php include 'includes/footer.php'; ?>
