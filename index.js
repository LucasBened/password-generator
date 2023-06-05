
// Seleciona os elementos HTML relevantes
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*/><.?";
const caracteresNorm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const senhaElement = document.getElementById('senha');
const generateButton = document.getElementById('generate-button');

// Função que gera a string da senha
function generateString(tamanho) {
  // Seleciona o elemento do checkbox para determinar qual conjunto de caracteres usar
  const checkbox = document.getElementById('checkbox');
  // Define o conjunto de caracteres a ser usado baseado no valor do checkbox
  const caracteresGerados = checkbox.checked ? caracteresNorm : caracteres;
  // Define o tamanho do conjunto de caracteres
  const senhaCar = caracteresGerados.length;
  // Inicializa uma string vazia que irá armazenar a senha gerada
  let result = '';
  
  // Loop que irá gerar a senha
  for (let i = 0; i < tamanho; i++) {
    // Adiciona um caractere aleatório da string de caracteres gerados à senha
    result += caracteresGerados.charAt(Math.floor(Math.random() * senhaCar));
  }
  
  // Retorna a senha gerada
  return result;
}

// Event listener que irá gerar uma senha ao clicar no botão "Generate Password"
generateButton.addEventListener('click', () => {
  // Seleciona o elemento HTML que contém o valor do tamanho da senha
  const tamanho = document.getElementById('password-digit').value;
  // Chama a função generateString para gerar a senha
  const senha = generateString(tamanho);
  // Define o texto do elemento HTML que irá mostrar a senha gerada
  senhaElement.textContent = senha;
});

