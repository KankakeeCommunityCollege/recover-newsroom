// Play a YouTube embed when you click it's modal link that opens it
function stopVideoOnClose(id) {
  $(id).on('hidden.bs.modal', function () {
    let targetModal = document.getElementById(id.replace(/#/g, ''));
    let playingIframe = targetModal.querySelector('iframe');
    playingIframe.setAttribute('allow', '');
    playingIframe.setAttribute('src', '');
  });
}

function playVideo(id, video) {
  let targetModal = document.getElementById(id.replace(/#/g, ''));
  let iframe = targetModal.querySelector('iframe');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', video + '?rel=0&autoplay=1');
  stopVideoOnClose(id);
}

function playModal() {
  if (document.querySelectorAll('newsHeader-video-link')) {
    const videoLinks = document.querySelectorAll('newsHeader-video-link');
    for (var i = 0; i < videoLinks.length; i++) {
      let link = videoLinks[i];
      link.addEventListener('click', function(e) {
        let video = e.target.dataset.video;
        let modalId = e.target.dataset.target;
        playVideo(modalId, video);
      }, false);
    }
  }
}

export default playModal;
