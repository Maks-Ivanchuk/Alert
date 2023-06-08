document.addEventListener("DOMContentLoaded", () => {
   let result = document.querySelector('#result');

   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((dataUser) => {

         if (dataUser != null) {
            dataUser.forEach(element => {
               result.innerHTML +=
                  `<div class="userTitle" id="userTitleId${element.id}">
               <p>Name: ${element.name}</p>
               <p id="userId">${element.id}</p>
               <div class="userMoreInfo"></div>
               <button class="button button--danger btnTargetUser">More information about user: ${element.name}</button>
               </div>`;
            });

            let allBtnMoreInfo = document.querySelectorAll('.btnTargetUser');

            allBtnMoreInfo.forEach(btnTarget => {
               btnTarget.addEventListener('click', function (event) {
                  event.preventDefault();

                  let valueUserId = btnTarget.closest('.userTitle').querySelector('#userId').textContent;

                  fetch('https://jsonplaceholder.typicode.com/users/1/todos')
                     .then((response) => response.json())
                     .then((dataUser) => {
                        if (dataUser[valueUserId].id != null) {
                           btnTarget.closest('.userTitle').querySelector('.userMoreInfo').innerHTML =
                              `<p>User id: ${dataUser[valueUserId].userId}</p>
                           <p>Id: ${dataUser[valueUserId].id}</p>
                           <p>Title: ${dataUser[valueUserId].title}</p>
                           <p>Completed: ${dataUser[valueUserId].completed}</p>
                           `
                        } else {
                           return;
                        }
                     });

                  btnTarget.classList.add('button--delete');
               })
            });
         } else {
            return
         }
      });

});


//    let allBtnMoreInfo = document.querySelectorAll('.btnTargetUser');
//    console.log(allBtnMoreInfo);


// allBtnMoreInfo.forEach(btnTarget => {
//    btnTarget.onclick = function () {
//       btnTarget.preventDefault();

//       let valueUserId = btnTarget.closest('.userTitle').querySelector('#userId').textContent;

//       btnTarget.style.display = "none";

//       fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//          .then((response) => response.json())
//          .then((dataUser) => {

//             if (dataUser[valueUserId].id != null) {
//                btnTarget.closest('.userTitle').querySelector('.userMoreInfo').innerHTML =
//                   `<p>User id: ${dataUser[valueUserId].userId}</p>
//                   <p>Id: ${dataUser[valueUserId].id}</p>
//                   <p>Title: ${dataUser[valueUserId].title}</p>
//                   <p>Completed: ${dataUser[valueUserId].completed}</p>
//                   `

//             } else {
//                return;
//             }
//          });

//       btnTarget.closest('.userTitle').style.color = "red";
//       btnTarget.classList.add('button--success');
//    }
// });






   // document.body.addEventListener('click', function (event) {
   //    let target = event.target;

   //    if (target.classList.contains("btnTargetUser")) {
   //       event.preventDefault();
   //       let valueUserId = target.closest('.userTitle').querySelector('#userId').textContent;
   //       target.style.display = "none";

   //       fetch('https://jsonplaceholder.typicode.com/users/1/todos')
   //          .then((response) => response.json())
   //          .then((dataUser) => {

   //             if (dataUser[valueUserId].id != null) {
   //                target.closest('.userTitle').querySelector('.userMoreInfo').innerHTML =
   //                   `<p>User id: ${dataUser[valueUserId].userId}</p>
   //                <p>Id: ${dataUser[valueUserId].id}</p>
   //                <p>Title: ${dataUser[valueUserId].title}</p>
   //                <p>Completed: ${dataUser[valueUserId].completed}</p>
   //                `

   //             } else {
   //                return;
   //             }
   //          });

   //       target.closest('.userTitle').style.color = "red";
   //       target.classList.add('button--success');
   //    }
   // });

