// Adiciona um evento ao botão para enviar a requisição
// Quando o botão for clicado, executa a função async
document.getElementById('sendRequest').addEventListener('click', async () => {
    // Obtém o valor da chave da API fornecida pelo usuário
    const apiKey = document.getElementById('apiKey').value.trim();
    // Obtém o endpoint da API fornecido pelo usuário
    const endpoint = document.getElementById('endpoint').value.trim();
    // Referência para a caixa de resposta onde será exibido o retorno
    const responseBox = document.getElementById('responseText');
  
    // Verifica se a chave da API e o endpoint foram preenchidos
   
    //caso queira que somente possa ser inserido o endpoint sem a chave da APU necessario excluir !apiKey abaixo
    if (!apiKey || !endpoint) {
      responseBox.textContent = 'Por favor, forneça tanto a chave da API quanto o endpoint.';
      return; // Sai da função se os campos estiverem vazios
    }
  
    try {
      // Envia a requisição para o endpoint com a chave da API
      const response = await fetch(endpoint, {
        method: 'GET', // Método HTTP usado na requisição
        headers: {
          'Authorization': `Bearer ${apiKey}`, // Adiciona a chave da API no cabeçalho da requisição
        }
      });
  
      // Tenta converter a resposta para JSON
      const data = await response.json();
      // Exibe o JSON formatado na caixa de resposta
      responseBox.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      // Exibe mensagens de erro caso a requisição falhe
      responseBox.textContent = `Erro: ${error.message}`;
    }
  });
  