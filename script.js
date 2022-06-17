"use strict";

const btnSubmitLogin = document.querySelector(".btn-submit-login");
const btnSubmitForm = document.querySelector(".btn-submit-form");

const inputMeli = document.querySelector(".meli");
const inputPassword = document.querySelector(".password");
const linkCSS = document.querySelector(".c-src");
const login = document.querySelector(".login");
const health = document.querySelector(".health");
const htmlTitle = document.querySelector(".html-title");
const i1 = document.querySelector(".i1");
const i2 = document.querySelector(".i2");
const form = document.querySelector("#form");

btnSubmitLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (+inputMeli.value === 123 && +inputPassword.value === 123) {
    login.classList.add("hidden");
    setTimeout(function () {
      login.classList.add("ndisplay");
      login.classList.remove("main-container");
      linkCSS.setAttribute("href", "style.css");
      htmlTitle.textContent = "صفحه سلامت آقای شایان رادمنش";
      health.classList.remove("hidden", "ndisplay");
    }, 500);
  } else {
    if (+inputMeli.value !== 123 && +inputPassword.value !== 123) {
      inputMeli.style.borderColor = "red";
      inputPassword.style.borderColor = "red";
    }
    if (+inputMeli.value !== 123) inputMeli.style.borderColor = "red";
    if (+inputPassword.value !== 123) inputPassword.style.borderColor = "red";
  }
});

$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    let dataString = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "https://formsubmit.co/c9363af2d79fade64f53b5571499c64e",
      data: dataString,
      success: function () {
        i1.value = i2.value = "";
        i2.value.blur();
      },
    });
  });
});

