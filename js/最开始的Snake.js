/**
 * Created by 0.0 on 2017/6/16.
 */
/**
 * 思路：分析蛇的属性及行为抽象出具体的构造函数
 * 1. 在构造函数中初始化蛇的属性数据
 * 2. 在构造函数的原型对象中初始化蛇的行为方法
 */

/**
 * Snake 构造器：用来创建管理蛇对象
 */

function Snake(){
  this.width=20;
  this.height=20;
  //打开游戏是默认有三块
  this.size=3;
  //头部颜色
  this.headColor='plum';
  //身体的颜色
  this.bodyColor='aqua';
  //定位
  this.position='absolute';
  //top值 默认上面有两个自己的高度
  this.top=this.height*2;
  //left  默认距左边有一个自己的宽度值
  this.left=this.width*1;
}
Snake.prototype.render=function(){
  //先在这里放一个空的数组，一会遍历完了放每一个蛇的像素块
  var $items=[];
  for (var i = 0; i <this.size; i++) {
    //设置一个像素块的样式
    var $item=$('<div></div>').css({
      width:this.width,
      height:this.height,
      backgroundColor:this.bodyColor,
      position:this.position,
      top:this.top,
      //让每一像素块依次的递增往左移一点
      left:(i+1)*this.left
    })
    //将像素块放到刚才事先申明的数组里；
    $items.push($item);
  }
  //给最后一块像素块设置颜色，其实也就是蛇头的颜色
  //_.last 最后一个元素
  _.last($items).css({
    backgroundColor:this.headColor
  })
  //循环数组将每一像素块放到游戏区域上
  $items.forEach(function ($item) {
    $canvas.append($item);
  })
}
