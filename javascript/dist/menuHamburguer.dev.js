"use strict";

addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var hamburguer = document.querySelector(".header-navHamburguer");
  var list = document.querySelector(".header-navHamburguer-list");
  hamburguer.addEventListener("click", function () {
    if (list.style.display === "block") {
      list.style.display = "none";
      header.style.flexDirection = "row";
      hamburguer.style.marginLeft = "auto";
    } else {
      header.style.flexDirection = "column";
      hamburguer.style.flexDirection = "column";
      hamburguer.style.alignItems = "center";
      hamburguer.style.textAlign = "center";
      hamburguer.style.justifyContent = "center";
      hamburguer.style.margin = "20px 0 0 0";
      list.style.display = "block";

      if (list.style.maxWidth === "850px") {
        hamburguer.style.display = "none";
      }
    }
  });
});