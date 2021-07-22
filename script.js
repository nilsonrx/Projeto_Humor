const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const elementoSituacao = document.querySelector('#Frases'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela */
const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoBtn = document.querySelector('#alterar') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () => {
    /* Verifica se o valor do botão é 'inicio', se for troque de humor para o Steven Paul Jobs */
    if (elementoBtn.value == 'inicio') {
        elementoImg.src = './steve01.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Steven Paul Jobs' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Steven Paul Jobs '
        elementoSituacao.innerText = 'Design não é apenas o que parece e o que se sente. Design é como funciona. Eu quero colocar uma marca no universo! ' /* Altera o texto do elemento situação */
        elementoBtn.value = 'humor2' /* Altera valor do botão */
    } else if (elementoBtn.value == 'humor2') { /* Verifica se o valour do botão é 'humor2', se for troque de humor para o Steve Jobs*/
        elementoImg.src = './steve02.jpeg'  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Steve Jobs' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Trocava toda a minha tecnologia por uma tarde com Sócrates.' /* Altera o texto do elemento situação */
        elementoBtn.value = 'humor3'  /* Altera valor do botão */
    } else { /* Se os valores do botão não forem, 'inicio' nem 'humor2' mude para o Steve Jobs */
        elementoImg.src = './steve03.jpg' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Steve Jobs' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção' /* Altera o texto do elemento situação */
        elementoBtn.value = 'inicio' /* Altera valor do botão */
    }
})

