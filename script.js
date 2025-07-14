$(document).ready(function () {
  const images = [
    "img/Banner1.avif",
    "img/Banner2.avif",
    "img/Banner3.jpg"
  ];

  let current = 0;

  setInterval(function () {
    current = (current + 1) % images.length;
    $(".banner-img").fadeOut(500, function () {
      $(this).attr("src", images[current]).fadeIn(500);
    });
  }, 3000);
});