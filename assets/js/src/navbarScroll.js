// Shrink the local navbar when you scroll down
// (navbar scroll effects)
function navbarScroll() {

  const mainNav = document.getElementById('mainNav');
  let content = document.querySelector('html');

  function shrinkNavbar() {
    mainNav.classList.add('navbar-shrink');
  }

  function unshrinkNavbar() {
    mainNav.classList.remove('navbar-shrink');
  }

  window.addEventListener('scroll', function() {
    let contentDistanceFromTop = content.scrollTop;
    console.log(contentDistanceFromTop);
    contentDistanceFromTop > 100 ?
    shrinkNavbar()
  : unshrinkNavbar();
  });
}

export default navbarScroll;
