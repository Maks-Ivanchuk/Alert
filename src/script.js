document.addEventListener("DOMContentLoaded", () => {
   let btnOpenModal = document.querySelector('#btnOpenModal');
   let btnCloseIcon = document.querySelector('#btnCloseIcon');
   let btnCansel = document.querySelector('#btnCansel');
   let btnConfirm = document.querySelector('#btnConfirm');
   let modalContainer = document.querySelector('.modal__container');

   btnOpenModal.addEventListener('click', () => {
      modalContainer.style.display = "flex";
      document.body.style.overflow = "hidden";
   });

   modalContainer.addEventListener('click', (event) => {
      let target = event.target;

      if (target == btnCloseIcon || target == btnCansel) {
         modalContainer.style.display = "none";
         document.body.style.overflow = "visible";
      } else if (target == btnConfirm) {
         alert('Error, click on the "Cancel"');
      } else {
         return;
      }
   });
});