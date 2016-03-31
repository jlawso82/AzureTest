$(document).ready(function(){      
var ht= $("img").height(),      
wd=$("img").width(),      
mult=3.5; //change to the no. of times you want to increase your image 
      //size.
$("img").on('mouseenter', function(){
$(this).animate({height: ht*mult,
                 width: wd*mult}, 500);
});
$("img").on('mouseleave', function(){
$(this).animate({height: ht,
                 width: wd}, 500);
})
});