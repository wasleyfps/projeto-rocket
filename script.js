function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituição da imagem"
    if(html.classList.contains("light")) {
    // se ligar (lightmode, adiciona imagem light)
        img.setAttribute("src", "assets/avatar-light.png")
    } else {
    // se tiver sem light mode, manter imagem normal    
        img.setAttribute("src", "assets/avatar.png")
    }


}