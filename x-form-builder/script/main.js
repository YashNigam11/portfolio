let draggable = document.querySelectorAll(".dargg");
let doc_sec = document.querySelector(".inpt_elem");
let applied_color = document.getElementById("applied_color");
let radio = document.getElementById("radioBtn");
let checkBox = document.querySelector("#boxBtn");
let add_logo = document.querySelector("#add_input");
let buttons = document.querySelectorAll(".bts");

let objData = new Form();
objData.setForm(xForm);

buttons.forEach((e, index) => {
  e.addEventListener("dragstart", (eve) => {
    eve.dataTransfer.setData("text", eve.target.id);
    switch (index) {
      case 0:
        draggable.forEach((eve) => {
          if (!eve.childNodes.length) {
            eve.style.backgroundColor = "red";
          }
        });
        break;

      case 1:
        doc_sec.style.backgroundColor = "red";

        break;

      case 2:
        doc_sec.style.backgroundColor = "red";

        break;

      case 3:
        doc_sec.style.backgroundColor = "red";
    }
  });
  e.addEventListener("dragend", (eve) => {
    switch (index) {
      case 0:
        draggable.forEach((eve) => {
          eve.style.backgroundColor = "white";
        });
        break;
      case 1:
        doc_sec.style.backgroundColor = "white";
        break;
      case 2:
        doc_sec.style.backgroundColor = "white";
        break;
      case 3:
        doc_sec.style.backgroundColor = "white";
    }
  });
});
function generateId() {
  let newId = Math.floor(Math.random() * 100);
  return newId;
}
draggable.forEach((e, index) => {
  e.addEventListener("dragover", (el) => {
    if (e.style.backgroundColor == "red") {
      el.preventDefault();
    }
  });
  e.addEventListener("drop", (event) => {
    var input = document.createElement("input");
    input.type = "file";
    input.setAttribute("accept", "image/*");
    let inp = "id" + generateId();
    input.setAttribute("id", inp);
    var inp1 = document.createElement("img");
    inp1.src = "";
    let img = "img" + generateId();
    inp1.id = img;
    inp1.style.display = " none";
    inp1.setAttribute("height", "100%");
    input.addEventListener("change", (e) => {
      previewFile(img, inp, index);
    });
    event.target.append(input);
    event.target.append(inp1);
    let dataTypeId = event.dataTransfer.getData("text");
  });
});

let previewFile = (img, inp, index) => {
  let Input = document.getElementById(inp);
  Input.style.display = "none";
  let preveiwed = document.getElementById(img);
  preveiwed.style.display = "block";
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      preveiwed.src = reader.result;

      if (index < 3) {
        objData.setHeader("header", preveiwed.src, index);
      } else {
        objData.setFooter("footer", preveiwed.src, index);
      }
    },
    false
  );
  if (Input.files[0]) {
    reader.readAsDataURL(Input.files[0]);
  }
};
let savePage = () => {
  localStorage.setItem("xform", JSON.stringify(xForm));
};

let cancelData = ()=>{
  localStorage.clear()
}
doc_sec.addEventListener("dragover", (el) => {
  el.preventDefault();
});
doc_sec.addEventListener("drop", (event) => {
  let dataTypeId = event.dataTransfer.getData("text");
  switch (dataTypeId) {
    case "input":
      doc_sec.style.backgroundColor = "white";
      let div = document.createElement("div");
      div.setAttribute("class", "div_input");
      let div_3 = document.createElement("div");
      div_3.setAttribute("class", " edit_buttons");
      let div_main = document.createElement("div");
      div_main.setAttribute("class", " edit_flex");
      let label = document.createElement("label");
      label.innerHTML = "Name";
      let inputtxt = document.createElement("input");
      inputtxt.type = "text";
      inputtxt.placeholder = "name";
      div_3.innerHTML = `<button> <i class="fa-solid fa-pencil edit_popup"></i></button>
            <button class= "cut"><i class="fa-sharp fa-solid fa-xmark cutInputField"></i></button>`;
      doc_sec.append(div);
      div.append(div_main);
      div_main.append(label);
      div_main.append(div_3);
      div.append(inputtxt);
      editDoc();
      newDoc();

      break;

    case "radioBtn":
      doc_sec.style.backgroundColor = "white";
      let new_div = document.createElement("div");
      let btn_div = document.createElement("span");
      btn_div.setAttribute("class", "btnFlex");
      btn_div.innerHTML = ` <button> <i class="fa-solid fa-pencil edit_popup"></i></button>
      <button class ="cut"><i class="fa-sharp fa-solid fa-xmark"></i></button>`;
      new_div.setAttribute("class", "radioBox");
      let label_box = document.createElement("label");
      let input_box = document.createElement("input");
      input_box.type = "radio";
      label_box.textContent = "Salutaion";
      doc_sec.append(new_div);
      new_div.append(btn_div);
      new_div.append(input_box);
      new_div.append(label_box);
      editDoc();
      newDoc();

      break;
    case "boxBtn":
      doc_sec.style.backgroundColor = "white";
      let newDiv = document.createElement("div");
      let btnDiv = document.createElement("span");
      btnDiv.innerHTML = `<button> <i class="fa-solid fa-pencil edit_popup"></i></button>
      <button class ="cut"><i class="fa-sharp fa-solid fa-xmark"></i></button>`;
      btnDiv.setAttribute("class", "btnFlex");
      newDiv.setAttribute("id", "checkInp");
      let label_check = document.createElement("label");
      let input_check = document.createElement("input");
      label_check.textContent = "Terms & Condition";
      input_check.type = "checkbox";
      doc_sec.append(newDiv);
      newDiv.append(input_check);
      newDiv.append(label_check);
      newDiv.append(btnDiv);
      editDoc();
      newDoc();
  }
});

let formData = {};
let formArray = [];
let saveChanges = document.querySelector(".colorSave");
let inputType = document.querySelector(".div_input");
saveChanges.addEventListener("click", () => {
  let divPopUp = document.querySelector(".form_Elements").children;
  for (i = 1; i <= 7; i++) {
    if (i % 2 != 0) {
      let key = divPopUp[i].name;
      let value = divPopUp[i].value;
      formData[key] = value;
    }
  }
  data(formData);
});
let data = (obj) => {
  let docSec = doc_sec.children[1].children;
  let label = docSec[0].children[0];
  let inputType = docSec[1];
  let editLableValue = obj.label;
  let editInput = obj.InputType;
  label.textContent = editLableValue;
  inputType.type = editInput;
};

let banner = document.querySelector("#bannerImg");
let bannerPreview = document.querySelector("#bannerPreview");

banner.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      bannerPreview.src = reader.result;
      bannerPreview.style.display = "block";
      banner.style.display = "none";
      document.querySelector("#banner_detail").style.display = "none";
      objData.setBanner(reader.result);
    },
    false
  );
  if (banner.files[0]) {
    reader.readAsDataURL(banner.files[0]);
  }
});

let arr = [];
let newDoc = () => {
  let btn = document.querySelectorAll(".cut");
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      arr[index + 1].style.display = "none";
    });
  });
  arr = doc_sec.children;
};

let editDoc = () => {
  let newbtn = document.querySelectorAll(".edit_popup");
  let popUp = document.querySelector(".input_edit_popup");
  let cutInputPopup = document.querySelector(".fa-xmark");
  newbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popUp.style.display = "block";
    });
    cutInputPopup.addEventListener("click", () => {
      popUp.style.display = "none";
    });
  });
};

function submit() {
  let doc_secColec = doc_sec;
  for (let i = 1; i < 100; i++) {
    if (doc_secColec.children[i].children[1].type === "text") {
      let labels = doc_secColec.children[i].children[0].children[0].innerHTML;
      let inputs = doc_secColec.children[i].children[1].type;
      let placeholder = doc_secColec.children[i].children[1].placeholder;

      objData.setFormElements(labels, placeholder, inputs);
    } else if (doc_secColec.children[i].children[0].type === "checkbox") {
      let labels = doc_secColec.children[i].children[1].innerHTML;
      let inputs = doc_secColec.children[i].children[0].type;

      objData.setInputElements(labels, inputs);
    } else if (doc_secColec.children[i].children[1].type === "radio") {
      let labels = doc_secColec.children[i].children[2].innerHTML;
      let inputs = doc_secColec.children[i].children[1].type;

      objData.setInputElements(labels, inputs);
    }
  }
}
