var count = 1
var isRoll = true
var w = $('.warp').width()
var len = $('.items span').length
$(".images").css("transition",'none');

$('#next').on('click',function(){
  nextImg()
})

function nextImg(){
  
  if(count >= len){
    count = 0
  }
  $(".images").css("transition",'transform 0.5s');
  $('.images').css('transform','translateX('+ -Math.abs(w*count) +'px)')
  
  count++;
}


/*
初始化      -500  0
点击1次：   -1000 1
点击2次：   -1500 2
点击3次：   -2000 3

*/ 
