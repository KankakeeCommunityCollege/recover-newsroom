// Play a YouTube embed when you click it's modal link that opens it
function playModal() {
  $(document).ready(function(){
    function autoPlayModal(){
      var trigger = $('body').find('[data-toggle="modal"]');
      trigger.click(function() {
        var theModal = $(this).data( 'target' );
        var theVid = $(theModal).find('iframe').attr('data-theVideo');
        var playVid = theVid + '?rel=0&autoplay=1';
        //var theVid = $(theModal).find('iframe').data( 'theVideo' );
        //var theSource = $(theModal).find('iframe').attr('src');
        //var autoSource = $(theModal).find('iframe').attr('src') + '?rel=0&autoplay=1';
        $(theModal).find('[id*="iframe"]').attr('allow', 'autoplay; encrypted-media');
        $(theModal).find('[id*="iframe"]').attr('src', playVid);
        $(theModal).on('hidden.bs.modal', function () {
          $(theModal).find('[id*="iframe"]').attr('allow', '');
          $(theModal).find('[id*="iframe"]').attr('src', '');
        });
      });
    }
  //  function stopModalNow() {
  //    var fullPageButton = $('body').find('[id*="fullPageVideo"]');
  //    fullPageButton.click(function() {
  //      console.log('clicked!');
  //      var theIframeTarget = $(this).data( 'iframetarget' );
  //      var theIframeSrc = $(iframeTarget).attr('src');
  //      var stopIframeSrc = theIframeSrc.replace('?rel=0&autoplay=1', '');
  //      $(theIframeTarget).attr('src', stopIframeSrc);
  //      console.log('play removed');
  //    });
  //  }
  //  stopModalNow();

    function stopVidNow() {
      var stopTrigger = $('body').find('[id*="fullPageVideo"]');
      stopTrigger.click(function() {
        var theIframe = $(this).data( 'iframetarget' );
        $(theIframe).attr('src', '');
      });
    }
    autoPlayModal();
    stopVidNow();
  });
}

export default playModal;
