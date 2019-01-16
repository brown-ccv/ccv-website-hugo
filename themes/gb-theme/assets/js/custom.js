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

function goBack() {
  window.history.back();
}
