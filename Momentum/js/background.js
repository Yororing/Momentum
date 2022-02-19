const images = [
    "cat-g002223f38_1920.jpeg",
    "chicago-g947572679_1920.jpeg",
    "sitting-g8ac2e383c_1920.jpeg",
    "pexels-gdtography-911738.jpeg",
    "pexels-jeremy-bishop-2422915.jpeg",
    "pexels-sevenstorm-juhaszimrus-728824.jpeg",
    "pexels-sourav-mishra-3136673.jpeg",
];

const background = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${background}`; 
bgImg.classList.add("bgImage");

document.body.appendChild(bgImg);