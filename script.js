const selectedImgRoom1 = document.querySelector("#bigImgRoom1");
const selectedImgRoom2 = document.querySelector("#bigImgRoom2");
const selectedImgRoom3 = document.querySelector("#bigImgRoom3");
const selectedImgRoom4 = document.querySelector("#bigImgRoom4");
const smallImgs1 = document.querySelectorAll(".room1");
const smallImgs2 = document.querySelectorAll(".room2");
const smallImgs3 = document.querySelectorAll(".room3");
const smallImgs4 = document.querySelectorAll(".room4");

window.onscroll = function () {
  scrollwithFixedHeader();
};

let header = document.querySelector("header");
let sticky = header.offsetTop;

function scrollwithFixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function changeImg(array, bigImg) {
  array.forEach((element) => {
    element.addEventListener("click", () => {
      let path = element.getAttribute("src");
      bigImg.setAttribute("src", path);
    });
  });
}
changeImg(smallImgs1, selectedImgRoom1);
changeImg(smallImgs2, selectedImgRoom2);
changeImg(smallImgs3, selectedImgRoom3);
changeImg(smallImgs4, selectedImgRoom4);
