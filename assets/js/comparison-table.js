
$(document).ready(function () {
    comparisonTable(".server2-con .comparison-table ul li.active");
  
    // DIRTY Responsive pricing table JS
    $(".server2-con .comparison-table ul").on("click", "li", function () {
      comparisonTable(this);
  
      $('.server2-con .comparison-table ul li').removeClass('active');
      $(this).addClass('active');
    });
    // Initialize the media query
    var mediaQuery = window.matchMedia('(max-width: 992px)');
    // Add a listen event
    mediaQuery.addListener(doSomething);
    // On load
    doSomething(mediaQuery);
  });
  
  // Function to do something with the media query
  function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
      $('.sep').attr('colspan', 4);
    } else {
      $('.sep').attr('colspan', 4);
    }
  }
  
  function comparisonTable(el) {
    if ($('.server2-con .comparison-table').length) {
      var width = $(document).width();
  
      if (width >= 992) {
        // $('.new-windows-tables-btn td:eq(0)').attr('colspan', 4);
        $('.server2-con .comparison-table table tr td').removeAttr('style');
        $('.new-windows-tables-btn td:not(:eq(0))').attr('style', 'display: none !important');
      } else {
        // $('.new-windows-tables-btn td:eq(0)').removeAttr('colspan');
  
        var pos = $(el).index() + 1;
        $.each($('.server2-con .comparison-table tbody tr td'), function (index, elem) {
          if ($(this).index() == pos || $(this).index() == 0) {
            $(this).attr('style', 'display: table-cell !important');
          } else {
            $(this).attr('style', 'display: none !important');
          }
        });
      }
    }
  }
  
  $(window).on('resize', function () {
    comparisonTable(".server2-con .comparison-table ul li.active");
  });
  
  // 
  $(document).ready(function () {
    function toggleButton() {
      if ($(window).width() <= 991) {
        $('.hide-button').show(); // Show the button for screens 991px or less
      } else {
        $('.hide-button').hide(); // Hide the button for larger screens
      }
    }
  
    // Initial check
    toggleButton();
  
    // Check on window resize
    $(window).resize(function () {
      toggleButton();
    });
  });
  