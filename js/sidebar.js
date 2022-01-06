
    $(".nav.nav-tabs li a").click(function(){
  $(".bg").css("background-image", "url('"+$(this).data("url")+"')");
});


$(function(){
    $('#fixednav ul li a').click(function(){
        $('#fixednav ul').find('li.active').removeClass('active');
        $(this).parent().addClass('active');

        return false; //return false to aviod scroll top.
    });
});
  

$(function() {
    $('ul a').click(function() {
      // Get the section to show
      var $section = $('#' + $(this).data('section'));
  
      // If its already visible, do nothing.
      // Otherwise, hide the others and then fade in the desired section.
      if (!$section.is(':visible')) {
        $('.hideable-section').hide();
        $section.fadeIn();
      }
    });
  });