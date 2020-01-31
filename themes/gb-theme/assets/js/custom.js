

$(function () {
      $.fn.isOnScreen = function(){

          var win = $(window);

          var viewport = {
              top : win.scrollTop(),
              left : win.scrollLeft()
          };
          viewport.right = viewport.left + win.width();
          viewport.bottom = viewport.top + win.height();

          var bounds = this.offset();
          bounds.right = bounds.left + this.outerWidth();
          bounds.bottom = bounds.top + this.outerHeight();

          return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

      };
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

// toggle discourse box

    $('.discourse-trigger').click(function () {
        $('#discourse-box').toggleClass('discourse-visible')
        $('.discourse-trigger > span').toggleClass('fa-caret-left')
        $('.discourse-trigger > span').toggleClass('fa-caret-right')
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
      const group = ['group', 'condo']
      if (value == "Add to Group or Condo") {
        $(".group-enable").prop("disabled", false);
      }
      else {
        $(".group-enable").prop("disabled", true);
      }
    });

    $('#checkboxAgree').click(function() {
        $("#textAgree").toggle(this.checked).val("I agree");
    });

    $('.taskTooltip').tooltip({trigger: 'manual'}).tooltip('show');

// Discourse box
    $(document).scroll(function(){
        if ($('#floating-group').isOnScreen()) {
            // The element is visible, do something
            $('#floating-group').removeClass('hidden-start');
            $('#discourse-box').addClass('discourse-visible');
            $('.discourse-trigger > span').removeClass('fa-caret-left');
            $('.discourse-trigger > span').addClass('fa-caret-right');
        } else {
            // The element is NOT visible, do something else
        }
    });


$('.dropdown-toggle').dropdown();

// Image change on hover:
    $('.people-card').mouseenter(function(){
        const bi = $(this).css("background-image")
        const ho = bi.replace("_main", "_hover")
        $(this).css("background-image", ho)
    })
    $('.people-card').mouseleave(function(){
        const ho = $(this).css("background-image")
        const bi = ho.replace("_hover", "_main")
        $(this).css("background-image", bi)
    })

// Force style change with Jquery for Google Search
$('.gsc-input').attr('placeholder', 'CCV Search')
$('#___gcse_0').css('width', '100%')
$('.gsc-search-button').css('border', '0')
$('.gsc-search-button').css('background-color', '#EFECE5')
$('.gsc-input').css('border', '0')
$('.gsc-control-cse').css('border', '0')
$('.gsc-control-cse').css('background-color', 'transparent')
$('.gsc-control-cse').css('padding', '0')
$('.gsc-input').css('background-color', 'white')
$('.gsc-input').css('padding', '0')
$('.gsc-input').css('font-size', '2rem')
$('.gsc-input').css('margin-bottom', '0')
$('.gsc-input-box').css('border-color', 'white')
$('.gsib_a').css('border', 0)
$('.gsib_b').css('border', 0)
$('.gsc-search-button svg').attr('height', '40')
$('.gsc-search-button svg').attr('width', '40')

$('.nav-search .gsc-search-button').css('background-color', 'transparent')
$('.nav-search .gsc-search-button').css('padding', '0')
$('.nav-search .gsc-search-button svg').attr('height', '20')
$('.nav-search .gsc-search-button svg').attr('width', '20')
$('.nav-search .gsib_b').css('display', 'none')
$('.nav_search .gsib_a').css('padding', '0')
$('.nav-search .gsc-input').css('width', '8rem')
$('.nav-search #gsc-i-id2').css('border-bottom', '1px solid #00B398')


});
