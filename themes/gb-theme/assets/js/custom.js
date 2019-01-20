// add html attributes to documents table of contents

// var d = document.getElementById("TableOfContents").getElementsByTagName("UL")[0];
// d.className = "nav flex-column toc";
// d.id = "toc";
// var l = d.getElementsByTagName("LI");
// [].forEach.call(l, function(item) {
//         item.className = "nav-item";
//         var a = item.getElementsByTagName("A")[0];
//         a.className = "nav-link";
//         a.setAttribute("data-scroll", "");
// })

//  add back functionality
function goBack() {
  window.history.back();
}


$(function () {
// table of contents
    $('#TableOfContents > ul').addClass("nav flex-column toc")
                              .attr("id", "toc");
    $('#TableOfContents > ul > li').addClass("nav-item");
    $('#TableOfContents > ul > li > a').addClass("nav-link")
                                       .attr("data-scroll", "");


// toggle menu
    $('.menu-trigger').click(function () {
        $('#menu').toggleClass('menu-visible')
    });

// Show summary news on hover

    $('.page-summary').addClass('d-none');
    $('.page-box').hover(function () {
        const targetId = $(this).attr('data-target');
        $('.page-summary').addClass('d-none');
        $(`#${targetId}`).removeClass('d-none');
    });
});
