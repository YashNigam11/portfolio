let dataResponse = localStorage.getItem("formData");
let e = JSON.parse(dataResponse);
console.log(e[0].title);
for (let i in e) {
  let table = document.querySelector("table");
  let thead = document.createElement("th");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  thead.innerHTML = "label";
  let theading2 = document.createElement("th");
  let td2 = document.createElement("td");
  td2.innerHTML = e[i].response;
  theading2.innerHTML = "value";
  td.innerHTML = e[i].title;
  table.appendChild(thead);
  table.append(theading2);
  table.append(tr);
  tr.append(td);
  tr.append(td2);
}
