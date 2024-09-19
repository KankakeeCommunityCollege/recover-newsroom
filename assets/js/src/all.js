import '../../scss/main.scss';

window.addEventListener('load', () => {
  if (document.getElementById('todaysDate')) {
    import('./setDate')
      .then(({ default: setDate }) => setDate());
  }
  if (document.getElementById('featureHover')) {
    import('./newsWidget')
      .then(({ default: newsWidget }) => newsWidget());

    import('./contactLinkFix')
      .then(({ default: contactLinkFix }) => contactLinkFix())
  }
  if (document.getElementById('yt_list')) {
    import('./playlist')
      .then(({ default: playlist }) => playlist());
  }
  if (document.querySelector('a[data-video]')) {
    import('./playModal')
      .then(({ default: playModal }) => playModal());
  }
});
