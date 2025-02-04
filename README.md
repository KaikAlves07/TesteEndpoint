# TesteEndpoint
Repositorio criado com intuito de testes de endpoint
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
            </header>
            
            <input type="text" placeholder="Buscar Testes" class="search-box">

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Editado</th>
                        <th>Agendar</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Obtendo agendamento de um usuario</td>
                        <td class="status passed">Aprovado</td>
                        <td>há um dia</td>
                        <td>Nenhum</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Deletando um Usuário</td>
                        <td class="status failed">Falhou</td>
                        <td>há um dia</td>
                        <td>Nenhum</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Adicionando um Usuário</td>
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
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

.search-box {
    width: 100%;
    padding: 10px;
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
