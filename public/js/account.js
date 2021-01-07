const $ = window.$;

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then((data) => {
    $('.member-name').text(data.email);
  });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});
