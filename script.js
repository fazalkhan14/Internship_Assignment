var lastScrollTop = 0;
var navbar = document.querySelector(".nav-bar");
var elem = document.createElement("img");
elem.setAttribute("src","https://exponentwptheme.com/finance/wp-content/uploads/sites/19/2018/12/exp-logo-dark.svg") 
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            navbar.style.position = "relative";
            navbar.style.background = "none";
            navbar.style.color = "white";
            navbar.style.width = "90%";
            navbar.style.display = "flex";
            navbar.style.padding = "25px";
            navbar.style.zIndex = "3";
            navbar.style.justifyContent = "space-between";
            navbar.style.alignItems = "center";
            navbar.style.margin = "0 auto";
            navbar.style.boxShadow = "none";
        }
        else{
            navbar.style.position = "fixed";
            navbar.style.background = "white";
            navbar.style.color = "black";
            navbar.style.width = "100%";
            navbar.style.display = "flex";
            navbar.style.padding = "25px";
            navbar.style.zIndex = "4";
            navbar.style.justifyContent = "space-between";
            navbar.style.alignItems = "center";
            navbar.style.boxShadow = "0 4px 20px 0 rgba(167,172,183,.3)";
        }
        lastScrollTop = scrollTop;
});

var mybutton = document.querySelector(".topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}