<?php
/*
Template Name: Home
*/
get_header(); ?>

<div class="parallax-top"></div>

        <!-- INTRO SECTION  -->
        <section class="home-intro">
            <!-- JQuery slider pulls images from the list below to display -->
            <p class="home_img-left"><img src="<?php bloginfo('template_url') ?>/img/smiling-face-01.jpg" alt="Friendly Neighbors" title="Friendly Neighbors"></p>
            <p class="home_img-right"><img src="<?php bloginfo('template_url') ?>/img/smiling-face-02.jpg" alt="Friendly Neighbors" title="Friendly Neighbors"></p>
            <ul id="home-img">
				<li><a href="#slide1"><img src="<?php bloginfo('template_url') ?>/img/kane-co-rendering-03.jpg" alt="Kane Co. Public Safety Training Center"></a></li>
				<li><a href="#slide2"><img src="<?php bloginfo('template_url') ?>/img/ny-square-rendering-01.jpg"  alt="New York Square"></a></li>
				<li><a href="#slide3"><img src="<?php bloginfo('template_url') ?>/img/restaurant-row.jpg" alt="Restaurant Row Rendering"></a></li>
		    </ul>
            <h2>Planning to Build?</h2>
            <p>Programmatically not enough bandwidth quarterly sales are at an all-time low best practices, so organic growth. Rock Star/Ninja root-and-branch review meeting assassin, for herding cats, yet who's responsible for the ask for this request? criticality. Not a hill to die on open door policy. Bob called an all-hands this afternoon.</p>
            <a href="portfolio.html">
                <button class="call-to-action" type="button" name="button">See Our Work</button>
            </a>
        </section>

        <div class="parallax-divider"></div>

        <!-- TESTIMONIALS SECTION  -->
        <section class="testimonials">

            <h2>What Our Customers Say</h2>
            <div class="testimonials-flex-container">
                <!-- Client Testimonial 1 -->
                <section class="testimonials_box">
                    <div class="testimonials_img">
                        <img src="<?php bloginfo('template_url') ?>/img/portrait.jpg" alt="Portrait" title="Portrait">
                    </div>
                    <div class="testimonials_text">
                        <h3>Nameless Face</h3>
                        <p class="testimonials_title">Creative Company</p>
                        <p class="testimonials_quote">It looks ok on my screen. Can you put "find us on facebook" by the facebook logo? I really like the colour but can you change it.</p>
                    </div>
                </section>

                <!-- Client Testimonial 2 -->
                <section class="testimonials_box">
                    <div class="testimonials_img">
                        <img src="<?php bloginfo('template_url') ?>/img/portrait2.jpg" alt="Portrait" title="Portrait">
                    </div>
                    <div class="testimonials_text">
                        <h3>Namely McNamerson</h3>
                        <p class="testimonials_title">Awesome Company, Inc.</p>
                        <p class="testimonials_quote">It's great, can you add a beard though we are a big name to have in your portfolio try a more powerful colour. We exceed the clients' expectations could you rotate the picture to show the other side of the room?</p>
                    </div>
                </section>

                <!-- Client Testimonial 3 -->
                <section class="testimonials_box">
                    <div class="testimonials_img">
                        <img src="<?php bloginfo('template_url') ?>/img/portrait3.jpg" alt="Portrait" title="Portrait">
                    </div>
                    <div class="testimonials_text">
                        <h3>Nameberly Namehoff</h3>
                        <p class="testimonials_title">Looks Official Corp.</p>
                        <p class="testimonials_quote">That sandwich needs to be more playful needs to be sleeker, for can you rework to make the pizza look more delicious. Will royalties in the company do instead of cash the flier should feel like a warm handshake.</p>
                    </div>
                </section>
            </div>

            <a href="about.html">
                <button class="call-to-action" type="button" name="button">Learn More</button>
            </a>

        </section>

        <!-- FUNNELING SECTION  -->
        <section class="home-funnel">
            <h2>What Are You Building?</h2>

            <!--Restaurant Button-->
            <a href="project-template.html">
                <button type="button" name="restaurant">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/spoon-knife.svg" alt="Restaurant Icon" title="Restaurant Icon"></p>
                    <p>Restaurant</p>
                </button>
            </a>

            <!--Office Button-->
            <a href="project-template.html">
                <button type="button" name="">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/aid-kit.svg" alt="Office Icon" title="Office Icon"></p>
                    <p>Office</p>
                </button>
            </a>

            <!--Industrial Button-->
            <a href="project-template.html">
                <button type="button" name="">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/gears.svg" alt="Industrial Icon" title="Industrial Icon"></p>
                    <p>Industrial</p>
                </button>
            </a>

            <!--Mixed-Use Button-->
            <a href="project-template.html">
                <button type="button" name="mixed-use">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/office.svg" alt="Mixed Use Development Icon" title="Mixed Use Development Icon"></p>
                    <p>Mixed Use</p>
                </button>
            </a>

            <!--Interior Renovation Button-->
            <a href="project-template.html">
                <button type="button" name="renovation">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/hammer.svg" alt="Renovation Icon" title="Renovation Icon"></p>
                    <p>Interior Renovation</p>
                </button>
            </a>

            <!--Multifamily Button-->
            <a href="project-template.html">
                <button type="button" name="multifamily">
                    <p class="funnel-icon"><img src="<?php bloginfo('template_url') ?>/img/icons/home.svg" alt="Multifamily Icon" title="Multifamily Icon"></p>
                    <p>Multi-family Residential</p>
                </button>
            </a>
        </section>

        <div class="parallax-divider"></div>
        

<?php get_footer(); ?>
