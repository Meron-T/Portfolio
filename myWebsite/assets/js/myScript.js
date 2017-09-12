var cnt=0, texts=[];

// save the texts in an array for re-use
$(".textContent").each(function() {
  texts[cnt++]=$(this).text();
});
function slide() {
  if (cnt>=texts.length) cnt=0;
  $('#textMessage').html(texts[cnt++]);
  $('#textMessage')
    .fadeIn('slow').animate({opacity: 1.0}, 5000).fadeOut('slow', 
     function() {
       return slide()
     }
  );      
}      
slide()


$(".myDiv").hover(function(){
    $(this).addClass('animated ' + $(this).data('action'));
});
$(".myDiv").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animated ' + $(this).data('action'));
});
