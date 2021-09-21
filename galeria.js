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

const criarItem = (urlImg) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    // <a href="${urlImg}" class="galeria-itens">
    //     
    // </a>`

    const novoLink = document.createElement("a")
    novoLink.href = urlImg
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImg}" alt="">`
    container.appendChild(novoLink)
            
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()