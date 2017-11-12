//@prepros-prepend vendor/jquery-3.2.1.js
//@prepros-prepend vendor/slippry.js


$( document ).ready(function() {

// Hamburger Menu Open and Close
$( ".hamburger__close" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".hamburger__close" ).show();
});
});

$( ".hamburger__close" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger__close" ).hide();
$( ".hamburger" ).show();
});
});

// Call Slippry Gallery Plugin
jQuery('selector').slippry()
$(function() {
				var demo1 = $("#home-img").slippry({
					// transition: 'fade',
					// useCSS: true,
					// speed: 1000,
					// pause: 3000,
					// auto: true,
					// preload: 'visible',
					// autoHover: false
				});

				$('.stop').click(function () {
					demo1.stopAuto();
				});

				$('.start').click(function () {
					demo1.startAuto();
				});

				$('.prev').click(function () {
					demo1.goToPrevSlide();
					return false;
				});
				$('.next').click(function () {
					demo1.goToNextSlide();
					return false;
				});
				$('.reset').click(function () {
					demo1.destroySlider();
					return false;
				});
				$('.reload').click(function () {
					demo1.reloadSlider();
					return false;
				});
				$('.init').click(function () {
					demo1 = $("#home-img").slippry();
					return false;
				});
			});
});


// GOOGLE ANALYTICS

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104388629-2', 'auto');
ga('send', 'pageview');
