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

// Global boolean variable that holds the current orientation
var pageInPortraitMode;

// Listen for window resizes to detect orientation changes
window.addEventListener("resize", windowSizeChanged);

// Set the global orientation variable as soon as the page loads
addEventListener("load", function () {
  pageInPortraitMode = window.innerHeight > window.innerWidth;
  document
    .getElementById("viewport")
    .setAttribute(
      "content",
      "width=" +
        window.innerWidth +
        ", height=" +
        window.innerHeight +
        ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    );
});

// Adjust viewport values only if orientation has changed (not on every window resize)
function windowSizeChanged() {
  if (
    (pageInPortraitMode === true && window.innerHeight < window.innerWidth) ||
    (pageInPortraitMode === false && window.innerHeight > window.innerWidth)
  ) {
    pageInPortraitMode = window.innerHeight > window.innerWidth;
    document
      .getElementById("viewport")
      .setAttribute(
        "content",
        "width=" +
          window.innerWidth +
          ", height=" +
          window.innerHeight +
          ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      );
  }
}
