/** Ref:
 * https://stackoverflow.com/a/65658994
 * https://stackoverflow.com/a/25336042
 */

$(document).ready(function() {
  var fadeInTime = 800; // ms
  var fadeOutTime = 800; // ms
  $("#take-a-view").click(function() {
    $("#home").fadeOut(fadeOutTime);
    $("#choose, .home-star-container").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $(".home-star-container").click(function() {
    $(".home-star-container, [id^='cons'], #choose").fadeOut(fadeOutTime);
    $(".zodiac-main-container, #home").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img[id^='star']").click(function() {
    $(".zodiac-main-container, #home, #choose").fadeOut(fadeOutTime);
    $(".home-star-container").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star1").click(function() {
    $("img#cons1").show();
    $("div#cons1").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star2").click(function() {
    $("img#cons2").show();
    $("div#cons2").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star3").click(function() {
    $("img#cons3").show();
    $("div#cons3").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star4").click(function() {
    $("img#cons4").show();
    $("div#cons4").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star5").click(function() {
    $("img#cons5").show();
    $("div#cons5").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star6").click(function() {
    $("img#cons6").show();
    $("div#cons6").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star7").click(function() {
    $("img#cons7").show();
    $("div#cons7").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star8").click(function() {
    $("img#cons8").show();
    $("div#cons8").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star9").click(function() {
    $("img#cons9").show();
    $("div#cons9").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star10").click(function() {
    $("img#cons10").show();
    $("div#cons10").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star11").click(function() {
    $("img#cons11").show();
    $("div#cons11").delay(fadeOutTime).fadeIn(fadeInTime);
  });

  $("img#star12").click(function() {
    $("img#cons12").show();
    $("div#cons12").delay(fadeOutTime).fadeIn(fadeInTime);
  });
});