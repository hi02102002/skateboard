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
