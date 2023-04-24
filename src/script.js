document.addEventListener("DOMContentLoaded", () => {
   const mainAlert = document.querySelector('.main');


   mainAlert.addEventListener('click', function (event) {
      let target = event.target;

      if (target.className == 'BUTTON-CLOSE') {
         mainAlert.style.backgroundColor = "red";
         //target.closest('.alert__item').remove();
      } else {
         return;
      };
   });
});




