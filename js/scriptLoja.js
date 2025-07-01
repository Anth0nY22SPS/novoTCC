



function abrirModal() {
    document.getElementById('meuModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
}


const frutas   = document.querySelector(".frutas");
const legumes  = document.querySelector(".legumes");
const verduras = document.querySelector(".verduras");
const terras   = document.querySelector(".terras");

frutas.innerHTML   += '<div class="container_card"></div>';
legumes.innerHTML  += '<div class="container_card"></div>';
verduras.innerHTML += '<div class="container_card"></div>';
terras.innerHTML   += '<div class="container_card"></div>';

fetch("../dados.json")
    .then(res => res.json())
    .then(dados => {
        dados.forEach(element => {
            let cardHTML = gerarCard(element);

            if (element.Categoria === "terras") {
                terras.querySelector('.container_card').innerHTML += cardHTML;
            } else if (element.Categoria === "frutas") {
                frutas.querySelector('.container_card').innerHTML += cardHTML;
            } else if (element.Categoria === "legumes") {
                legumes.querySelector('.container_card').innerHTML += cardHTML;
            } else if (element.Categoria === "verduras") {
                verduras.querySelector('.container_card').innerHTML += cardHTML;
            }
        });
    });

function gerarCard(element) {
    return `
        <div class="card">
            <img src="${element.img}" alt="">
            <h3>${element.Nome}</h3>
            <p>${element.Descricao}</p>
            <p>R$ ${element.Preco}</p>
        </div>
    `;
}

