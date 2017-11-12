<?php get_header(); ?>

<!-- INTRO SECTION  -->
<section class="intro">
    <h2>We Let Our Work Do the Talking</h2>

    <p class="instructions">Click the pictures learn more.</p>
    <?php if (have_posts()) : ?>
        <div class="portfolio-container">
            <?php while (have_posts()) : the_post(); ?>
                <a href="<?php echo the_permalink(); ?>">
                    <section class="portfolio-section">
                        <h3><?= the_title(); ?></h3>
                        <p><img src="<?= the_post_thumbnail(); ?>"></p>
                    </section>
                </a>
            <?php endwhile ?>

        </div>

    <?php endif ?>

</section>

<?php get_footer(); ?>
