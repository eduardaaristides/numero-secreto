let listaDeNumeroEscolhidos = []
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensageminivial(){
    exibirTextoNaTela('h1' ,'Jogo do número secreto' )
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50')
}
exibirMensageminivial();

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto){
        exibirTextoNaTela( 'h1', 'Parabéns, Você ACERTOU o número secreto')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparcampo();
    }
}

function limparcampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroEscolhidos.length;
   
   if(quantidadeDeElementosNaLista == numeroLimite)
    listaDeNumeroEscolhidos = []
   
   if(listaDeNumeroEscolhidos.includes(numeroEscolhido)){
    return gerarNumeroAleatorio()
   } else{
    return numeroEscolhido
   }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1
    exibirMensageminivial()
    document.getElementById('reinciar').setAttribute('disabled', true)
}