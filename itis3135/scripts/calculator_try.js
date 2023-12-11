document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.calc-display');
  const buttons = document.querySelectorAll('.calc-buttons button');

  buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
  });

  function handleButtonClick() {
      const value = this.dataset.value;

      switch (value) {
          case 'AC':
              clearDisplay();
              break;
          case 'DEL':
              deleteCharacter();
              break;
          case '=':
              calculateResult();
              break;
          default:
            displayValue(value);
      }
  }

function displayValue(value) {
      display.value += value;
}

function clearDisplay() {
      display.value = '';
}

function deleteCharacter() {
      display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
      display.value = new Function('return ' + display.value)();
  } catch (error) {
      display.value = 'Error';
  }
}
});
