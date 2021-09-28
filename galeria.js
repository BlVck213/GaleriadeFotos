"use strict"

const imagens = [

    "./img/future.jpg",
    "./img/future1.jpg",
    "./img/future2.jpg",
    "./img/future3.jpg",
    "./img/future4.jpg",
    "./img/future5.jpg",
    "./img/future6.jpg",
    "./img/future7.jpg"

]


const limparId = (urlImg) => urlImg.split("/")[2].split(".")[0].replace(" ","-").toLowerCase()


const criarItem = (urlImg) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImg)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImg}" alt="">`

    container.appendChild(novoLink)
            
}

const criarSlide = (urlImg) => {
    const container = document.querySelector(".slide-container")

    const novoSlide = document.createElement("div")
    novoSlide.classList.add("slide")
    novoSlide.id = limparId(urlImg)

   const indiceAnterior = indice > 0 ? indice -1 : arr.lenght -1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.lenght - 1 ? indice + 1 : 0 
    const idProximo = limparId(arr[indiceProximo])

   
    novoSlide.innerHTML = 
        `<div class="image-container">
            <a href="#" class="fechar">&#10006;</a>
            <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
            <a href="${idProximo}" class="navegacao proximo">&#187;</a>
            <img src="#${urlImg}" alt="">
        </div>`

    container.appendChild(novoSlide)
}


const carregarSlides = () => imagens.forEach(criarSlide)
const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()
carregarSlides()