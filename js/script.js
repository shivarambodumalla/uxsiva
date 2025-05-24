$('#toggleTheme').click(function () {
    const currentTheme = $('html').attr('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply new theme
    $('html').attr('data-bs-theme', newTheme);

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