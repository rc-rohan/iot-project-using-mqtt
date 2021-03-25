// import axios from "axios";
// const axios = require('axios')

const btn = document.querySelector(".btn");
const windowValue = document.querySelector("windowValue");
const fireLevel = document.querySelector("fireLevel");
const gasLevel = document.querySelector("gasLevel");
let windowStatus;
btn.innerHTML = "Window Closed";
console.log("hello from frontend");
window.addEventListener("load", async () => {
  await fetch("http://localhost:9000/getData",{
    mode:'cors',
    credentials:'include'
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

btn.addEventListener("click", (e) => {
  // btn.value = "closed";
  // e.target.value="hellow"
  // console.log(e)
  console.log("got click in the btn");
});
