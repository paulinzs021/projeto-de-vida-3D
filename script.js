const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function (){
        for(letj=0; j<botoes.length; l++)
            botoes[j].classList.remover("ativo");
            textos[j].classList.remover("ativo");
    }
             botoes[i].classList.add("ativo")
            textos[i].classList.add("ativo")

console.log(botoes);
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo = new Date('2026-12-2BT23;59:59");