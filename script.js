// Script for navigation bar

const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

// ***************************************** sproduct javascript code   **********************************************//


const mainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
  mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
  mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
  mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
  mainImg.src = smallImg[3].src;
}


