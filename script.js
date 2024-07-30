// Récupération des différents éléments
const form1 = document.querySelector("#form--1");
const form2 = document.querySelector("#form--2");
const form3 = document.querySelector("#form--3");
const nextBtn1 = document.querySelector("#next--1");
const nextBtn2 = document.querySelector("#next--2");
const backBtn1 = document.querySelector("#back--1");
const backBtn2 = document.querySelector("#back--2");
const progress = document.querySelector("#progress");

nextBtn1.addEventListener("click", () => {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
});

backBtn1.addEventListener("click", () => {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
});

nextBtn2.addEventListener("click", () => {
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
});

backBtn2.addEventListener("click", () => {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
});
