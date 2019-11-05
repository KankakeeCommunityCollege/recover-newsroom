// Play a YouTube embed when its modal is opened.
// Stop it when its closed, too.


function stopPlayingOnVideoClose(target) {
  const BOOTSTRAP_MODAL_HIDE = 'hide.bs.modal';

  $(target).on(BOOTSTRAP_MODAL_HIDE, function(e) {
    let targetModal = e.target;
    let iframe = targetModal.querySelector('iframe');

    iframe.setAttribute('allow', '');
    iframe.setAttribute('src', '');
  });
}



function playVideo() {
  const BOOTSTRAP_MODAL_SHOWN = 'shown.bs.modal'; // BOOTSTRAP 4 modal JS stuff
  const MODAL_CLASS = '.modal'; // BOOTSTRAP `.modal` class from `bootstrap.min.css`
  const ALLOW = 'allow'; // YOUTUBE ATTRIBUTE
  const AUTOPLAY = 'autoplay; encrypted-media'; // YOUTUBE SETTINGS
  const AUTOPLAY_URL = '?rel=0&autoplay=1'; // APPEND THIS TO THE END OF A YOUTUBE EMBED TO MALE IT AUTOPLAY

  $(MODAL_CLASS).on(BOOTSTRAP_MODAL_SHOWN, function (e) {
    //console.log(e);
    if ( e.target.dataset.video ) { // DATA ATTRIBUTES FROM THE HTML // Filters out posts that don't have a video
      let target = e.target;
      let VIDEO = e.target.dataset.video; // DATA ATTRIBUTES FROM THE HTML
      let EMBED = VIDEO.replace(/^https:\/\/youtu.be\//g, 'https://www.youtube.com/embed/'); // LINKS COME IN AS YOUTUBE SHARE LINK `https://youtu.be/<string>`
      let iframe = target.querySelector('iframe');

      iframe.setAttribute(ALLOW, AUTOPLAY);
      iframe.setAttribute('src', EMBED + AUTOPLAY_URL);
      stopPlayingOnVideoClose(target);
    }
  });
}

function playModal() {
  playVideo();
}

export default playModal;
