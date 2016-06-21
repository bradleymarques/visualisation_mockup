$(document).ready(function() {
  $(".status-icon").mouseenter(function (event) {
    $(this).addClass("status-icon-hover");
  });

  $(".status-icon").mouseleave(function (event) {
    $(this).removeClass("status-icon-hover");
  });
});