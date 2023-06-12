document.addEventListener("DOMContentLoaded", () => {
   let result = document.querySelector('#result');

   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((dataUser) => {

         if (dataUser != null) {
            dataUser.forEach(user => {
            result.insertAdjacentHTML('beforeend', `
               <div>ID:${user.id}; NAME:${user.name}</div>
               <div><button data-user-id="${user.id}">FETCH TODOS</button></div>
               <div class="todos" data-user-id="${user.id}" style="margin-bottom: 10px;"></div>
            `);
            });

            const buttons = document.querySelectorAll('button[data-user-id]');

            buttons.forEach(button => {
               button.addEventListener('click', function (event) {
                  event.preventDefault();
                  const userId = event.target.dataset.userId;
                  const todosWrapper = document.querySelector(`.todos[data-user-id="${userId}"]`);

               fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
               // fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                  .then((response) => response.json())
                  .then((dataUser) => {
                     dataUser.forEach(todo => { 
                        todosWrapper.insertAdjacentHTML('beforeend', `
                           <div>ID:${todo.id}; TITLE:${todo.title}; COMPLETED:${todo.completed}</div>
                        `);
                     })
                  });
                  })
            });
         } else {
            return
         }
      });
});