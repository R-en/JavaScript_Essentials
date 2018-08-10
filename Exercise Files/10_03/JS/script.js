const IMAGES = document.querySelectorAll("img");


for(let i = 0; i < IMAGES.length; i++){
  let imagSRC = IMAGES[i].getAttribute("src");
  imagSRC = imagSRC.slice(0,-8);
  console.log(imagSRC);

  let type = IMAGES[i].getAttribute("data-type");
  console.log(type);
}
