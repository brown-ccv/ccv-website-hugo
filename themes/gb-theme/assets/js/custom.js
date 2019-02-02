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

// // Toggle collapse
//     $('button').click(function () {
//         const targetId = $(this).attr('data-target');
//         $(`${targetId}`).removeClass('show');
//         $(`${targetId}`).addClass('collapse');
//     })

// Add table class
    $('table').addClass('table');
    $('.dark-thead > table > thead').addClass('thead-dark');
});
