// Adds special helper classes when the user is using Internet Exploder
function GetIEVersion() {
  const sAgent = window.navigator.userAgent;
  const Idx = sAgent.indexOf('MSIE');

  if (Idx > 0) {  // If IE, return version number.
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf('.', Idx)));
  }
  else if (!!navigator.userAgent.match(/Trident\/7\./)) {  // If IE 11 then look for Updated user agent string.
    return 11;
  }
  else {  // It is not IE
    return 0;  // console.log('Not IE. Im proud of you for not using IE!');
  }
}

function addIeClasses(querySelector, ieClass) {
  let thisQuerySelector = document.querySelectorAll(querySelector);
  for (var i = 0; i < thisQuerySelector.length; i++) {
    let thisSelection = thisQuerySelector[i];
    thisSelection.classList.add(ieClass);
  }
}

function ieOnly() {
  //const simulatedIeTrue = false;
  if (GetIEVersion() > 10) {
  //if (simulatedIeTrue === true) {
    const selectorClassObject = {
      '.js-hp-latest-tease-link': 'ie-only__no-flex',
      '.latest-news-widget__latest__tease__img-mod--default': 'ie-only__float-right',
      '.latest-news-widget__latest__tease__hgroup': 'ie-only__hgroup'
    }

    for (var key in selectorClassObject) {
      if (selectorClassObject.hasOwnProperty(key)) {
        addIeClasses(key, selectorClassObject[key]);
      }
    }
  }
}

export default ieOnly;
