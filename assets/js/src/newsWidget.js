// ========================================================================================= //
// CUSTOM JS FOR LATEST-NEWS-WIDGET on homepage                                              //
//                                                                                           //
// Be sure to add a post with YouTube video when changing/testing this JS                    //
// ========================================================================================= //

const featureHover = document.getElementById('featureHover');
const linkList = document.querySelectorAll('.js-hp-latest-tease-link');
const jsHpFeatureList = document.querySelectorAll('.js-hp-feature');
const listElement = document.getElementById('jsTeaseList');
const imgModList = document.querySelectorAll('.js-hp-feature--img-mod');
const featureList = document.querySelectorAll('.js-hp-feature');
const featureInner = document.querySelector('.latest-news-widget__feature-mod--inner');

function toggleAriaHidden(visibleLink, visiblePreview, linkList) {
  [...linkList].forEach(link => {
    const preview = document.getElementById(link.id.replace('Tease', 'News'));

    if (visibleLink == link) {
      visibleLink.setAttribute('aria-hidden', 'false');
      visiblePreview.setAttribute('aria-hidden', 'false');
    } else {
      link.setAttribute('aria-hidden', 'true');
      preview.setAttribute('aria-hidden', 'true');
    }
  });
}

function newsWidget() {
  [...featureList].forEach(feature => feature.classList.add('topper-trans-in'));

  [...linkList].forEach(link => {
    link.addEventListener('mouseenter', e => {
      const preview = document.getElementById(e.target.id.replace('Tease', 'News'));
      const index = e.target.id.replace(/^\D+(\d)$/, `$1`) - 1;
      const translate = index * 25;
      const img = e.target.dataset.image;
      
      [...jsHpFeatureList].forEach(item => {
        item.classList.remove('topper-trans-in');
        item.classList.add('topper-trans-out');
      })
      
      // animate play icon if it exists
      if (e.target.dataset.video) {
        const playIcon = preview.querySelector('.js-play-icon');

        playIcon.classList.remove('topper-trans-in');
        playIcon.classList.add('topper-trans-out');
      }
      // animate the article preview image
      preview.classList.remove('topper-trans-out');
      preview.classList.add('topper-trans-in');
      // change aria-hidden for visible items
      toggleAriaHidden(e.target, preview, linkList);

      [...listElement.querySelectorAll('.tease-is-active')]
        .forEach(li => li.classList.remove('tease-is-active'));
      e.target.classList.add('tease-is-active');

      [...imgModList].forEach(div => div.setAttribute('style', `background-image: url('${img}')`));
      [...featureList].forEach(a => a.setAttribute('href', e.target.getAttribute('href')));
      featureInner.setAttribute('style', `transform: translate3d(-${translate}%, 0, 0);`);
    });
  });

  if (document.querySelector('.js-play-icon')) {
    const playIconList = document.querySelectorAll('.js-play-icon');

    // animate play icon on page load
    [...playIconList].forEach(icon => icon.classList.add('topper-trans-in'));
    
    // animate play icon on mouseenter
    featureHover.addEventListener('mouseenter', _e => {
      [...playIconList].forEach(icon => {
        icon.classList.remove('play-zoom-out');
        icon.classList.add('play-zoom-in');
      });
    });
    featureHover.addEventListener('mouseleave', _e => {
      [...playIconList].forEach(icon => {
        icon.classList.remove('play-zoom-in');
        icon.classList.add('play-zoom-out');
      });
    });
  }

}

export default newsWidget;
