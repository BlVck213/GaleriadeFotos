"use strict"

const limpar = (elemento) => {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.lastChild)
    }
}


const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

const procurarImagens = async (evento) => {

    if (evento.key === 'Enter'){
        const raca = evento.target.value
        const imagesResponse = await pegarImagens(raca)
        const imagens = await imagesResponse.json()
  
        limpar(document.querySelector(".galeria-container"))
        limpar(document.querySelector(".slide-container"))
        carregarImagens(imagens.message)
        carregarSlides(imagens.message)
    }

}

const limparId = (urlImagem) => {
    const posBarra = urlImagem.lastIndexOf('/') + 1
    const posPonto = urlImagem.lastIndexOf('.') 
    return urlImagem.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    container.appendChild(novoLink)
            
}

const carregarImagens = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")

    const novoSlide = document.createElement("div")
    novoSlide.classList.add("slide")
    novoSlide.id = limparId(urlImagem)


   const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0 
    const idProximo = limparId(arr[indiceProximo])

   
    novoSlide.innerHTML = 
        `<div class="image-container">
            <a href="#" class="fechar">&#10006;</a>
            <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
            <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
            <img src="${urlImagem}" alt="">
        </div>`

    container.appendChild(novoSlide)
}


const carregarSlides = (imagens) => imagens.forEach(criarSlide)


document.querySelector(".pesquisa input").addEventListener("keypress", procurarImagens)
