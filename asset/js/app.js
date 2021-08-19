"use strict";

////////////////////SideBar////////////////////////////
const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      sidebarLinks.forEach((link) => {
         link.classList.remove("active");
      });

      link.classList.add("active");
   });
});

////////////////////SideBar////////////////////////////
////////////////////video////////////////////////////
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
   const video = card.querySelector(".video");
   card.addEventListener("mouseenter", function (e) {
      video.play();
   });

   card.addEventListener("mouseleave", function (e) {
      video.pause();
   });
});
////////////////////video////////////////////////////
