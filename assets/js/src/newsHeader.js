function addAnimateInClass(el) {
  return el.classList.add('news-header__animate-in');
}

function initPageLoadAnimation() {
  const FIRST_NEWS_ITEMS = { // points to classes built out in the site's html
    FIRST_NEWS_IMAGE: document.querySelector('.news-header__img--first'),
    FIRST_NEWS_TITLE: document.querySelector('.news-header__title--first'),
    FIRST_NEWS_LEAD: document.querySelector('.news-header__lead--first'),
    FIRST_NEWS_PLAY: document.querySelector('.news-header__play-icon--first')
  }

  for (var element in FIRST_NEWS_ITEMS) {
    if (FIRST_NEWS_ITEMS.hasOwnProperty(element)) {
      addAnimateInClass(FIRST_NEWS_ITEMS[element]);
    }
  }
}

function animateItemsOut() {
  let visiblePreviewItems = document.querySelectorAll('.news-header__animate-in');
  let len = visiblePreviewItems.length;

  for (var i = 0; i < len; i++) {
    let item = visiblePreviewItems[i];
    item.classList.remove('news-header__animate-in');
    item.classList.add('news-header__img--animate-out');
  }
}

function removeActivePreview() {
  const ACTIVE_PREVIEWS = document.querySelectorAll('.newsHeader-link-active');
  let len = ACTIVE_PREVIEWS.length;

  animateItemsOut();
  for (var i = 0; i < len; i++) {
    let thisPreview = ACTIVE_PREVIEWS[i];
    thisPreview.classList.remove('newsHeader-link-active');
    thisPreview.setAttribute('aria-hidden', 'true');
  }
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

function mouseEnterFunction(event) {
  let TARGET_PREVIEW = event.target.dataset.preview;  // data-preview="" attribute that points to the correct id
  removeActivePreview();
  makePreviewActive(TARGET_PREVIEW);
  animateImageIn(TARGET_PREVIEW);
  event.target.dataset.video ?
    animatePlayIn(TARGET_PREVIEW)
  : null;
  animateTitleIn(TARGET_PREVIEW);
  animateLeadIn(TARGET_PREVIEW);
}

function addMouseEnterListener(listItem) {
  listItem.addEventListener('mouseenter', mouseEnterFunction);
}

function loopOverListLinks(list, listLength) {
  for (var i = 0; i < listLength; i++) {
    addMouseEnterListener(list[i]);
  }
}

function newsHeader() {
  const LIST_LINKS = document.querySelectorAll('.newsHeader-list-link');

  initPageLoadAnimation();
  loopOverListLinks(LIST_LINKS, LIST_LINKS.length);
}

export default newsHeader;
