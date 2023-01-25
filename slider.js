document.addEventListener("DOMContentLoaded", () => {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");

  let slider = document.getElementsByClassName("slider");

  let slideIndex = 0;
  showSlide();

  function showSlide() {
    let img = document.getElementsByClassName("img");
    for (let i = 0; i < img.length; i++) {
      img[i].style.display = "none";
      // console.log(img[i].classList);
    }
    slideIndex++;
    if (slideIndex > img.length) {
      slideIndex = 1;
    }
    img[slideIndex - 1].style.display = "block";

    setTimeout(showSlide, 1000);
  }
});
// console.log(img);
