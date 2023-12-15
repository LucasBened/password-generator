
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*/><.?";
const caracteresNorm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const senhaElement = document.getElementById('senha');
const generateButton = document.getElementById('generate-button');

function generateString(tamanho) {
  const checkbox = document.getElementById('checkbox');
  const caracteresGerados = checkbox.checked ? caracteresNorm : caracteres;
  const senhaCar = caracteresGerados.length;
  let result = '';
  
  for (let i = 0; i < tamanho; i++) {
    result += caracteresGerados.charAt(Math.floor(Math.random() * senhaCar));
  }
  
  return result;
}

generateButton.addEventListener('click', () => {
  const tamanho = document.getElementById('password-digit').value;
  const senha = generateString(tamanho);
  senhaElement.textContent = senha;
});

