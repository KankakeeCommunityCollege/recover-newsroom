// ====================================================== //
// Play a YouTube embed on homepage (when used in latest  //
//  news widget) when the post's modal is opened.         //
// Stop it when its modal is closed, too.                 //
// ====================================================== //
function stopPlayingOnVideoClose(target) {
  target.addEventListener('hide.bs.modal', e => {
    const iframe = e.target.querySelector('iframe');

    iframe.setAttribute('allow', '');
    iframe.setAttribute('src', '');
  });
}

function playModal() {
  const modalList = document.querySelectorAll('.modal');

  [...modalList].forEach(modal => {
    modal.addEventListener('shown.bs.modal', e => {
      if (e.target.dataset.video) { // DATA ATTRIBUTES FROM THE HTML // Filters out posts that don't have a video
        const target = e.target;
        const video = e.target.dataset.video; // DATA ATTRIBUTES FROM THE HTML
        const embed = video.replace(/^https:\/\/youtu.be\//g, 'https://www.youtube.com/embed/'); // LINKS COME IN AS YOUTUBE SHARE LINK `https://youtu.be/<string>`
        const iframe = target.querySelector('iframe');

        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('src', `${embed}?rel=0&autoplay=1`);
        stopPlayingOnVideoClose(target);
      }
    });
  });
}

export default playModal;
