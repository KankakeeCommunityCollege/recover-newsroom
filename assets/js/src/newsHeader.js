function initialAnimation() {
  const firstImage = document.querySelector('.news-header__img--first');
  const firstTitle = document.querySelector('.news-header__title--first');
  const firstLead = document.querySelector('.news-header__lead--first');

  firstImage.classList.add('news-header__animate-in');
  firstTitle.classList.add('news-header__animate-in');
  firstLead.classList.add('news-header__animate-in');
  document.querySelector('.news-header__play-icon--first') ?
    document.querySelector('.news-header__play-icon--first').classList.add('news-header__animate-in')
  : null;
}

function makePreviewActive(id) {
  let thisPreview = document.getElementById(id);
  thisPreview.classList.add('newsHeader-link-active');
  thisPreview.setAttribute('aria-hidden', 'false');
}

function animateImageIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewImage = thisPreview.querySelector('.news-header__img');
  thisPreviewImage.classList.remove('news-header__animate-out');
  thisPreviewImage.classList.add('news-header__animate-in');
}

function animatePlayIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPlayIcon = thisPreview.querySelector('.news-header__play-icon');
  thisPlayIcon.classList.remove('news-header__animate-out');
  thisPlayIcon.classList.add('news-header__animate-in');
}

function animateTitleIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewTitle = thisPreview.querySelector('.news-header__title');
  thisPreviewTitle.classList.add('news-header__animate-in');
}

function animateLeadIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewLead = thisPreview.querySelector('.news-header__lead');
  thisPreviewLead.classList.add('news-header__animate-in');
}

function animateItemsOut() {
  let visiblePreviewItems = document.querySelectorAll('.news-header__animate-in');
  for (var i = 0; i < visiblePreviewItems.length; i++) {
    let item = visiblePreviewItems[i];
    item.classList.remove('news-header__animate-in');
    item.classList.add('news-header__img--animate-out');
  }
}

function removeActivePreview() {
  animateItemsOut();
  const previews = document.querySelectorAll('.newsHeader-link-active');
  for (var i = 0; i < previews.length; i++) {
    let thisPreview = previews[i];
    thisPreview.classList.remove('newsHeader-link-active');
    thisPreview.setAttribute('aria-hidden', 'true');
  }
}

function newsHeader() {
  const initialAnimationCall = (function() {
    let executed = false;
    return function() {
      if (!executed) {
        executed = true;
        initialAnimation();
      }
    };
  })();
  const linkList = document.querySelectorAll('.newsHeader-list-link');
  let linkListLength = linkList.length;

  initialAnimationCall();
  for (var i = 0; i < linkListLength; i++) {
    let thisLink = linkList[i];

    thisLink.addEventListener('mouseenter', function(e) {
      let previewTarget = e.target.dataset.preview;  // data-preview="" attribute that points to the correct id
      const linkIsVideoPost = e.target.dataset.video !== undefined;  // data-video="" attribute is only one video-post links
      removeActivePreview();
      makePreviewActive(previewTarget);
      animateImageIn(previewTarget);
      linkIsVideoPost ?
        animatePlayIn(previewTarget)
      : null;
      animateTitleIn(previewTarget);
      animateLeadIn(previewTarget);
    });
    //console.log(linkPreview);
  }
}

export default newsHeader;
