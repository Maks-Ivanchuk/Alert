document.addEventListener("DOMContentLoaded", () => {
   $(".slider").slick(function () { });

   $("img").click(function () {
      $(this).hide();
   });
});