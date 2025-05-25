// Apply theme on page load
$(document).ready(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    $('html').attr('data-bs-theme', savedTheme);
    
    const icon = $('#themeIcon');
    if (savedTheme === 'light') {
      icon.removeClass('ri-sun-line').addClass('ri-moon-line');
    } else {
      icon.removeClass('ri-moon-line').addClass('ri-sun-line');
    }
  });

  // Theme toggle on click
  $('#toggleTheme').click(function () {
    const currentTheme = $('html').attr('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply and store new theme
    $('html').attr('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle icon
    const icon = $('#themeIcon');
    if (newTheme === 'light') {
      icon.removeClass('ri-sun-line').addClass('ri-moon-line');
    } else {
      icon.removeClass('ri-moon-line').addClass('ri-sun-line');
    }
  });

  //Navigation bar scroll effect
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
  $(window).trigger('scroll');