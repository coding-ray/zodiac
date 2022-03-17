/** Ref:
 * https://stackoverflow.com/a/65658994
 * https://stackoverflow.com/a/25336042
 */

$(document).ready(function() {
  var fadeInTime = 800; // ms
  var fadeOutTime = 800; // ms
  var animationTime = 2900; // ms
  var earlyFadeOutTime = 300; // ms
  var timeBeforeFadeOut = animationTime - earlyFadeOutTime - 100;

  function rocket_animation() {
    $("#rocket")
      .addClass("rocket-rotation")
      .css({ "z-index": "1" });

    setTimeout(() => {
      $("#rocket")
        .fadeOut(earlyFadeOutTime);
    }, timeBeforeFadeOut);

    setTimeout(() => {
      $("#rocket")
        .removeClass("rocket-rotation")
        .css({ "display": "block" })
        .addClass("rocket-move-up");
    }, animationTime);

    setTimeout(() => {
      $("#rocket")
        .removeClass("rocket-move-up")
        .css({ "z-index": "-1" });
    }, animationTime + fadeInTime);
  };

  $("#take-a-view").click(function() {
    $("#home").fadeOut(fadeOutTime, () => {
      $("#choose, .home-star-container").fadeIn(fadeInTime);
    });
  });

  $(".home-star-container").click(function() {
    rocket_animation();
    $(".home-star-container, [id^='cons'], #choose, #solar")
      .delay(timeBeforeFadeOut)
      .fadeOut(0, () => {
        $(".zodiac-main-container, #home, #solar")
          .delay(earlyFadeOutTime)
          .fadeIn(fadeInTime);
      });
  });

  /* Info pages of the 12 cons */

  $("img[id^='star']").click(function() {
    rocket_animation();
    setTimeout(() => {
      $(".zodiac-main-container, #home, #choose, #solar")
        .fadeOut(0, () => {
          $("#solar, .home-star-container")
            .delay(earlyFadeOutTime)
            .fadeIn(fadeInTime);
        });
    }, timeBeforeFadeOut);
  });

  $("img#star1").click(function() {
    $("img#cons1").show();
    $("#cons1").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star2").click(function() {
    $("img#cons2").show();
    $("div#cons2").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star3").click(function() {
    $("img#cons3").show();
    $("div#cons3").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star4").click(function() {
    $("img#cons4").show();
    $("div#cons4").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star5").click(function() {
    $("img#cons5").show();
    $("div#cons5").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star6").click(function() {
    $("img#cons6").show();
    $("div#cons6").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star7").click(function() {
    $("img#cons7").show();
    $("div#cons7").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star8").click(function() {
    $("img#cons8").show();
    $("div#cons8").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star9").click(function() {
    $("img#cons9").show();
    $("div#cons9").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star10").click(function() {
    $("img#cons10").show();
    $("div#cons10").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star11").click(function() {
    $("img#cons11").show();
    $("div#cons11").delay(animationTime).fadeIn(fadeInTime);
  });

  $("img#star12").click(function() {
    $("img#cons12").show();
    $("div#cons12").delay(animationTime).fadeIn(fadeInTime);
  });
});