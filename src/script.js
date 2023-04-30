document.addEventListener("DOMContentLoaded", () => {
   const body = document.querySelector('body');

   body.addEventListener('click', function (event) {
      let target = event.target;

      if (target.className == 'button-close' || target.className == 'button-close button-close--position-absolute') {
         target.closest('.alert__item').remove();
      } else {
         return;
      };
   });
});