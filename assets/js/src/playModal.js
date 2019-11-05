// Play a YouTube embed when its modal is opened.
// Stop it when its closed, too.


function stopPlayingOnVideoClose(target) {
  $(target).on('hide.bs.modal', function(e) {
    let targetModal = e.target;
    let iframe = targetModal.querySelector('iframe');

    iframe.setAttribute('allow', '');
    iframe.setAttribute('src', '');
  });
}



function playVideo() {
  $('.modal').on('shown.bs.modal', function (e) {
    //console.log(e);
    if ( e.target.dataset.video ) {
      let target = e.target;
      let video = e.target.dataset.video;
      let embed = video.replace(/^https:\/\/youtu.be\//g, 'https://www.youtube.com/embed/');
      let iframe = target.querySelector('iframe');

      iframe.setAttribute('allow', 'autoplay; encrypted-media');
      iframe.setAttribute('src', embed + '?rel=0&autoplay=1');
      stopPlayingOnVideoClose(target);
    }
  });
}

function playModal() {
  playVideo();
}

export default playModal;
