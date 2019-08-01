function removeActivePreview() {
  const previews = document.querySelectorAll('.newsHeader-link-active');
  for (var i = 0; i < previews.length; i++) {
    let thisPreview = previews[i];
    thisPreview.classList.remove('newsHeader-link-active');
  }
  return;
}

function makePreviewActive(id) {
  let thisPreview = document.getElementById(id.replace(/#/g, ''));
  thisPreview.classList.add('newsHeader-link-active');
  return;
}

function newsHeader() {
  const linkList = document.querySelectorAll('.newsHeader-list-link');
  let linkListLength = linkList.length;

  for (var i = 0; i < linkListLength; i++) {
    let thisLink = linkList[i];

    thisLink.addEventListener('mouseenter', function(e) {
      let previewTarget = e.target.dataset.preview;
      removeActivePreview();
      makePreviewActive(previewTarget);
    });
    //console.log(linkPreview);
  }
}

export default newsHeader;
