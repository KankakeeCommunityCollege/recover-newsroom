function initialAnimation() {
  const firstImage = document.querySelector('.news-header__img--first');
  const firstTitle = document.querySelector('.news-header__title--first');
  const firstLead = document.querySelector('.news-header__lead--first');
  firstImage.classList.add('news-header__img--animate-in');
  firstTitle.classList.add('news-header__title--animate-in');
  firstLead.classList.add('news-header__lead--animate-in');
}

function makePreviewActive(id) {
  let thisPreview = document.getElementById(id);
  thisPreview.classList.add('newsHeader-link-active');
  thisPreview.setAttribute('aria-hidden', 'false');
}

function animateImageIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewImage = thisPreview.querySelector('.news-header__img');
  thisPreviewImage.classList.remove('news-header__img--animate-out');
  thisPreviewImage.classList.add('news-header__img--animate-in');
}

function animateTitleIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewTitle = thisPreview.querySelector('.news-header__title');
  thisPreviewTitle.classList.add('news-header__title--animate-in');
}

function animateLeadIn(id) {
  let thisPreview = document.getElementById(id);
  let thisPreviewLead = thisPreview.querySelector('.news-header__lead');
  thisPreviewLead.classList.add('news-header__lead--animate-in');
}

function animateLeadOut() {
  let visiblePreviewLead = document.querySelectorAll('.news-header__lead--animate-in');
  for (var i = 0; i < visiblePreviewLead.length; i++) {
    let lead = visiblePreviewLead[i];
    lead.classList.remove('news-header__lead--animate-in');
    lead.classList.add('news-header__lead--animate-out');
  }
}

function animateTitleOut() {
  let visiblePreviewTitle = document.querySelectorAll('.news-header__title--animate-in');
  for (var i = 0; i < visiblePreviewTitle.length; i++) {
    let title = visiblePreviewTitle[i];
    title.classList.remove('news-header__title--animate-in');
    title.classList.add('news-header__title--animate-out');
  }
  animateLeadOut();
}

function animateImageOut() {
  let visiblePreviewImage = document.querySelectorAll('.news-header__img--animate-in');
  for (var i = 0; i < visiblePreviewImage.length; i++) {
    let image = visiblePreviewImage[i];
    image.classList.remove('news-header__img--animate-in');
    image.classList.add('news-header__img--animate-out');
  }
  animateTitleOut();
}

function removeActivePreview() {
  animateImageOut();
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
      let previewTarget = e.target.dataset.preview;
      removeActivePreview();
      makePreviewActive(previewTarget);
      animateImageIn(previewTarget);
      animateTitleIn(previewTarget);
      animateLeadIn(previewTarget);
    });
    //console.log(linkPreview);
  }
}

export default newsHeader;
