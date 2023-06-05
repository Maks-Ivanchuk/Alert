document.addEventListener("DOMContentLoaded", () => {
   let gettingUsers = document.querySelector('#gettingUsers');
   let resultTitle = document.querySelector('#result__title');
   let resultValue = document.querySelector('#result__value');

   document.body.addEventListener('click', function (event) {
      let target = event.target;

      if (target.id == "gettingUsers") {

         target.classList.add('button--success');

         fetch('https://jsonplaceholder.typicode.com/users')

            .then((response) => response.json())
            .then((dataUser) => {
               console.log(dataUser);

               let i = 0;

               dataUser.forEach(element => {
                  console.log(i);
                  console.log(dataUser[i]);

                  resultTitle.innerHTML =
                     `<p>
                     Id:<br>
                     Name:<br>
                     User name:<br>
                     Company name:<br>
                  </p>`;

                  resultValue.innerHTML =
                     `<p>
                     ${dataUser[i].id}<br>
                     ${dataUser[i].name}<br>
                     ${dataUser[i].username}<br>
                     ${dataUser[i].company.name}<br>
                  </p>`;

                  i++;
               });
            });
      }

      if (target.id == "gettingRequest") {
         target.classList.add('button--success');
      }
   });
});