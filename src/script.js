function customValid(valueInput) {

   let value = Number(valueInput.value);

   if (value < 1 || value > 10) {
      document.querySelector('#input1').style.color = "red";
      document.querySelector('#input2').style.color = "red";
      return false;
   } else {
      document.querySelector('#input1').style.color = "";
      document.querySelector('#input2').style.color = "";
      return true;
   }
}

document.addEventListener("DOMContentLoaded", () => {
   const calc = document.querySelector('.calculator');
   const calcResult = document.querySelector('.calculator__result');
   const input1 = document.querySelector('#input1');
   const input2 = document.querySelector('#input2');
   let countRow = 0;
   let swich;

   calc.addEventListener("input", function (event) {
      let target = event.target;

      if (target.tagName == "INPUT") {
         swich = customValid(target);
         if (swich) {
            console.log(swich);
         } else {
            console.log(swich);
         }
      }
   });

   calc.addEventListener('click', function (event) {
      let target = event.target;
      let sum;

      if (target.id == 'addition') {
         if (!calcResult.classList.contains('result--active')) {
            calcResult.classList.add('result--active');
         };

         sum = Number(input1.value) + Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'subtraction') {
         if (!calcResult.classList.contains('result--active')) {
            calcResult.classList.add('result--active');
         };

         sum = Number(input1.value) - Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'division') {
         if (!calcResult.classList.contains('result--active')) {
            calcResult.classList.add('result--active');
         };

         sum = Number(input1.value) / Number(input2.value);

         calcResult.insertAdjacentHTML('afterbegin', `
            <tr>
               <td style = "width:15%;">Result: </td>
               <td id="targetCopyResult";>${sum}</td>
            </tr>
         `);

         countRow++;
      };

      if (target.id == 'multiplication') {
         if (!calcResult.classList.contains('result--active')) {
            calcResult.classList.add('result--active');
         };

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

      if (target.tagName == 'BUTTON' && target.id != 'cleanResult') {
         input1.value = '';
         input2.value = '';
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