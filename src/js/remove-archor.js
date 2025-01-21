window.addEventListener('DOMContentLoaded', () => {
  // Если в URL есть якорь
  if (window.location.hash) {
    // Прокручиваем страницу к самому верху
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Удаляем якорь из URL
    history.replaceState(null, '', window.location.pathname);
  }
});
