let username = prompt("Enter Your Name:");
document.getElementById("myName").innerHTML = `${username}`;

let günler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let dayf = function () {
  let now = new Date();
  let gün = günler[now.getDay()];
  document.getElementById("day").innerHTML = gün;
};

let timer = function () {
  let now = new Date();
  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let second =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  let current = `${hour}:${minute}:${second}`;
  document.getElementById("myClock").innerHTML = current;
};
setInterval(timer, 1000);
dayf();
