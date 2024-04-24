// =========================================================================== //
// Tockify and X render after the /#contacts jump-link is scrolled into view   //
//  causing the contacts link to miss its target.                              //
// This module forces the page to the bottom after giving them time to render. //
// =========================================================================== //
function contactLinkFix() {
  if (window.location.href.indexOf("#contact") > -1) {
    setTimeout(function () {
      let scrollBottom = window.innerHeight + 3000;
      window.scroll('0', scrollBottom);
    }, 2000);
  }
}

export default contactLinkFix;
