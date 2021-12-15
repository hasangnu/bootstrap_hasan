/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_hasan = {
    attach: function (context, settings) {



            // Ara Kod Baslangic
            $(function () {
                var stickyHeaderTop = $('.navbar').offset().top + 20;
                $(window).scroll(function () {
                    if ($(window).scrollTop() > stickyHeaderTop) {
                        $('.navbar').addClass('baslik-kucult');
                    } else {
                        $('.navbar').removeClass('baslik-kucult');
                    }
                });
            });
        
            $('ul.nav li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });

            
            $(window).scroll(function () {
                if ($(this).scrollTop()) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            });

            $("#toTop").click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
            });
// Ara Kod Bitis
    }
  };

})(jQuery, Drupal);
