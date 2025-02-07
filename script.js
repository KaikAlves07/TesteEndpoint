// Adiciona um evento ao botão para enviar a requisição
document.getElementById('sendRequest').addEventListener('click', sendRequest);

// Adiciona um evento ao campo de entrada para detectar a tecla Enter
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Impede o comportamento padrão do Enter (evita recarregar a página)
    document.getElementById('sendRequest').click(); // Aciona o clique do botão
  }
});

// Função assíncrona para enviar a requisição
async function sendRequest() {
  const apiKey = document.getElementById('apiKey').value.trim();
  const endpoint = document.getElementById('endpoint').value.trim();
  const responseBox = document.getElementById('responseText');


  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json' // Garante que a API retorne JSON
      }
    });

    console.log(response); // Log para depuração

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("A resposta não é JSON. Verifique a URL e a chave da API.");
    }

    const data = await response.json();
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    responseBox.textContent = `Erro: ${error.message}`;
  }
}
