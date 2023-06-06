document.addEventListener("DOMContentLoaded", () => {
   let gettingUsers = document.querySelector('#gettingUsers');
   let result = document.querySelector('#result');

   document.body.addEventListener('click', function (event) {
      let target = event.target;

      if (target.id == "gettingUsers") {

         target.classList.add('button--success');

         fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((dataUser) => {

               if (dataUser != null) {
                  let i = 0;
                  dataUser.forEach(element => {
                     result.innerHTML +=
                        `<div class="userTitle" id="userTitleId${dataUser[i].id}">
                        <p>Name: ${dataUser[i].name}</p>
                        <p id="userId">${dataUser[i].id}</p>
                        <div class="userMoreInfo"></div>
                        <button class="button button--danger btnTargetUser">More information about user ${dataUser[i].name}</button>
                        </div>
                  `;
                     i++;
                  });
               } else {
                  return
               }
            });
      };

      if (target.classList.contains("btnTargetUser")) {
         event.preventDefault();
         let valueUserId = target.closest('.userTitle').querySelector('#userId').textContent;
         target.style.display = "none";

         fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((dataUser) => {

               if (dataUser[valueUserId].id != null) {
                  target.closest('.userTitle').querySelector('.userMoreInfo').innerHTML =
                     `<p>User id: ${dataUser[valueUserId].userId}</p>
                  <p>Id: ${dataUser[valueUserId].id}</p>
                  <p>Title: ${dataUser[valueUserId].title}</p>
                  <p>Completed: ${dataUser[valueUserId].completed}</p>
                  `

               } else {
                  return;
               }
            });

         target.closest('.userTitle').style.color = "red";
         target.classList.add('button--success');
      }
   });
});
