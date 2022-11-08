let tempStore = localStorage.getItem("xform");
let Data = JSON.parse(tempStore);

let header = Data.logo.header;
let footer = Data.logo.footer;

let headerDiv = document.querySelector("header");

for (let i in header) {
  let image = document.createElement("img");
  image.src = header[i].url;
  headerDiv.append(image);
}
let footerDiv = document.querySelector("footer");

for (let i in footer) {
  let image = document.createElement("img");
  image.src = footer[i].url;
  footerDiv.append(image);
}
////////////////////////////////////////banner/////////////////
if (Data.banner[0]) {
  let bannerSrc = Data.banner[0];
  let banner = document.querySelector(".banner");
  let img = document.createElement("img");
  img.setAttribute("id", "bannerImg");

  img.src = bannerSrc;
  banner.append(img);
}

// ////////////////////////////////////////form////////////////////////
let inputField = Data.form;
for (let i in inputField) {
  let form = document.querySelector(".formsElement");
  let form_Elements = document.querySelector("form");
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "inputFields");
  let labels = document.createElement("label");
  let inputt = document.createElement("input");
  inputt.placeholder = Data.form[i].placeholder;
  labels.innerHTML = Data.form[i].label;
  inputt.type = Data.form[i].type;
  inputt.setAttribute("class", "inputts");
  labels.setAttribute("class", "labelss");
  form.append(form_Elements);
  form_Elements.append(newDiv);
  newDiv.append(labels);
  newDiv.append(inputt);
}

let boxes = document.querySelectorAll(".inputFields");

let btn = document.querySelector(".btn");
let report = [];
btn.addEventListener("click", () => {
  boxes.forEach((e) => {
    let obj = {
      title: "",
      response: "",
    };

    let label = e.children[0];
    let value = e.children[1];

    obj.title = label.innerHTML;
    obj.response = value.value;
    report.push(obj);
  });
  window.location="data.html";
  
localStorage.setItem("formData", JSON.stringify(report));

});


