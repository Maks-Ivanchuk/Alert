// document.addEventListener("DOMContentLoaded", () => {
//    const calc = document.querySelector('.calculator');
//    const calcResult = document.querySelector('.calculator__result');
//    const input1 = document.querySelector('#input1');
//    const input2 = document.querySelector('#input2');
//    let countRow = 0;
//    let validation = true;

//    calc.addEventListener('click', function (event) {
//       let target = event.target;
//       let sum;

//       if (target.id == 'addition' && validation == true) {
//          sum = Number(input1.value) + Number(input2.value);

//          calcResult.insertAdjacentHTML('afterbegin', `
//             <tr>
//                <td style = "width:15%;">Result: </td>
//                <td id="targetCopyResult";>${sum}</td>
//             </tr>
//          `);

//          countRow++;
//       };

//       if (target.id == 'subtraction' && validation == true) {
//          sum = Number(input1.value) - Number(input2.value);

//          calcResult.insertAdjacentHTML('afterbegin', `
//             <tr>
//                <td style = "width:15%;">Result: </td>
//                <td id="targetCopyResult";>${sum}</td>
//             </tr>
//          `);

//          countRow++;
//       };

//       if (target.id == 'division' && validation == true) {
//          sum = Number(input1.value) / Number(input2.value);

//          calcResult.insertAdjacentHTML('afterbegin', `
//             <tr>
//                <td style = "width:15%;">Result: </td>
//                <td id="targetCopyResult";>${sum}</td>
//             </tr>
//          `);

//          countRow++;
//       };

//       if (target.id == 'multiplication' && validation == true) {
//          sum = Number(input1.value) * Number(input2.value);

//          calcResult.insertAdjacentHTML('afterbegin', `
//             <tr>
//                <td style = "width:15%;">Result: </td>
//                <td id="targetCopyResult";>${sum}</td>
//             </tr>
//          `);

//          countRow++;
//       };

//       if (target.id == 'cleanResult') {
//          calcResult.classList.remove('result--active');
//          for (let i = 0; i < countRow; i++) {
//             calcResult.deleteRow(0);
//          };

//          countRow = 0;
//       };

//       if (target.id == 'clean') {
//          input1.value = '';
//          input2.value = '';
//          input1.classList.remove("input-invalid");
//          input2.classList.remove("input-invalid");
//       };

//       if (target.tagName == 'BUTTON' && target.id != 'cleanResult' && target.id != 'clean') {

//          if (!calcResult.classList.contains('result--active')) {
//             calcResult.classList.add('result--active');
//          };

//          if (validation == false) {
//             input1.value = '';
//             input2.value = '';
//             input1.classList.remove("input-invalid");
//             input2.classList.remove("input-invalid");

//             calcResult.insertAdjacentHTML('afterbegin', `
//                <tr>
//                   <td style = "width:15%;">Result: </td>
//                   <td id="targetCopyResult";>Invalid properties</td>
//                </tr>
//             `);

//             countRow++;
//             validation = true;
//          } else {
//             input1.value = '';
//             input2.value = '';
//             input1.classList.remove("input-invalid");
//             input2.classList.remove("input-invalid");
//          };
//       };
//    });

//    const table = document.querySelector('table');

//    table.addEventListener('click', function (event) {
//       let target = event.target;

//       if (target.id == 'targetCopyResult') {
//          let copyResult = Number(target.innerText);

//          navigator.clipboard.writeText(copyResult)
//             .then(() => {
//                console.log(`Result: ${copyResult} - copied `);
//             });
//       };
//    });
// });

// let valid1 = true;
// let valid2 = true;

// function customValid(valueInput) {

//    let value = Number(valueInput.value);
//    let inputTarget = valueInput;

//    if (inputTarget.id == "input1") {
//       console.log(value);

//       if (value > 1 && value < 3) {
//          inputTarget.classList.add("input-invalid");
//          valid1 = false;
//       } else {
//          inputTarget.classList.remove("input-invalid");
//          valid1 = true;
//       };
//       console.log(valid1);
//    } else if (inputTarget.id == "input2") {
//       console.log(value);

//       if (value > 1 && value < 3) {
//          inputTarget.classList.add("input-invalid");
//          valid2 = false;
//       } else {
//          inputTarget.classList.remove("input-invalid");
//          valid2 = true;
//       };
//       console.log(valid2);
//    };

//    if (valid1 == true && valid2 == true) {
//       return true;
//    } else {
//       return false;
//    };
// };
document.addEventListener("DOMContentLoaded", () => {
   const numButtons = document.querySelectorAll('[data-number]');
   const operationButtons = document.querySelectorAll('[data-operation]');
   const screen = document.querySelector('.calculator__screen');
   const delOneEl = document.querySelector('[data-delete]');
   const delAllEl = document.querySelector('[data-all-clear]');




   function onScreen(val) {
      screen.innerText += val;
   };

   function delOneElement() {
      screen.innerText = screen.innerText.slice(0, -1);
   };

   function delAllElements() {
      screen.innerText = '';
   };

   numButtons.forEach(button => {
      button.addEventListener('click', function () {
         onScreen(this.value);
      });
   });

   operationButtons.forEach(oparant => {
      oparant.addEventListener('click', function () {
         onScreen(this.value);
      });
   });

   delOneEl.onclick = function () {
      delOneElement();
   }

   delAllEl.onclick = function () {
      delAllElements();
   }

});