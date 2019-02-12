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


// Add table class
    $('table').addClass('table');
    $('.dark-thead > table > thead').addClass('thead-dark');

// Scroll
    // Add smooth scrolling to all links
    $('.section-nav-link').on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("input[type='radio']").click(function(){
      var value = $("input[type='radio']:checked").val();
      $('#radioInput').val(value);
    });

    $('#checkboxAgree').click(function() {
        $("#textAgree").toggle(this.checked).val("I agree");
    });
});
