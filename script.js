const selectedImgRoom1 = document.querySelector("#bigImgRoom1");
const selectedImgRoom2 = document.querySelector("#bigImgRoom2");
const selectedImgRoom3 = document.querySelector("#bigImgRoom3");
const selectedImgRoom4 = document.querySelector("#bigImgRoom4");
const smallImgs1 = document.querySelectorAll(".room1");
const smallImgs2 = document.querySelectorAll(".room2");
const smallImgs3 = document.querySelectorAll(".room3");
const smallImgs4 = document.querySelectorAll(".room4");
const iconNavMenu = document.querySelector("#icon");
const links = document.querySelector("#myLinks");
const lightBoxImgs = document.querySelectorAll(".bigImg");
const lightBox = document.querySelector("#lightBox");
const closeBox = document.querySelector("#close");
const lightBoxImgContainer = document.querySelector("#lightBoxImgContainer");
const lightBoxImg = document.querySelector("#lightBoxImg");
const container = document.querySelector("#container");
const chevronLeft = document.querySelector("#chevron-left");
const chevronRight = document.querySelector("#chevron-right");

window.onscroll = function () {
  scrollwithFixedHeader();
};

let disktop = document.querySelector("#disktop");
let sticky = disktop.offsetTop;

function scrollwithFixedHeader() {
  if (window.pageYOffset > sticky) {
    disktop.classList.add("sticky");
  } else {
    disktop.classList.remove("sticky");
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

/// burger Menu--------------------------------------------------------------

function openCloseNavMenu() {
  iconNavMenu.addEventListener("click", () => {
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  });
}
openCloseNavMenu();

/// lightBox --------------------------------------------------------------

function openLightBox() {
  lightBoxImgs.forEach((element) => {
    element.addEventListener("click", () => {
      container.style.display = "none";
      lightBox.style.display = "block";
      lightBoxImg.setAttribute("src", element.getAttribute("src"));
    });
  });
}
openLightBox();

function nextImage() {
  chevronLeft.addEventListener("click", () => {
    let image = lightBoxImg.getAttribute("src");
    firstPath = image.split("/")[0];
    secondPath = image.split("/")[1];
    thirdPath = image.split("/")[2];
    imgNum = thirdPath.split(".")[0];

    if (imgNum == "4") {
      lightBoxImg.setAttribute("src", `${firstPath}/${secondPath}/1.jpg`);
    } else {
      lightBoxImg.setAttribute(
        "src",
        `${firstPath}/${secondPath}/${parseInt(imgNum) + 1}.jpg`
      );
    }
  });
}
nextImage();

function previousImage() {
  chevronRight.addEventListener("click", () => {
    let image = lightBoxImg.getAttribute("src");
    firstPath = image.split("/")[0];
    secondPath = image.split("/")[1];
    thirdPath = image.split("/")[2];
    imgNum = thirdPath.split(".")[0];

    if (imgNum == "1") {
      lightBoxImg.setAttribute("src", `${firstPath}/${secondPath}/4.jpg`);
    } else {
      lightBoxImg.setAttribute(
        "src",
        `${firstPath}/${secondPath}/${parseInt(imgNum) - 1}.jpg`
      );
    }
  });
}
previousImage();

/// closeBox --------------------------------------------------------------
function closeLightBox() {
  closeBox.addEventListener("click", () => {
    lightBox.style.display = "none";
    container.style.display = "block";
  });
}
closeLightBox();
