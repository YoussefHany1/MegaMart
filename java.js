function circle(){
    var s = document.querySelectorAll(".slide-wrapper img");
    for (let i = 0; i < s.length; i++) {
        let span = document.createElement('span');
        span.setAttribute('class', 'demo');
        let curr = `currentDiv(${i+1})`
        span.setAttribute('onclick', curr)
        // span.onclick = currentDiv([i]);
        let js = document.querySelector(".js");
        js.appendChild(span);
    }
}
circle();

var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".slide-wrapper img");
    var dots = document.getElementsByClassName("demo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    } 
    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "";
    }
x[slideIndex-1].style.display = "block";
dots[slideIndex-1].style.backgroundColor += "var(--primary)";
}

let btnNext = document.querySelector(".third-cate .arrow .forward button");
let btnBack = document.querySelector(".third-cate .arrow .back button");
function scroRight() {
    let scrollable = document.querySelector(".third-cate .brands .brand");
    scrollable.scrollBy({
        left: 1269,
        behavior: "smooth",
    });
    console.log(`scrollLeft: ${scrollable.scrollLeft}`);
}
scroRight();
btnNext.addEventListener("click", scroRight);


function scroLeft() {
    let scrollable = document.querySelector(".third-cate .brands .brand");
    scrollable.scrollBy({
        left: -1269,
        behavior: "smooth",
    });
}
btnBack.addEventListener("click", scroLeft);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}