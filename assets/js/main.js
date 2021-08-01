/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var hiddenNavBar = $(".navbar.navbar-hidden-top");

    if (hiddenNavBar.length) {
      if (hiddenNavBar.offset().top > 50) {
          $(".navbar").addClass("top-nav-collapse");
      } else {
          $(".navbar").removeClass("top-nav-collapse");
      }  
    }
});

$(function() {
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  NOTIFICATION_COOKIE = 'c<3n';

  var hasSeenNotification = function(){
    return new RegExp(NOTIFICATION_COOKIE  + '=' + '1').test(document.cookie);
  };

  var markNotificationAsRead = function(){
    document.cookie = NOTIFICATION_COOKIE + '=1;max-age=99999;path=/';
    toggleNotificationIcon(false);
  }

  var toggleNotificationIcon = function(show){
    $('.modal-link').toggleClass('notify', show);  
  }
  
  if (!hasSeenNotification()) toggleNotificationIcon(true);

  $(document).on('show.bs.modal', markNotificationAsRead);

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  $('nav').on('show.bs.collapse', function(){
      $(this).addClass('is-expanded');
  })

  $('nav').on('hide.bs.collapse', function(){
      $(this).removeClass('is-expanded');
  })

  // GA Tracking
  // $('.ga-email-nav').click(function(){
  //   ga('send', 'event', 'Email Signup', 'Open Form', 'Nav Bar');
  // });

  // $('.ga-email-etc-coming-soon').click(function(){
  //   ga('send', 'event', 'Email Signup', 'Open Form', 'ETC - Coming Soon');
  // });
});