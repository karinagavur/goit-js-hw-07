const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
    
  const name = e.target.value.trim();

  outputEl.textContent = name === '' ? 'Anonymous' : name;
});