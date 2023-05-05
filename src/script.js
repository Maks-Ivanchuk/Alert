// document.addEventListener("DOMContentLoaded", () => {
//    const body = document.querySelector('body');

//    body.addEventListener('click', function (event) {
//       let target = event.target;
//       debugger
//       if (target.classList.contains("button-close") == true) {
//          target.closest('.alert__item').remove();
//          if (!body.querySelector('.alert__item')) {
//             body.querySelector('.components__alert').remove();
//          }
//       } else {
//          return;
//       };
//    });
   // });
document.addEventListener("DOMContentLoaded", () => {
   let coll = document.querySelectorAll('.collapsible');
   let i;
   for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function (event) {
         event.target.classList.toggle("active");
         let content = event.target.nextElementSibling;
         if (content.style.display == "block") {
            content.style.display = "none";
         } else {
            content.style.display = "block";
         }
      });
   };
});