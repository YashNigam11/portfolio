let pic1 = document.querySelector(".pic1");
let div1 = document.querySelector("#picture1");
let head = document.querySelector("h1");
let div2 = document.querySelector("#picture2");
let div3 = document.querySelector("#picture3");
let div4 = document.querySelector("#picture4");
div1.addEventListener("click", () => {
  pic1.src = "assets/image 2.jpg";
  head.innerText = `We make healing simple`;
  div1.style.backgroundColor = "white";
  head.style.color = "white";
});
div3.addEventListener("click", () => {
  pic1.src = "assets/image 6.jpg";
  head.innerText = `The missing link to health is here`;
  div3.style.backgroundColor = "white";
  head.style.color = "white";
});
div2.addEventListener("click", () => {
  pic1.src = "assets/image 7.jpg";
  head.innerText = `This is healthcare reinvented.`;
  div2.style.backgroundColor = "white";
  head.style.color = "white";
});
div4.addEventListener("click", () => {
  pic1.src = "assets/image 5.jpg";
  head.innerText = `Affordable Access to Lifestyle Medicine`;
  div4.style.backgroundColor = "white";
  head.style.color = "white";
});



let image = [
  "assets/image 5.jpg",
  "assets/image 6.jpg",
  "assets/image 7.jpg",
  "assets/image 2.jpg",
];

let carousel = () => {
  setTimeout(() => {
    for (let j = 0; j < image.length; j++) {
      document.querySelector(".pic1").src = image[j];

      // console.log(j);
    }
  }, 3000);
};

carousel();
