const textoInput = document.querySelector('#texto');
const contagem = document.querySelector('#contagem');
const btnCaracteres = document.querySelector('.btnCaracteres');
const btnPalavras = document.querySelector('.btnPalavras');

btnCaracteres.addEventListener('click', () => {
    contagemCaracteres();
});

function contagemCaracteres(){
    const texto = textoInput.value;
    const caracteres = texto.length;
    contagem.innerHTML = caracteres + ' caractere(s).'
};


btnPalavras.addEventListener('click', () => {
    contagemPalavras();
});

function contagemPalavras(){
    const texto = textoInput.value;
    const palavras = texto.split(/\s+/).filter(word => word !== '').length; //essa linha de código divide o texto em palavras, filtra as palavras vazias e, em seguida, retorna o número de palavras não vazias no texto
    contagem.textContent = palavras + ' palavra(s).'
};