var intervalId = null;
var n = 0;
// var classItem = ['prev','current','next']
var imgItem = $('.images').find('img')
var btnItems = $('.items').find('span')

function which(index) {
  return Math.abs(index) % imgItem.length
}

function slide(){
  imgItem.eq(which(n-1)).removeClass("current next").addClass("prev")
  imgItem.eq(which(n)).removeClass("prev next").addClass("current")
  imgItem.eq(which(n+1)).removeClass("prev current").addClass("next")
  btnItems.eq(which(n)).addClass('active').siblings().removeClass('active')
}

slide();
// 事件
$("#prev").click(() => {
  slide()
  n--
});
$('#next').click(() => {
  slide()
  n++
});
$(".items > span").click(() => {
  var idx = $(this).index()
  n = idx
  slide();
  n++
});

$(".warp").mouseenter(() => {
  clearInterval(intervalId);
});
$(".warp").mouseleave(() => {
  intervalId = intervalSlide();
});

window.onbeforeunload = function(){
  clearInterval(intervalId);
  return 1;
}

// 循环播放
function intervalSlide() {
  return setInterval(() => {
    slide();
    n++
    console.log(n)
  }, 1000);
}
intervalId = intervalSlide();





