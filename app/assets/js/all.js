$(function () {
  /*swiper 輪播外掛 */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    // autoplay: {
    //   delay: 5000,
    // },
  });
});