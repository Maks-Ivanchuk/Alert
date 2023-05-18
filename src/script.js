document.addEventListener("DOMContentLoaded", () => {
   const btnOpenModal = document.querySelectorAll('[data-btnOpenModal]');
   const btnCancelModal = document.querySelectorAll('[data-btnCancelModal]');
   const btnConfirmModal = document.querySelectorAll('[data-btnConfirmModal]');
   const overlay = document.querySelector('#overlay');
   const body = document.body;

   function openModalWindows(modal) {
      if (modal == null) return;
      modal.classList.add("active");
      overlay.classList.add("active");
   };

   function cloceModalWindows(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
   };

   function confirmModalWindows(confirm) {
      if (confirm == null) return;
      alert('To close the window, press "x" or "Cancel"');
   };

   btnOpenModal.forEach(button => {
      button.addEventListener('click', (event) => {
         const modal = event.target.nextElementSibling;
         openModalWindows(modal);
         body.style.overflow = "hidden";
      });
   });

   btnCancelModal.forEach(button => {
      button.addEventListener('click', () => {
         const modal = button.closest('.modal');
         cloceModalWindows(modal);
         body.style.overflow = "visible";
      })
   });

   btnConfirmModal.forEach(confirm => {
      confirm.addEventListener('click', () => {
         confirmModalWindows(confirm);
      });
   });
});