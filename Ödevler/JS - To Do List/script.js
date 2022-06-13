const buttonS = document.getElementById("liveToastBtn");
const inputS = document.getElementById("task");
let list = document.querySelector("#list");
let liA = document.querySelectorAll("li");
let removeB = document.querySelectorAll(".remove-li");
const successToast = document.querySelector(".success");
const errorToast = document.querySelector(".error");

function checkData(event) {
  liA = document.querySelectorAll("li");
  event.preventDefault();
  this.classList.add("checked");
}

function removeData(event) {
  event.preventDefault();
  console.log(this);
  this.parentNode.remove();
}

function getData(event) {
  let liE = document.createElement("li");
  event.preventDefault();
  if (inputS.value == "" || inputS.value == 0) {
    showToastData(false);
  } else {
    //  Add the data
    list.appendChild(liE);
    liE.innerHTML = inputS.value;
    inputS.value = "";
    liE.addEventListener("click", checkData);
    // Create and add the remove button
    let spanR = document.createElement("span");
    spanR.setAttribute("class", "remove-li");
    spanR.innerHTML = "\u2BBF";
    liE.appendChild(spanR);
    showToastData(true);
  }
}

function showToastData(boolean) {
  let toast = errorToast;
  if (boolean) toast = successToast;
  toast.classList.remove("hide");
  toast.classList.add("show");
  toast.onclick = (e) => {
    if (!e.target.classList.contains("toast-body")) {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }
  };
}

buttonS.addEventListener("click", getData);
liA.forEach((item) => item.addEventListener("click", checkData));
removeB.forEach((item) => item.addEventListener("click", removeData));
