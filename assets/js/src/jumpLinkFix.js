function checkMutations() {

}

function jumpLinkFix() {
  //console.log('JUMPLINK FIX HAS FIRED');
  let timelineVisible = false;
  let tacosVisible = false;
  const targetNodes = document.querySelectorAll('.jsParentWatcher');
  const arrayLength = targetNodes.length;
  const config = {
    attributes: true,
    childList: true,
    subtree: true
  };
  const callback = function(mutationsList, observer) {

    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        const attributesChanged = mutation.target.attributes;

        for (var i = 0; i < attributesChanged.length; i++) {
          let attribute = attributesChanged[i];
          let nodeValue = attribute.nodeValue;
          const timelineIsRendered = nodeValue === 'twitter-timeline twitter-timeline-rendered';
          let attributeValue = attribute.value;
          const tockifyIsLoaded = attributeValue.indexOf('height: ') > -1;
          const url = document.location.toString();
          const initMoveUserToContacts = (function() {
            let executed = false;
            return function() {
              if (!executed) {
                executed = true;
                // do something
                console.log('ONE-TIME FUNCTION HAS FIRED');
              }
            };
          })();

          if (timelineIsRendered) {
            timelineVisible = true;
          } else if (tockifyIsLoaded) {
            tacosVisible = true;
          }
          timelineVisible && tacosVisible ?
            initMoveUserToContacts()
          : null;
        }
      }
    }
  };
  for (let i = 0; i < arrayLength; i++) {
    let node = targetNodes[i];
    let observer = new MutationObserver(callback);
    observer.observe(node, config);
  }

  // Create an observer instance linked to the callback function


  // Start observing the target node for configured mutations


  // Later, you can stop observing
  //observer.disconnect();
}

function checkForContactsLink() {
  const url = document.location.toString();
  const contactLinkRegEx = /#contact$/g;
  const urlIsContactsLink = url.search(contactLinkRegEx) != -1;
  urlIsContactsLink ?
    jumpLinkFix()
  : null;
}

export default checkForContactsLink;
