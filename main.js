function criarSlider(idImagem, idNext, idPrev, imagens) {
    const img = document.getElementById(idImagem);
    const next = document.getElementById(idNext);
    const prev = document.getElementById(idPrev);

    let atual = 0;

    next.addEventListener("click", () => {
        atual = (atual + 1) % imagens.length;
        img.src = imagens[atual];
        
    });

    prev.addEventListener("click", () => {
        atual = (atual - 1 + imagens.length) % imagens.length;
        img.src = imagens[atual];
    });
}


const monique = [
    "MoniqueFrente.png",
    "MoniqueLado.png",
    "MoniqueCostas.png"
];


const elaine = [
    "ElaineFrente.png",
    "ElaineLado.png",
    "ElaineCostas.jpeg"
];


const isabela = [
    "IsabelaFrente.jpeg",
    "IsabelaLado.png",
    "IsabelaCostas.jpeg"
];


criarSlider(
    "pessoaEsquerda",
    "ProximoSlide",
    "SlideAnterior",
    monique
);


criarSlider(
    "pessoaMeio",
    "ProximoSlide2",
    "SlideAnterior2",
    elaine
);


criarSlider(
    "pessoaDireita",
    "ProximoSlide3",
    "SlideAnterior3",
    isabela
);


const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("ativo");
});