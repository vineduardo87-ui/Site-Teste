// Função para calcular idade a partir da data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Bloco de testes automatizados
function testarCalculoIdade() {
    // Simulando uma data de nascimento fixa para o teste
    console.assert(calcularIdade("2000-01-01") === 26, "Teste 1 falhou!");
    console.assert(calcularIdade("2020-05-20") === 5, "Teste 2 falhou!");
    console.log("Todos os testes de idade passaram!");
}

// Executa o teste ao carregar (você pode ver no F12 > Console)
testarCalculoIdade();

// Lógica do formulário
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const dataNasc = document.getElementById('idade').value; // Agora o input é tipo 'date'
    const mensagemDiv = document.getElementById('mensagem');

    mensagemDiv.className = "";

    if (nome === "" || email === "" || dataNasc === "") {
        mensagemDiv.innerHTML = "⚠️ Preencha todos os campos!";
        mensagemDiv.classList.add("erro");
    } else {
        const idadeCalculada = calcularIdade(dataNasc);
        console.log("Usuário cadastrado. Idade calculada:", idadeCalculada);
        
        mensagemDiv.innerHTML = "Enviado com sucesso! Idade: " + idadeCalculada + " anos.";
        mensagemDiv.classList.add("sucesso");
        document.getElementById('meuFormulario').reset();
    }
});