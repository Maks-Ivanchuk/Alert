document.addEventListener("DOMContentLoaded", () => {
   let form = document.querySelector('#form');

   let gettingUsersName = document.querySelector('#gettingUsersName');
   
   gettingUsersName.addEventListener('ckick', function (event) {
      fetch('https://jsonplaceholder.typicode.com/users', {
         method: 'POST',
         body: JSON.stringify({
            id: 'test',
            name: 'test',
            username: 'test',
            company: {
               name: 'test',
            }
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
            response.innerHTML = response.userId;
         });
   });
   

   form.addEventListener('submit', function (event) {

      event.preventDefault();

      let userName = document.querySelector('#userName').value;

      fetch('https://jsonplaceholder.typicode.com/users', {
         method: 'POST',
         body: JSON.stringify({
            id: '111',
            name: '1111',
            username: userName,
            company: {
               name: '111',
            }
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((dataUser) => {
            console.log(dataUser);
            let results = document.querySelector('#jsonResult')

            results.innerHTML = `<h3>User name: ${dataUser.username}</h3>`;
         });
   });
});