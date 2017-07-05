// 1. 得到画布 DOM 容器
var $canvas = $('#canvas')

// 2. 实例化食物对象，生成 DOM 渲染渲染到画布中
var food = new Food()
food.render($canvas)

// 3. 实例化蛇对象，生成 DOM 元素渲染到画布中
var snake = new Snake()
snake.render($canvas);

var isstarted=false;
$('#btn_start').on('click', function (e) {
  if(isstarted){
    return
  }
  isstarted=true;
  var time=$('#mode').val();
  //开启定时器
  setInterval(function () {
    snake.move(food,$canvas)
    snake.remove()
    snake.render($canvas)
  },time)
})

document.addEventListener('keydown',function(e){
  var keycode= e.keyCode;
  switch (keycode){
    case 37:
      snake.direct='left'
      break;
    case 38:
      snake.direct='up'
      break;
    case 39:
      snake.direct='right'
      break;
    case 40:
      snake.direct='down'
      break;
  }
})
