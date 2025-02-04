<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard de Testes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Barra Lateral -->
        <aside class="sidebar">
            <div class="icon">🔵</div>
            <div class="icon">📄</div>
            <div class="icon">📊</div>
            <div class="icon">⚙️</div>
        </aside>

        <!-- Conteúdo Principal -->
        <main class="content">
            <header>
                <h1>Testes de Endpoint</h1>
                <button class="create-test">+ Criar Teste</button>

<div class="options-menu" id="optionsMenu">
    <ul>
        <li class="option" data-action="add">👤 Adicionar Cadastro</li>
        <li class="option" data-action="schedule">📌 Marcar Agendamento</li>
        <li class="option" data-action="delete">❌ Excluir Cadastro</li>
        <li class="option" data-action="update">🔄 Atualizar Dados</li>
    </ul>
</div>

<!-- Caixa de entrada (inicialmente oculta) -->
<div class="input-box" id="inputBox">
    <label id="inputLabel"></label>
    <input type="text" id="userInput" placeholder="Digite aqui...">
    <button id="submitButton">Enviar</button>
</div>


            </header>
            
            <input type="text" placeholder="Buscar Testes" class="search-box">

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Editado</th>
                        <th>Agendar</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3827</td>
                        <td class="status passed">Aprovado</td>
                        <td>há um dia</td>
                        <td>Nenhum</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>3827</td>
                        <td class="status failed">Falhou</td>
                        <td>há um dia</td>
                        <td>Nenhum</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>3827</td>
                        <td class="status passed">Aprovado</td>
                        <td>há 2 dias</td>
                        <td>Nenhum</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </main>

        <!-- Painel Lateral Direito -->
        <aside class="right-panel">
            <h2>Localização do imovel:</h2>
            <select>
                <option>Guarulhos</option>
                <option>Sao Paulo</option>
                <option>Bahia</option>
                <option>Ribeirao Preto</option>


            </select>
            <h2>Cep:</h2>
            <select>
                <option>09821-223</option>
                <option>05821-223</option>
                <option>03821-223</option>
                <option>09811-223</option>

            </select>
            <input type="text" id="searchBox" placeholder="Digite as informações para buscar...">
            <button id="searchButton">🔍 Buscar Agendamento </button>
            <h2>Resultados Recentes</h2>
            <p class="recent passed">Agenda disponivel para:</p>
            <p class="recent failed">● Deletando um Usuário</p>
        </aside>
    </div>
    <script src="script.js"></script>
</body>
</html>



body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
}

.container {
    display: flex;
    width: 100%;
    height: 100%;
}

.sidebar {
    width: 60px;
    background: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}

.icon {
    margin: 20px 0;
    font-size: 24px;
}

.content {
    flex-grow: 1;
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.create-test {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer; /* Faz a seta do mouse virar uma mão */
    border-radius: 5px;
}
#searchButton{   
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer; /* Faz a seta do mouse virar uma mão */
    border-radius: 5px;
    width: 100%;
   
}


.search-box {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#searchBox{
    width: 100%;
    padding: 5px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.status {
    padding: 5px 10px;
    border-radius: 4px;
}

.passed {
    background: #d4edda;
    color: #155724;
}

.failed {
    background: #f8d7da;
    color: #721c24;
}

.right-panel {
    width: 250px;
    background: #f8f9fa;
    padding: 20px;
    border-left: 1px solid #ccc;
}

select, p {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}
.options-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.option {
    padding: 8px 12px;
    cursor: pointer;
    list-style: none;
}

.option:hover {
    background-color: #f4f4f4;
}

/* Estilo da Caixa de Entrada */
.input-box {
    display: none;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    width: 300px;
}

.input-box input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.input-box button {
    width: 100%;
    padding: 8px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.input-box button:hover {
    background-color: #217dbb;
}


document.addEventListener("DOMContentLoaded", function () {
    const testButton = document.querySelector(".create-test");
    const optionsMenu = document.getElementById("optionsMenu");
    const inputBox = document.getElementById("inputBox");
    const inputLabel = document.getElementById("inputLabel");
    const userInput = document.getElementById("userInput");
    
    // Exibir ou ocultar o menu ao clicar no botão
    testButton.addEventListener("click", function () {
        optionsMenu.style.display = optionsMenu.style.display === "block" ? "none" : "block";
    });

    // Adiciona evento para cada opção
    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", function () {
            const action = this.getAttribute("data-action");
            optionsMenu.style.display = "none"; // Oculta o menu

            // Define o título e placeholder da caixa de entrada
            if (action === "schedule") {
                inputLabel.innerText = "Agendar Teste:";
                userInput.placeholder = "Digite a data do teste...";
            } else if (action === "delete") {
                inputLabel.innerText = "Excluir Cadastro:";
                userInput.placeholder = "Digite o ID do usuário...";
            } else if (action === "update") {
                inputLabel.innerText = "Atualizar Dados:";
                userInput.placeholder = "Informe os novos dados...";
            }

            // Exibe a caixa de entrada
            inputBox.style.display = "block";
        });
    });
});
