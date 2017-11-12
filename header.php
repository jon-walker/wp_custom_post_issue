<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' : '; } ?><?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>img/dlr-favicon.png" rel="shortcut icon">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Import Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab" rel="stylesheet">

		<!-- STYLES ARE ENQUED THROUGH FUNCTIONS.PHP -->

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>
		<header>
            <!-- Logo -->
            <h1><a href="<?php bloginfo('url'); ?>"><img src="<?php bloginfo('template_url'); ?>/img/dlr-logo.png" alt="D.L. Rawlings Architecture + Planning" title="D.L. Rawlings Architecture + Planning" class="logo"></a></h1>

            <button class="hamburger">&#9776;</button>
            <button class="hamburger__close">&#735;</button>

            <!-- Navigation Links -->
            <nav class="menu">
                <ul>
                    <?php html5blank_nav(); ?>
                </ul>
            </nav>

            <ul class="desktop-nav">
                <?php html5blank_nav(); ?>
            </ul>

        </header>
