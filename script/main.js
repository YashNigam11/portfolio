/****image 5****/
// console.log("HI");
let imageHover = document.querySelector("#men_hover");
imageHover.addEventListener("mouseover", () => {
  imageHover.src = "assets/apps1.jpg";
});
imageHover.addEventListener("mouseout", () => {
  imageHover.src = "assets/apps2.jpg";
});
/****image 5****/

//image 1&2/////
let slidingBgImg = document.querySelector(".sliding_div");
let sliding = document.querySelector(".sliding_image");
// let slidingCircle = document.querySelector(".sliding-circle ");
slidingBgImg.addEventListener("mousemove", (e) => {
  // console.log("HI");
  let width = e.offsetX;
  console.log(width)
  let x = width;
  if ((x > 10) & (x < 500)) {
    // slidingCircle.style.left = `${x - 20}px`;
    sliding.style.clip = `rect(0px ${x}px 300px 0px)`;
  }
});
let magnifiedImage = document.querySelector("#maginfied");
let magnifiyImage = document.querySelector(".non-magnified");
magnifiyImage.addEventListener("mousemove", (e) => {
  let xaxis = e.offsetX;
  // console.log(xaxis);
  let yaxis = e.offsetY;
  if (xaxis > 30 && yaxis > 20)
    magnifiedImage.style.clipPath = `circle(10% at ${xaxis}px ${yaxis}px)`;
});
//image 1&2/////

// project-section--------------------------------------------------------------------


let allProject = document.querySelector('.all-cards')
let formBuilder = document.querySelector('.form-builder-cards')
let forms = document.querySelector('.form-cards')
let resume = document.querySelector('.resume-cards')
let calculator = document.querySelector('.calci-cards')
let clone = document.querySelector('.clone')

let calci = document.querySelector(".calci")
let xFrom = document.querySelector(".x-from")
let builder = document.querySelector(".builder")
let resumeWeb = document.querySelector(".resumeWeb")
let spotify = document.querySelector(".clonePlyr")

allProject.addEventListener('click', () => {
 
  builder.style.display = "block";
  calci.style.display = "block";
  resumeWeb.style.display = "block";
  xFrom.style.display = "block";
  spotify.style.display = "block";

})
formBuilder.addEventListener('click', () => {
  builder.style.display = "block";
  calci.style.display = "none";
  resumeWeb.style.display = "none";
  xFrom.style.display = "none";
  spotify.style.display = "none";
})
forms.addEventListener('click', () => {
  builder.style.display = "none";
  calci.style.display = "none";
  resumeWeb.style.display = "none";
  xFrom.style.display = "block";
  spotify.style.display = "none";
})
calculator.addEventListener('click', () => {
  builder.style.display = "none";
  calci.style.display = "block";
  resumeWeb.style.display = "none";
  xFrom.style.display = "none";
  spotify.style.display = "none";
})
resume.addEventListener('click', () => {
  builder.style.display = "none";
  calci.style.display = "none";
  resumeWeb.style.display = "block";
  xFrom.style.display = "none";
  spotify.style.display = "none";
})
clone.addEventListener('click', () => {
  builder.style.display = "none";
  calci.style.display = "none";
  resumeWeb.style.display = "none";
  xFrom.style.display = "none";
  spotify.style.display = "block";
})

// navigation-------------------------------------------------------------------

let cross = document.querySelector("#cross");
let ham = document.querySelector(".ham__burg");
let bars = document.querySelector("#barsss");
let navBar = document.querySelectorAll('.links')
bars.addEventListener("click", () => {
  bars.style.display = "none";
  navBar.forEach(e => {
    e.style.display = "flex";
    e.style.height = "100vh"
  })
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  cross.style.display = "none";
  navBar.forEach(e => {
    e.style.display = "none";
  })
  bars.style.display = "block";
  ham.style.display = "block";
});


 function myFunction(x) {
  if (x.matches) {
    let li = document.querySelectorAll('.nav-links')
    li.forEach(e=>{
     e.addEventListener('click',()=>{
       document.querySelector(".links").style.display= "none"
       cross.style.display ="none"
       bars.style.display ="block"
     })
    })
  } 
}

var x = window.matchMedia("(max-width: 820px)")
myFunction(x) 
x.addListener(myFunction) 