document.addEventListener("DOMContentLoaded", () => {
   const calc = document.querySelector('.calculator');
   const calcResult = document.querySelector('.calculator__result');
   const input1 = document.querySelector('#input1');
   const input2 = document.querySelector('#input2');
   let countRow = 0;
   let validation = true;

   calc.addEventListener("input", function (event) {
      let target = event.target;

      if (target.tagName == "INPUT") {
         validation = customValid(target);
         if (validation == true) {
            console.log(validation);
         } else {
            console.log(validation);
         }
      }
   });


   calc.addEventListener('click', function (event) {
      let target = event.target;
      let sum;

      if (target.id == 'addition' && validation == true) {
         sum = Number(input1.value) + Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'subtraction' && validation == true) {
         sum = Number(input1.value) - Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'division' && validation == true) {
         sum = Number(input1.value) / Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'multiplication' && validation == true) {
         sum = Number(input1.value) * Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'cleanResult') {
         calcResult.classList.remove('result--active');
         for (let i = 0; i < countRow; i++) {
            calcResult.deleteRow(0);
         };

         countRow = 0;
      };

      if (target.id == 'clean') {
         input1.value = '';
         input2.value = '';
      };

      if (target.tagName == 'BUTTON' && target.id != 'cleanResult' && target.id != 'clean') {

         if (!calcResult.classList.contains('result--active')) {
            calcResult.classList.add('result--active');
         };

         if (validation == false) {
            input1.value = '';
            input2.value = '';

            calcResult.insertAdjacentHTML('afterbegin', `
               <tr>
                  <td style = "width:15%;">Result: </td>
                  <td id="targetCopyResult";>Invalid properties</td>
               </tr>
            `);

            countRow++;
            validation = true;
         } else {
            input1.value = '';
            input2.value = '';
         };
      };
   });

   const table = document.querySelector('table');

   table.addEventListener('click', function (event) {
      let target = event.target;

      if (target.id == 'targetCopyResult') {
         let copyResult = Number(target.innerText);

         navigator.clipboard.writeText(copyResult)
            .then(() => {
               console.log(`Result: ${copyResult} - copied `);
            });
      };
   });
});

function customValid(valueInput) {

   let value = Number(valueInput.value);

   if (value == 10) {
      document.querySelector('#input1').style.color = "red";
      document.querySelector('#input2').style.color = "red";
      return false;
   } else if (value == 20) {
      document.querySelector('#input1').style.color = "red";
      document.querySelector('#input2').style.color = "red";
      return false;
   } else {
      document.querySelector('#input1').style.color = "";
      document.querySelector('#input2').style.color = "";
      return true;
   }
}