const cardData = {
  imageMain: "assets/images/placeholder_large.png",
  imageSecondary: [
    "assets/images/carousel3.png",
    "assets/images/carousel2.png",
    "assets/images/carousel1.png",
  ],
};

//mostrar imagem principal
const mainImage = document.getElementById("mainImage");
mainImage.src = cardData.imageMain;

//mostrar carrossel
const carouselImages = [...cardData.imageSecondary];
let carouselIndex = 0;
const displayCarousel = (index) => {
  const display = document.getElementById("carouselDisplay");
  display.innerHTML = "";
  if (carouselImages.length < 3) {
    for (i = 0; i < carouselImages.length; i++) {
      const newImage = document.createElement("img");
      newImage.src = carouselImages[i];
      display.appendChild(newImage);
    }
  }
};
displayCarousel(carouselIndex);
