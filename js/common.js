function screenR(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };
    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
function animateEndCir(){
    var animationDiv = $(".c");
    animationDiv.bind("webkitAnimationEnd", function() {
        animationDiv.removeClass("scale-cir");
        animationDiv.addClass("rotate-cir");
    });
}
function animateEndTri(){
  var animationDiv = $(".triangle");
  animationDiv.bind("webkitAnimationEnd",function(){
    animationDiv.removeClass("scale-cir");
    animationDiv.addClass("tri-ani");
  })
}
function musicPlay(){
    var audio = $('#car_audio');
      var isPlaying = false;
      function playAudio() {
          var audio = $('#car_audio');
          if (audio.attr('src') == undefined) {
              audio.attr('src', audio.data('src'));
          }
          audio[0].play();
          isPlaying = true;
      }
      $(function(){
          playAudio();
          document.addEventListener("WeixinJSBridgeReady", function () {
              WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                  network = e.err_msg.split(":")[1];  //结果在这里
                  playAudio();
              });
          }, false);
      })
}