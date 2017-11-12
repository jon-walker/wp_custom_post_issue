<?php
/*
Template Name: Contact
*/
get_header(); ?>

<!-- CONTACT FORM  -->

        <h1 class="contact__headline">Let's Talk About Your Project.</h1>

        <form class="contact" action="mailto:jon@walkerportfolio.com" method="post">

            <label class="name" for="name">Name</label>
            <input id="name" type="text" name="name" required>

            <label class="phone" for="phone">Phone </label>
            <input id="phone" type="tel" name="phone">

            <label class="email" for="email">E-mail</label>
            <input id="email" type="email" name="email">

            <label class="msg" for="message">Message</label>
            <textarea name="message" rows="6"></textarea>

            <input id="submit" class="call-to-action align-rt" type="submit" name="submite" value="Send">

        </form>

<?php get_footer(); ?>
