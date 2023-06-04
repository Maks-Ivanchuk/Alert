document.addEventListener("DOMContentLoaded", () => {
   let form = document.querySelector('#form');

   form.addEventListener('submit', function (event) {

      event.preventDefault();

      let userName = document.querySelector('#userName').value;


      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: userName,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((dataUser) => {
            console.log(dataUser);
            let results = document.querySelector('#jsonResult')

            results.innerHTML = `<h3>User name: ${dataUser.title}</h3>`;
         });
   });
});