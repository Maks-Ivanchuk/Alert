document.addEventListener("DOMContentLoaded", () => {
   const numberButtons = document.querySelectorAll('[data-number]');
   const pointButton = document.querySelector('[data-point]');
   const operationButtons = document.querySelectorAll('[data-operation]');
   const equalsButton = document.querySelector('[data-equals]');
   const deleteButton = document.querySelector('[data-delete]');
   const allClearButton = document.querySelector('[data-all-clear]');
   const previousOperandTextElement = document.querySelector('.output__previous-operand');
   const operationElement = document.querySelector('.output__operation');
   const currentOperandTextElement = document.querySelector('.output__current-operand');

   let currentOperand;
   let previousOperand;
   let operation;
   let minus = false;

   numberButtons.forEach(numberBtn => {
      numberBtn.addEventListener('click', () => {

         if (currentOperand == '0') return; // якщо вже введено один 0 то більше не вводимо

         if (currentOperand == undefined) {
            currentOperand = numberBtn.value
         } else {
            currentOperand += numberBtn.value;
         };

         currentOperandTextElement.innerHTML = currentOperand;
      });
   });

   operationButtons.forEach(operationBtn => {
      operationBtn.addEventListener('click', (event) => {
         let target = event.target;

         if (currentOperand == "0.") return;
         //if (toString(currentOperandTextElement.innerHTML).includes('-')) console.log('df');

         // if (target.value == '-') {
         //    if (currentOperand != '-') {
         //       currentOperand = target.value;
         //       currentOperandTextElement.innerHTML = currentOperand;
         //    } else if (currentOperand == '-') {
         //       currentOperand = undefined;
         //       currentOperandTextElement.innerHTML = '';
         //    };
         //    return;
         // };
         if (target.value == '-') {

         }

         //тут повна залупа
         if (minus == false) {
            if (currentOperand == undefined || currentOperand == '-') return;

            previousOperand = currentOperand;
            previousOperandTextElement.innerHTML = previousOperand;
            operation = target.value;
            operationElement.innerHTML = operation;
            currentOperandTextElement.innerHTML = '';
            currentOperand = undefined;
         };

         // if (previousOperand != undefined) {
         //    operation = target.value;
         //    operationElement.innerHTML = operation;
         // } else if (previousOperand != undefined && currentOperand == undefined) {
         //    return;
         // } else {

         // };
      });
   });


   pointButton.addEventListener('click', () => {
      if (currentOperandTextElement.innerHTML.includes('.')) return;

      if (currentOperandTextElement.innerHTML == "") { //якщо пусто і натиснути на крапку то буде '0.'
         currentOperand = '0.';
         currentOperandTextElement.innerHTML = currentOperand;
      } else {
         currentOperand += '.';
         currentOperandTextElement.innerHTML = currentOperand;
      };
   });

   deleteButton.addEventListener('click', () => {
      if (currentOperand == undefined) return;

      currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0, -1);
      currentOperand = currentOperandTextElement.innerHTML;
   });

   allClearButton.addEventListener('click', () => {
      previousOperandTextElement.innerHTML = '';
      currentOperandTextElement.innerHTML = '';
      operationElement.innerHTML = '';
      currentOperand = undefined;
      previousOperand = undefined;
      operation = undefined;
   });

   equalsButton.addEventListener('click', () => {
      if (currentOperandTextElement.innerHTML == "" || previousOperandTextElement.innerHTML == "") return;

      let res = compute(previousOperand, currentOperand, operation);

      previousOperandTextElement.innerHTML = '';
      currentOperandTextElement.innerHTML = '';
      operationElement.innerHTML = '';
      currentOperand = res;
      previousOperand = undefined;
      operation = undefined;

      currentOperandTextElement.innerHTML = currentOperand;
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
         // case "%":
         //    result = Number(a) - ((Number(a) * Number(b)) / 100);
         //    break;
         default:
            return
      };

      if (String(result).length > 10) {
         result = result.toFixed(1);
      };

      return result;
   };
});

