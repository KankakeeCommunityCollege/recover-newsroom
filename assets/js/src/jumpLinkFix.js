function jumpLinkFix() {
  const targetNodes = document.querySelectorAll('.jsParentWatcher');
  const arrayLength = targetNodes.length;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
          if (mutation.type === 'childList') {
              console.log('A child node has been added or removed.');
          }
          else if (mutation.type === 'attributes') {
            const attributesChanged = mutation.target.attributes;
            for (var i = 0; i < attributesChanged.length; i++) {
              let attribute = attributesChanged[i];
              let nodeValue = attributesChanged[i].nodeValue;
              const timelineIsRendered = nodeValue === 'twitter-timeline twitter-timeline-rendered';
              let attributeValue = attribute.value;
              const tockifyIsLoaded = attributeValue.indexOf('height: ') > -1;

              if (timelineIsRendered) {
                return console.log('TWITTER HAS RENDERED');
              } else if (tockifyIsLoaded) {
                return console.log('TOCKIFY HAS RENDERED');
              }
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

export default jumpLinkFix;
