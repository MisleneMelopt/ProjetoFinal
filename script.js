const livia = document.getElementById("livia")
const bianca = document.getElementById("bianca")
const liviaImg = document.getElementById("livia1")
const biancaImg = document.getElementById("bianca1")


livia.addEventListener("click", () =>{

    if (liviaImg.style.display === "none" || liviaImg.style.display === " "){
        liviaImg.style.display = "block";
    } else {
        liviaImg.style.display = "none";
    }
});


bianca.addEventListener("click", () =>{

    if (biancaImg.style.display === "none" || biancaImg.style.display === " "){
        biancaImg.style.display = "block";
    } else {
        biancaImg.style.display = "none";
    }
});