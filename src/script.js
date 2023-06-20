document.addEventListener("DOMContentLoaded", () => {
   const tableWrapper = document.querySelector('#table-wrapper');
   
   tableWrapper.insertAdjacentHTML('afterbegin', `
      <table id="tableUsers" width = "100%">
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
         </tr>
      </table>
   `);
   
   const tableUsers = document.querySelector('#tableUsers');
   
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {

      if (users == null) {
         return;
      } else {
         users.forEach(user => {
            tableUsers.insertAdjacentHTML('beforeend', `
               <tr>
                  <td data-user-id="${user.id}">${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.city}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td>${user.company.name}</td>
                  <td>
                     <button data-user-id="${user.id}" class = "button-todos button button--danger" style="margin: 5px;">Todos</button>
                  </td>
               </tr>
            `);
         });
      };
      const buttons = document.querySelectorAll('button[data-user-id]');
   
      buttons.forEach(button => {
         button.addEventListener('click', function (event) { 
            let target = event.target;
            
            if (target.classList.contains('button-todos')) {
               const userId = target.dataset.userId;
               const tableResult1 = document.querySelector('#result1');
               
               tableResult1.classList.add('result1--active');
               
               fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
                  .then((response) => response.json())
                  .then((todosUser) => {
                     todosUser.forEach(todo => {
                        tableResult1.insertAdjacentHTML('beforeend', `
                        <tr>
                           <td data-user-id="${todo.userId}">${todo.userId}</td>
                           <td>${todo.id}</td>
                           <td>${todo.title}</td>
                           <td>${todo.completed}</td>
                           <td>
                              <button data-user-id="${userId}" class = "button-posts button button--info" style="margin: 5px;">Posts</button>
                              <button data-user-id="${userId}" class = "button-albums button button--warning" style="margin 5px;">Albums</button>
                           </td>
                        </tr>
                     `);
                     })
                  })
            }
         });
      });
   });
});


// const buttons = document.querySelectorAll('button[data-user-id]');

//             buttons.forEach(button => {
//                button.addEventListener('click', function (event) {
//                   event.preventDefault();
//                   const userId = event.target.dataset.userId;
//                   const todosWrapper = document.querySelector(`.todos[data-user-id="${userId}"]`);

//                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
//                   .then((response) => response.json())
//                   .then((dataUser) => {
//                      dataUser.forEach(todo => {
//                         todosWrapper.insertAdjacentHTML('beforeend', `
//                            <div>ID:${todo.id}; TITLE:${todo.title}; COMPLETED:${todo.completed}</div>
//                         `);
//                      })
//                   });
//                   })
//             });
