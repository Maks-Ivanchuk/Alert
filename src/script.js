
document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll('.accordion__title').forEach((elem) => {
      elem.addEventListener('click', () => {
         
         let content = elem.nextElementSibling;
         
         // if (content.classList.contains("accordion__content--active") == false) {
         //    content.classList.add("accordion__content--active");
         //    console.log("active");
         // } else {
         //    content.classList.remove("accordion__content--active");
         //    console.log("none");
         // }

         if (content.style.maxHeight) {
            console.log(content.closest('.collapse__accordion'));
            document.querySelectorAll('.accordion__content').forEach((elem) => elem.style.maxHeight = null);
            content.closest('.collapse__accordion').querySelector('.accordion__button-icon').style.transform = "rotate(0deg)";
         }
         else {
            document.querySelectorAll('.accordion__content').forEach((elem) => elem.style.maxHeight = null);
            content.closest('.collapse__accordion').querySelector('.accordion__button-icon').style.transform = "rotate(180deg)";
            content.style.maxHeight = content.scrollHeight + "px";
         }

      })
   })
});