// add html attributes to documents table of contents
var d = document.getElementById("TableOfContents").getElementsByTagName("UL")[0];
d.className = "nav flex-column toc";
d.id = "toc";
var l = d.getElementsByTagName("LI");
[].forEach.call(l, function(item) {
        item.className = "nav-item";
        var a = item.getElementsByTagName("A")[0];
        a.className = "nav-link";
        a.setAttribute("data-scroll", "");
})

//  add back functionality
function goBack() {
  window.history.back();
}

function showMenu() {
    var menu = document.getElementById("menu");
    menu.className += " menu-visible";
}

function hideMenu() {
    var menuClasses = document.getElementById("menu").classList;
    menuClasses.remove("menu-visible");
}
