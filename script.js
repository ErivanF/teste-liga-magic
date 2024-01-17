const cardData = {
  imageMain: "assets/images/placeholder_large.png",
  imageSecondary: [
    "assets/images/carousel1.png",
    "assets/images/carousel1.png",
    "assets/images/carousel1.png",
  ],
};

const mainImage = document.getElementById("mainImage");
console.log(mainImage);
mainImage.src = cardData.imageMain;
