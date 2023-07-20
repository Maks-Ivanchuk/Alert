// document.addEventListener("DOMContentLoaded", () => {
   // const numButtons = document.querySelectorAll('[data-number]');
   // const operationButtons = document.querySelectorAll('[data-operation]');
   // const currentOperation = document.querySelector('.calculator__current');
   // const delOneEl = document.querySelector('[data-delete]');
   // const delAllEl = document.querySelector('[data-all-clear]');

   // let inputNumber = null;
   // let sign = null;
   // let sum;

   // function valueAssignment(input) {
   //    if (inputNumber == null) {
   //       inputNumber = input;
   //       return inputNumber = Number(inputNumber);
   //    } else {
   //       inputNumber += input;
   //       return inputNumber = Number(inputNumber);
   //    };
   // };

   // function definitionSign(input) {
   //    if (sign != false) return false;
   //    sign = Number(input)
   //    return true;
   // };

   // function outputOnScreen(val) {
   //    currentOperation.innerText += val;
   // };

   // function delOneElement() {
   //    currentOperation.innerText = currentOperation.innerText.slice(0, -1);
   // };

   // function delAllElements() {
   //    currentOperation.innerText = '';
   // };

   // numButtons.forEach(button => {
   //    button.addEventListener('click', function () {
   //       valueAssignment(this.value);
   //       outputOnScreen(this.value);
   //       console.log(inputNumber);
   //    });
   // });

   // operationButtons.forEach(operant => {
   //    operant.addEventListener('click', function () {
   //       outputOnScreen(this.value);
   //       inputNumber = null;
   //    });
   // });

   // delOneEl.onclick = function () {
   //    delOneElement();
   // }

   // delAllEl.onclick = function () {
   //    delAllElements();
   // }
   // });
class Calculator {
   constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
   };

   clear() { 
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
   };

   delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
   };

   getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;

      if (isNaN(integerDigits)) {
         integerDisplay = '';
      } else {
         integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
      };

      if (decimalDigits != null) {
         return `${integerDisplay}.${decimalDigits}`;
      } else {
         return integerDisplay;
      };
   };

   appendNumber(number) { 
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
   };

   chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
         console.log('operator');
         this.compute();
      };

      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
   };

   compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      
      if (isNaN(prev) || isNaN(current)) return;
      
      switch (this.operation) {
         case '+':
            computation = prev + current;
            break;
         case '-':
            computation = prev - current;
            break;
         case '*':
            computation = prev * current;
            break;
         case '÷':
            computation = prev / current;
            break;
         default:
            return;
      };

      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
   };

   updateDisplay() {
      this.currentOperandTextElement.innerText =
         this.getDisplayNumber(this.currentOperand);
      
      if (this.operation != null) {
         this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)}${this.operation}`;
      } else {
         this.previousOperandTextElement.innerText = '';
      };
   };
};

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('.output__previous-operand');
const currentOperandTextElement = document.querySelector('.output__current-operand');
const resultOutputElement = document.querySelector('.calculator__result');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      console.log('num');
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay();
   });
});

operationButtons.forEach(button => {
   button.addEventListener('click', function () {
      console.log('operator');
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
   });
});

equalsButton.addEventListener('click', button => {
   calculator.compute();
   calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
   calculator.clear();
   calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
   calculator.delete();
   calculator.updateDisplay();
});