/**
 * 思路：分析蛇的属性及行为抽象出具体的构造函数
 * 1. 在构造函数中初始化蛇的属性数据
 * 2. 在构造函数的原型对象中初始化蛇的行为方法
 */

/**
 * Snake 构造器：用来创建管理蛇对象
 */

function Snake(){
  PixelBlock.call(this)
  //头部颜色
  this.headColor='plum';
  //身体的颜色
  this.bodyColor='aqua';
  //设置身体的定位和颜色
  this.body=[
    [1,2,this.bodyColor],
    [2,2,this.bodyColor],
    [3,2,this.headColor]
  ]
  //设置默认走的方向
  this.direct='right';
}
//Snake.prototype=new PixelBlock();
_.extend(Snake.prototype, PixelBlock.prototype)
Snake.prototype.render=function($canvas) {
  //先在这里放一个空的数组，一会遍历完了放每一个蛇的像素块
  this.$doms = [];
  this.body.forEach(function (item) {
    var $div = $('<div></div>');
    this.$doms.push($div);
    $div.css({
      width: this.width,
      height: this.height,
      //背景颜色为数组中索引为2 的设置的颜色
      backgroundColor: item[2],
      position: this.position,
      top: item[1] * this.height,
      left: item[0] * this.width
    })
    $canvas.append($div)
  }.bind(this))
}

  //删除
Snake.prototype.move= function (food,$canvas) {
  for (var i = 0; i <this.body.length-1; i++) {
    //遍历数组，让除蛇头外的像素块，让前面的left改变为后面的left，top也一样
    this.body[i][0]=this.body[i+1][0];
    this.body[i][1]=this.body[i+1][1]
  }
  //再根据方向判断他们的坐标
  switch (this.direct){
    case 'right':
      //如果往右走就让他们的left值+1
      _.last(this.body)[0]+=1;
      break;
    case 'left':
      //如果往左走就让他们的left值-1
      _.last(this.body)[0]-=1;
      break;
    case 'down':
      //如果往下走就让他们的top值+1
      _.last(this.body)[1]+=1;
      break;
    case 'up':
      //如果往上走就让他们的top-1
      _.last(this.body)[1]-=1;
      break;
  }


  var headLeft= _.last(this.body)[0]*this.width;
  var headTop= _.last(this.body)[1]*this.height;
  if(headLeft===food.left && headTop===food.top){
    var first= _.first(this.body);
    this.body.unshift([first[0],first[1],first[2]])
    food.remove()
    food.render($canvas)
  }
}
