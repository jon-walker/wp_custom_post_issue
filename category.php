<?php get_header(); ?>

<div class="parallax-top"></div>

<h2 class="blog-index_header intro"><?php _e( 'Categories for ', 'html5blank' ); single_cat_title(); ?></h2>

	<?php if (have_posts()) :
		while (have_posts()) :

			the_post(); ?>

			<!-- TOP STORY SECTION  -->
			<section class="story">
				<a class="thumbnail" href="<?php the_permalink(); ?>"><?php the_post_thumbnail();?></a>
				<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
				<p><?php the_excerpt(); ?></p>
			</section>

	<?php endwhile; ?>
	<?php else: ?>
		<p>Sorry, there are no stories in this category.</p>
	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
