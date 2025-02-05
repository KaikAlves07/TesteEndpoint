document.getElementById('sendRequest').addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKey').value.trim();
    const endpoint = document.getElementById('endpoint').value.trim();
    const responseBox = document.getElementById('responseText');
  
    if (!apiKey || !endpoint) {
      responseBox.textContent = 'Por favor, forneça tanto a chave da API quanto o endpoint.';
      return;
    }
  
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });
  
      const data = await response.json();
      responseBox.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      responseBox.textContent = `Erro: ${error.message}`;
    }
  });
  