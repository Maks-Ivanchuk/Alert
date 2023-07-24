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
   const calculatorButtons = document.querySelectorAll('.calculator__button');
   const numberButtons = document.querySelectorAll('[data-number]');
   const operationButtons = document.querySelectorAll('[data-operation]');
   const equalsButton = document.querySelector('[data-equals]');
   const deleteButton = document.querySelector('[data-delete]');
   const allClearButton = document.querySelector('[data-all-clear]');
   const previousOperandTextElement = document.querySelector('.output__previous-operand');
   const operationElement = document.querySelector('.output__operation');
   const currentOperandTextElement = document.querySelector('.output__current-operand');

   let firstOperand;
   let secondOperand;
   let operation;

   numberButtons.forEach(numberBtn => {
      numberBtn.addEventListener('click', () => {
         if (firstOperand == undefined) {
            firstOperand = numberBtn.value;
            currentOperandTextElement.innerHTML = firstOperand;
         } else if (operation == undefined) {
            firstOperand += numberBtn.value;
            currentOperandTextElement.innerHTML = firstOperand;
         } else if (previousOperandTextElement && secondOperand == undefined) {
            secondOperand = numberBtn.value;
            currentOperandTextElement.innerHTML = secondOperand;
         } else if (previousOperandTextElement && secondOperand != undefined) {
            secondOperand += numberBtn.value;
            currentOperandTextElement.innerHTML = secondOperand;
         };
      });
   });

   operationButtons.forEach(operationBtn => {
      operationBtn.addEventListener('click', () => {
         previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
         currentOperandTextElement.innerHTML = '';
         operation = operationBtn.value;
         operationElement.innerHTML = operation;
      });
   });

   deleteButton.addEventListener('click', () => {
      // додати перевірку, що коли = очистило значення firstOperand то слайс видаляє тільки з екрану і перезаписує значення
      firstOperand = firstOperand.slice(0, -1)
      currentOperandTextElement.innerHTML = firstOperand;
      // currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0, -1);
      // firstOperand = firstOperand.slice(0, -1);
   });

   allClearButton.addEventListener('click', () => {
      previousOperandTextElement.innerHTML = '';
      currentOperandTextElement.innerHTML = '';
      operationElement.innerHTML = '';
      firstOperand = undefined;
      secondOperand = undefined;
      operation = undefined;
   });


   equalsButton.addEventListener('click', () => {
      let res = compute(firstOperand, secondOperand, operation);

      previousOperandTextElement.innerHTML = '';
      currentOperandTextElement.innerHTML = '';
      operationElement.innerHTML = '';
      firstOperand = res;
      secondOperand = undefined;
      operation = undefined;

      currentOperandTextElement.innerHTML = firstOperand;
   });

   function compute(a, b, operation) {
      let result;
      switch (operation) {
         case "+":
            result = Number(a) + Number(b);
            break;
         case "-":
            result = Number(a) - Number(b);
            break;
         case "/":
            result = Number(a) / Number(b);
            break;
         case "*":
            result = Number(a) * Number(b);
            break;
         default:
            return
      };

      return result;
   }
});

