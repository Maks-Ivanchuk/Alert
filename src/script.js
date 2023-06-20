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
                  <button data-user-id="${user.id}" class = "button button--danger" style="margin: 5px;">Todos</button>
               </td>
            </tr>
         `);
      });
      const buttonsUsers = document.querySelectorAll('button[data-user-id]');
   
      buttonsUsers.forEach(buttonUser => {
         buttonUser.addEventListener('click', function (event) { 
            let target = event.target;
            const userId = target.dataset.userId;
            const tableResult1 = document.querySelector('#result1');
            
            tableResult1.classList.add('result--active');
            
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
                           <button data-user-info="${userId}" class = "button-posts button button--info" style="margin: 5px;">Posts > coments</button>
                           <button data-user-info="${userId}" class = "button-albums button button--warning" style="margin 5px;">Albums > photo</button>
                        </td>
                     </tr>
                  `);
               });
               
               const buttonUserInfo = document.querySelectorAll('button[data-user-info]');

               buttonUserInfo.forEach(btnUserInfo => { 
                  btnUserInfo.addEventListener('click', function (event) {
                     let target = event.target;
                     const tableResult2 = document.querySelector('#result2');

                     if (target.classList.contains('button-posts')) { 
                        
                     tableResult2.insertAdjacentHTML('beforeend', `
                           <tr>
                              <th>Post Id</th>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Body</th>
                           </tr>
                        `);
                        tableResult2.classList.add('result--active');

                        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
                           .then((response) => response.json())
                           .then((comentsUser) => {
                              comentsUser.forEach(coments => {
                                 tableResult2.insertAdjacentHTML('beforeend', `
                                    <tr>
                                       <td>${coments.postId}</td>
                                       <td>${coments.id}</td>
                                       <td>${coments.name}</td>
                                       <td>${coments.email}</td>
                                       <td>${coments.body}</td>
                                    </tr>
                                 `);
                              })
                           });
                     };
                     if (target.classList.contains('button-albums')) { 
                                                
                        tableResult2.classList.add('result--active');
                        tableResult2.insertAdjacentHTML('beforeend', `
                                    <tr>
                                       <th>Album Id}</th>
                                       <th>Id</th>
                                       <th>Title</th>
                                       <th>Url</th>
                                       <th>Thumbnail url</th>
                                    </tr>
                                 `);

                        fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
                           .then((response) => response.json())
                           .then((albumsUser) => {
                              albumsUser.forEach(album => {
                                 tableResult2.insertAdjacentHTML('beforeend', `
                                    <tr>
                                       <td>${album.albumId}</td>
                                       <td>${album.id}</td>
                                       <td>${album.title}</td>
                                       <td>${album.url}</td>
                                       <td>${album.thumbnailUrl}</td>
                                    </tr>
                                 `);
                              })
                           });
                     };
                  });
               });
            });
         });
      });
   });
});