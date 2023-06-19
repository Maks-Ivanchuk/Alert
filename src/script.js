document.addEventListener("DOMContentLoaded", () => {
   let result = document.querySelector('#result');

   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((dataUser) => {

         if (dataUser != null) {
            dataUser.forEach(user => {
            result.insertAdjacentHTML('beforeend', `
               <tr data-user-id="${user.id}">
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.city}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td>${user.company.name}</td>
                  <td>
                     <button class = "button button--danger">Todos</button>
                     <button class = "button button--info">Posts</button>
                     <button class = "button button--warning">Albums</button>
                  </td>
               </tr>
            `);
            });

            const buttons = document.querySelectorAll('button[data-user-id]');

            buttons.forEach(button => {
               button.addEventListener('click', function (event) {
                  event.preventDefault();
                  const userId = event.target.dataset.userId;
                  const todosWrapper = document.querySelector(`.todos[data-user-id="${userId}"]`);

               fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
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