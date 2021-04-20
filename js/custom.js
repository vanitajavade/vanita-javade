$(document).ready(function(){

  AOS.init({
    duration: 1500,
  });
    $(".front_page .down_arrow").click(function(){
        $(".front_page").slideUp(1000);
        $(".main").show(200);
    });
});
$('.front_page .down_arrow').on('click',function(){
  window.setTimeout(function(){
    $('body').addClass('slidup');
  }, 1200);
});


    (function($){
      $(window).on("load",function(){
        $(".sidebar li a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
          highlightSelector:"#navigation-menu a"
        });
        $("a[rel='next']").click(function(e){
          e.preventDefault();
          var to=$(this).parent().parent("section").next().attr("id");
          $.mPageScroll2id("scrollTo",to);
        });
        
      });
    })(jQuery);

    