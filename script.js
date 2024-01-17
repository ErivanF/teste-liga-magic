const cardData = {
  imageMain: "assets/images/placeholder_large.png",
  imageSecondary: [
    "assets/images/carousel3.png",
    "assets/images/carousel2.png",
    "assets/images/carousel1.png",
  ],
  label: {
    number: "045",
    name: "Dominaria Remastered",
    abbreviation: "DMR",
  },
  name: "Contramágica",
  nameOriginal: "Counterspell",
  color: "Azul",
  cost: 2,
  type: "Mágica Instantânea",
  price: [6.28, 9.39, 14.0],
};
//Título
document.title = "LigaMagic - " + cardData.name;

//mostrar imagem principal
const mainImage = document.getElementById("mainImage");
mainImage.src = cardData.imageMain;

//mostrar carrossel
const carouselImages = [...cardData.imageSecondary];

const displayCarousel = () => {
  const display = document.getElementById("carouselDisplay");
  display.innerHTML = "";
  for (let i = 0; i < carouselImages.length; i++) {
    const newImage = document.createElement("img");
    newImage.src = carouselImages[i];
    display.appendChild(newImage);
  }
};
const moveCarouselLeft = () => {
  carouselImages.push(carouselImages.shift());
  displayCarousel();
};
const moveCarouselRight = () => {
  carouselImages.unshift(carouselImages.pop());
  displayCarousel();
};
document.getElementById("buttonLeft").addEventListener("click", (e) => {
  moveCarouselLeft();
});
document.getElementById("buttonRight").addEventListener("click", (e) => {
  moveCarouselRight();
});
displayCarousel();

//mostrar label
document.getElementById("labelNumber").innerText = cardData.label.number;
document.getElementById("labelName").innerText = cardData.label.name;
document.getElementById("labelAbrr").innerText = cardData.label.abbreviation;

//mostrar títulos
document.getElementById("titlePT").innerText = cardData.name;
document.getElementById("titleOriginal").innerText = cardData.nameOriginal;

//Modar o número a ser adicionado
const amountInput = document.getElementById("amountInput");
document.getElementById("addButton").addEventListener("click", () => {
  amountInput.value++;
});
document.getElementById("removeButton").addEventListener("click", () => {
  if (amountInput.value >= 1) {
    amountInput.value--;
  }
});
amountInput.addEventListener("change", (e) => {
  if (e.target.value < 0) {
    e.target.value = 0;
  }
});
document.getElementById("addToList").addEventListener("click", () => {
  if (amountInput.value > 0) {
    alert("Adicinadas " + amountInput.value + " cartas à sua lista");
  }
});

//Mostrar informações da carta
document.getElementById("color").innerText = cardData.color;
for (let i = 0; i < cardData.cost; i++) {
  const image = document.createElement("img");
  image.src = "assets/icons/mana.svg";
  document.getElementById("cost").appendChild(image);
}
document.getElementById("type").innerText = cardData.type;

//Mostrar preços
const prices = document.getElementById("price");
const reais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "brl",
});
for (let i = 0; i < cardData.price.length; i++) {
  const price = document.createElement("span");
  price.innerText = reais.format(cardData.price[i]);
  prices.appendChild(price);
}
