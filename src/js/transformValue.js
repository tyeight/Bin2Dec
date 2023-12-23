const transValue = document.getElementById('inputBinary');
const valueDecElement = document.getElementById('valueDec');

function transformValue(){
    const value = transValue.value;
    let decimalValue = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      const digit = parseInt(value.charAt(i));
      const position = value.length - 1 - i;
      decimalValue += digit * Math.pow(2, position);
    }
    valueDecElement.textContent = decimalValue;
}