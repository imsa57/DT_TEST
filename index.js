const menu = document.getElementById("menu");
const leftSide = document.querySelector(".left_side");
const expandLeftSide = document.querySelector(".show_conten");
menu.addEventListener("click", (e) => {
  e.stopPropagation();
  leftSide.classList.add("hide");
  expandLeftSide.classList.remove("hide");
});

const hideMenue = document.querySelector(".content_container");
hideMenue.addEventListener("click", (e) => {
  expandLeftSide.classList.add("hide");
  leftSide.classList.remove("hide");
});

const collapsButton = document.querySelector("#collaps_button1");
const collapsContent = document.querySelector("#collaps_content1");
const downArrow = document.querySelector("#down_arrow1");
const upArrow = document.querySelector("#up_arrow1");
collapsButton.addEventListener("click", () => {
  upArrow.classList.toggle("hide");
  downArrow.classList.toggle("hide");
  collapsContent.classList.toggle("hide");
});

const collapsButton2 = document.querySelector("#collaps_button2");

const upArrow2 = document.querySelector("#up_arrow2");
const downArrow2 = document.querySelector("#down_arrow2");

const parentContent = document.querySelector(".parent_collaps_content");

collapsButton2.addEventListener("click", () => {
  downArrow2.classList.toggle("hide");
  upArrow2.classList.toggle("hide");
  parentContent.classList.toggle("hide");
});

const collapsButton3 = document.querySelector("#collaps_button3");
const childContent = document.querySelector(".child_collaps_content");
const upArrow3 = document.querySelector("#up_arrow3");
const downArrow3 = document.querySelector("#down_arrow3");

collapsButton3.addEventListener("click", () => {
  downArrow3.classList.toggle("hide");
  upArrow3.classList.toggle("hide");
  childContent.classList.toggle("hide");
});
