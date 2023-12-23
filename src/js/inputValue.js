document.getElementById('inputBinary').addEventListener('keydown', function(event) {
  const allowedKeys = ['0', '1'];
  const keyPressed = event.key;

  if (!(allowedKeys.includes(keyPressed) || keyPressed === 'Backspace')) {
    event.preventDefault();
  }
});