let serviceDrop = document.querySelector("#services_dropdown");
let drop = document.querySelector(".service_drop");
let aboutDrop = document.querySelector("#about_dropdown");
let aboutDropped = document.querySelector(".about_drop");
let cross = document.querySelector("#cross");
let bars = document.querySelector("#barsss");
let ham_content = document.querySelector(".ham_content");
let animation = document.querySelector(".animation");
let div_ani = document.querySelector("#animated_div");
let cut = document.querySelector(".cut");
let searchInput = document.querySelector("#search");

serviceDrop.addEventListener("click", () => {
  aboutDropped.classList.add("hidden");
  drop.classList.remove("hidden");
});
aboutDrop.addEventListener("click", () => {
  drop.classList.add("hidden");
  aboutDropped.classList.remove("hidden");
});
bars.addEventListener("click", () => {
  bars.style.display = "none";
  ham_content.style.display = "block";
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  cross.style.display = "none";
  bars.style.display = "block";
  ham_content.style.display = "none";
});
animation.addEventListener("click", () => {
  div_ani.style.display = "block";
  document.getElementById("search").style.opacity = "-1";
});
cut.addEventListener("click", () => {
  div_ani.style.display = "none";
});
searchInput.addEventListener("click", () => {
  searchInput.style.width = "20rem";
});

// x-images-------------------------------------------
let btn1 = document.querySelector(".showAll");
let btn2 = document.querySelector(".ecommerce");
let btn3 = document.querySelector(".appsbtn");
let ecommerceCard = document.querySelectorAll(".ecommerce-card");
let appCard = document.querySelectorAll(".app-card");

btn1.addEventListener("click", () => {
  ecommerceCard.forEach((e) => {
    e.style.display = "block";
  });
  appCard.forEach((e) => {
    e.style.display = "block";
  });
  btn1.style.backgroundColor = "hsl(222, 24%, 31%)";
  btn3.style.backgroundColor = "white";
  btn2.style.backgroundColor = "white";
  btn1.style.color = "white";
  btn2.style.color = "black";
});
btn2.addEventListener("click", () => {
  ecommerceCard.forEach((e) => {
    e.style.display = "block";
  });
  appCard.forEach((e) => {
    e.style.display = "none";
  });
  btn2.style.backgroundColor = "hsl(222, 24%, 31%)";
  btn1.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn2.style.color = "white";
  btn3.style.color = "black";
  btn1.style.color = "black";
});
btn3.addEventListener("click", () => {
  ecommerceCard.forEach((e) => {
    e.style.display = "none";
  });
  appCard.forEach((e) => {
    e.style.display = "block";
  });
  btn3.style.backgroundColor = "hsl(222, 24%, 31%)";
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "white";
  btn3.style.color = "white";
  btn2.style.color = "black";
  btn1.style.color = "black";
});
let imageHover = document.querySelector("#men_hover");

imageHover.addEventListener("mouseover", () => {
  imageHover.src = "assets/apps1.jpg";
});
imageHover.addEventListener("mouseout", () => {
  imageHover.src = "assets/apps2.jpg";
});

let slidingBgImg = document.querySelector(".portfolio-card");
let sliding = document.querySelector(".sliding_image");
let slidingCircle = document.querySelector(".sliding-circle ");

slidingBgImg.addEventListener("mousemove", (e) => {
  let width = e.clientX;
  let x = width - 150;
  console.log(x);
  if (x > 370) {
    slidingCircle.style.right = "4%";
  }
  if ((x > 0) & (x < 370)) {
    slidingCircle.style.left = `${x - 18}px`;
  }

  if (x < 0) {
    slidingCircle.style.left = "3%";
  }
  if (x < 394) {
    sliding.style.clip = `rect(0px ${x}px 273px 0px)`;
  }
});
let magnifiedImage = document.querySelector("#maginfied");
let magnifiyImage = document.querySelector(".non-magnified");
magnifiyImage.addEventListener("mousemove", (e) => {
  let xaxis = e.offsetX;
  let yaxis = e.offsetY;
  if (xaxis>50 && yaxis>30)
  magnifiedImage.style.clipPath = `circle(10% at ${xaxis}px ${yaxis}px)`;
});

