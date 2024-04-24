function contactLinkFix() {
  if (window.location.href.indexOf("#contact") > -1) {
    setTimeout(function () {
      let scrollBottom = window.innerHeight + 3000;
      window.scroll('0', scrollBottom);
    }, 2000);
  }
}

export default contactLinkFix;
