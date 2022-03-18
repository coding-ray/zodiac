/** Ref:
 * https://stackoverflow.com/a/65658994
 * https://stackoverflow.com/a/25336042
 */

$(document).ready(function() {
  var fadeInTime = 800; // ms
  var fadeOutTime = 800; // ms
  var rocketAnimation = {
    timeBeforeFadeOut: 900,
    timeOfFadeOut: 100,
    timeBetweenFades: 200,
    timeBeforeFadeIn: 1100,
  };
  var globalIntervalID = undefined;

  function rocket_animation(fadeOutAction, fadeInAction, finalAction) {
    if (globalIntervalID !== undefined) {
      clearInterval(globalIntervalID);
      $("#rocket")
        .removeClass("rocket-rotation, rocket-move-up");
    }
    $("#rocket")
      .addClass("rocket-rotation")
      .css({ "z-index": "1" });

    var timeStart = Date.now();
    var taskDone = 0;
    var intervalID = setInterval(() => {
      var timeNow = Date.now();
      var timeElapsed = timeNow - timeStart; // reset for each task
      switch (taskDone) {
        case 0:
          if (timeElapsed > rocketAnimation.timeBeforeFadeOut) {
            timeStart = timeNow;
            taskDone = 1;
            $("#rocket")
              .fadeOut(rocketAnimation.timeOfFadeOut);
            if (typeof fadeOutAction === 'function') {
              fadeOutAction();
            }
          }
          break;
        case 1:
          if (timeElapsed > rocketAnimation.timeBetweenFades) {
            timeStart = timeNow;
            taskDone = 2;
            $("#rocket")
              .removeClass("rocket-rotation")
              .css({
                "display": "block",
                "z-index": "-1"
              })
              .addClass("rocket-move-up");
            if (typeof fadeInAction === 'function') {
              fadeInAction();
            }
          }
          break;
        case 2:
          if (timeElapsed > fadeInTime) {
            timeStart = timeNow;
            taskDone = 3;
            $("#rocket")
              .removeClass("rocket-move-up");
            if (typeof finalAction === 'function') {
              finalAction();
            }
          }
          break;
        default:
          clearInterval(intervalID);
          globalIntervalID = undefined;
      }
    }, 100);
    globalIntervalID = intervalID;
  };

  $("#take-a-view").click(function() {
    $("#home").fadeOut(fadeOutTime, () => {
      $("#choose, .home-star-container").fadeIn(fadeInTime);
    });
  });

  $(".home-star-container").click(function() {
    function fadeOutAction() {
      $(".home-star-container, [id^='cons'], #choose, #solar").hide();
    }

    function fadeInAction() {
      $(".zodiac-main-container, #home, #solar").fadeIn(fadeInTime);
    }

    rocket_animation(fadeOutAction, fadeInAction);
  });

  /* Info pages of the 12 cons */

  $("img[id^='star']").click(function() {
    function fadeOutAction() {
      $(".zodiac-main-container, #home, #choose, #solar").hide();
    }

    function fadeInAction() {
      $("#solar, .home-star-container").fadeIn(fadeInTime);
    }
    rocket_animation(fadeOutAction, fadeInAction);
  });

  $("img#star1").click(function() {
    $("img#cons1").show();
    $("#cons1").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star2").click(function() {
    $("img#cons2").show();
    $("div#cons2").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star3").click(function() {
    $("img#cons3").show();
    $("div#cons3").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star4").click(function() {
    $("img#cons4").show();
    $("div#cons4").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star5").click(function() {
    $("img#cons5").show();
    $("div#cons5").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star6").click(function() {
    $("img#cons6").show();
    $("div#cons6").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star7").click(function() {
    $("img#cons7").show();
    $("div#cons7").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star8").click(function() {
    $("img#cons8").show();
    $("div#cons8").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star9").click(function() {
    $("img#cons9").show();
    $("div#cons9").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star10").click(function() {
    $("img#cons10").show();
    $("div#cons10").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star11").click(function() {
    $("img#cons11").show();
    $("div#cons11").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });

  $("img#star12").click(function() {
    $("img#cons12").show();
    $("div#cons12").delay(rocketAnimation.timeBeforeFadeIn).fadeIn(fadeInTime);
  });
});