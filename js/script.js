$('#toggleTheme').click(function () {
    const currentTheme = $('html').attr('data-bs-theme');
    $('html').attr('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark');
    
    console.log('Theme toggled to:', currentTheme === 'dark' ? 'light' : 'dark');
  });