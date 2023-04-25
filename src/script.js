document.addEventListener("DOMContentLoaded", () => {
   const mainAlert = document.querySelector('.main__alert');

   mainAlert.addEventListener('click', function (event) {
      let target = event.target;

      console.log(target);
      if (target.className == 'button-close__icon') {
         target.closest('.alert__item').remove();
      } else {
         return;
      };
   });
});

