
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let newEmail = document.querySelector(".email");
let phone = document.querySelector(".phone");
let password = document.querySelector(".password");


function mail() {
  if (newEmail.value === "") {
    alert("please fill out the Email Address");
  }
}
function Name() {
  if (fname.value === "" || fname.value == null) {
    alert("please fill out the entry FIRST NAME");
  }
}
function lastName() {
  if (lname.value === "") {
    alert("please fill out the entry LAST NAME");
  }
}
function phoneNum() {
  if (phone.value.length < 10) {
    alert("please fill out the Phone Number");
  }
}
function passWord() {
  if (password.value.length < 8) {
    alert("Please Fill the Details.");
  }
}



function submitJoinBtn() {
  Name()
  mail()
  passWord()

}

function forgotBtn() {
  mail()
}
function loginBtn() {
  mail()
  passWord()
}
function saveBtn() {
  Name()
  lastName() 
  mail()
  phoneNum()
}