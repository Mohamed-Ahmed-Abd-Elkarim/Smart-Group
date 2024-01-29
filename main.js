let toggle = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let header = document.querySelector(".header");
let allLis = document.querySelectorAll(".small-img .col-img");
let mainImage = document.getElementById("big-image");
let ImageDetails = document.getElementById("details-img");
let social = document.querySelector(".sociall");
let share = document.querySelector(".share");
let love = document.querySelector(".love");
//
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 200)
});
toggle.onclick = function () {
    nav.classList.add("open");
    overlay.classList.add("open")
};
close.onclick = function () {
    nav.classList.remove("open");
    overlay.classList.remove("open")
};
window.onscroll = () => {
    nav.classList.remove("open");
    overlay.classList.remove("open")
};
allLis.forEach(function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });
        this.classList.add("active");
    };
});
function change(image) {
    mainImage.src = image;
};
// Create Popup With The Image
let portfolio = document.querySelectorAll(".portfolio img");
portfolio.forEach(img => {
    img.addEventListener("click", (e) => {
    // Create Overay 
    let overlay = document.createElement("div")
    // Add class To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body 
    document.body.appendChild(overlay);
    // Creat The Popup Box
    let popupBox = document.createElement("div")
    // Add Class To Popup Box 
    popupBox.className = 'popup-box';
        // Creat The Image 
        let popupImage = document.createElement("img");
        // Set Image Src
        popupImage.src =  img.src
        // Add Image To Popup Box
        popupBox.appendChild(popupImage);
        // Append The Popup To Body 
        document.body.appendChild(popupBox);
      // Create Close Span 
    let closeButton = document.createElement("span");
    // Craet The Close Button Text 
    let closeButtonText = document.createTextNode("X"); 
    // Append The Text To closeButton 
    closeButton.appendChild(closeButtonText);
    // Add Class To closeButton 
    closeButton.className = 'close-button';
    // Add closeButton To The Popup Box
    popupBox.appendChild(closeButton);
    });
});
document.addEventListener("click", function (e) {
    if (e.target.className == 'close-button') {
        // Remove The Current Popup 
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});
function changes(image) {
    ImageDetails.src = image;
};
share.onclick = function() {
    social.classList.toggle("active");
    share.classList.toggle("active");
};
love.onclick = function() {
    love.classList.toggle("active");
};
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
    a++;
    num.innerHTML = a;
});
minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.innerHTML = a;
    }
});


