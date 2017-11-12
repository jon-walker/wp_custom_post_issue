<?php get_header(); ?>

<div class="parallax-top"></div>

<h2 class="blog-index_header intro">D.L. Rawlings Blog</h2>

	<?php if (have_posts()) :
		while (have_posts()) :

			the_post(); ?>

			<!-- TOP STORY SECTION  -->
			<section class="intro story">
				<a class="thumbnail" href="<?php the_permalink(); ?>"><?php the_post_thumbnail();?></a>
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<p><?php the_excerpt(); ?></p>
			</section>

	<?php endwhile; ?>
	<?php else: ?>
		<p>Sorry, there is no news which is usually good news unless you like news in which case it's bad news.</p>
	<?php endif; ?>


<?php get_sidebar(); ?>

<?php get_footer(); ?>
