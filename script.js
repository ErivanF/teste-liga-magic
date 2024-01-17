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
};

//mostrar imagem principal
const mainImage = document.getElementById("mainImage");
mainImage.src = cardData.imageMain;

//mostrar carrossel
const carouselImages = [...cardData.imageSecondary];

const displayCarousel = () => {
  const display = document.getElementById("carouselDisplay");
  display.innerHTML = "";
  for (i = 0; i < carouselImages.length; i++) {
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
