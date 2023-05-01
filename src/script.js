document.addEventListener("DOMContentLoaded", () => {
   const body = document.querySelector('body');

   body.addEventListener('click', function (event) {
      let target = event.target;

      if (target.classList.contains("button-close") == true) {
         target.closest('.alert__item').remove();
         if (!body.querySelector('.alert__item')) {
            body.querySelector('.components__alert').remove();
         }
      } else {
         return;
      };


   });
});