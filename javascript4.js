// 1. Pegamos a referência do botão e do campo de mensagem fora do evento
const botao = document.querySelector('#botao');
const mensagem = document.querySelector('#mensagem');

botao.addEventListener('click', function() {
    // 2. Pegamos os dados do formulário NO MOMENTO DO CLIQUE
    const precoInput = document.querySelector('#preco').value;
    const preco = Number(precoInput); // Converte o texto digitado para número
    
    // Captura qual radio button está marcado
    const opcaoSelecionada = document.querySelector('input[name="desconto"]:checked');

    // 3. Validação: verifica se o preço é válido e se algum desconto foi marcado
    if (!preco || preco <= 0) {
        mensagem.value = "Por favor, digite um preço válido.";
        return;
    }

    if (!opcaoSelecionada) {
        mensagem.value = "Por favor, selecione uma opção de desconto.";
        return;
    }

    // 4. Pega a porcentagem do valor (value) do radio button selecionado
    const porcentagemDesconto = Number(opcaoSelecionada.value);
    
    // 5. Realiza os cálculos
    const valorDesconto = preco * porcentagemDesconto;
    const precoFinal = preco - valorDesconto;

    // 6. Exibe o resultado dentro da textarea (usando .value em vez de .textContent)
    mensagem.value = `Preço original: R$ ${preco.toFixed(2)}\nDesconto: R$ ${valorDesconto.toFixed(2)}\nPreço final: R$ ${precoFinal.toFixed(2)}`;
});
