<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<article class="project">

    <!-- INTRO SECTION  -->
    <div id="project__intro" class="intro">
        <p class="img"><img src="<?php bloginfo('template_url') ?>/img/kane-co-rendering-01.jpg" alt="Apparatus Building Rendering" title="Apparatus Building Rendering"></p>
        <h2>Kane Co. Public Safety Training Center</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

    <!-- SECTION 1 -->
    <section id="project__phase1">
        <p class="img"><img src="<?php bloginfo('template_url') ?>/img/architect.jpg" alt="Architect Working" title=""></p>
        <h3><span class="phase-title">Phase 1:</span><br/>Schematic Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>

    <!-- SECTION 2 -->
    <section id="project__phase2">
        <p class="img left-half"><img src="<?php bloginfo('template_url') ?>/img/kane-co-rendering-02.jpg" alt="" title=""></p>
        <div class="right-half">
            <h3><span class="phase-title">Phase 2:</span><br/>Design Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </section>
    <!-- SECTION 3 -->
    <section id="project__phase3">
        <p class="img"><img src="<?php bloginfo('template_url') ?>/img/reviewing-plans.jpg" alt="Project Managers Secure Construction Permits" title="Project Managers Secure Construction Permits"></p>
        <h3><span class="phase-title">Phase 3:</span><br/>Construction Permits</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>

    <!-- SECTION 4 -->
    <section id="project__phase4">
        <p class="img left-half"><img src="<?php bloginfo('template_url') ?>/img/kane-co-rendering-03.jpg" alt="" title=""></p>
        <div class="right-half">
            <h3><span class="phase-title">Phase 4:</span><br/>Bidding and Negotiation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </section>

    <!-- SECTION 5 -->
    <section id="project__phase5">
        <p class="img left-half"><img src="<?php bloginfo('template_url') ?>/img/construction.jpg" alt="Construction Proceeds on Classrooms" title="Construction Proceeds on Classrooms"></p>
        <div class="right-half">
            <h3><span class="phase-title">Phase 5:</span><br/>Construction Management</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </section>

</article>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
