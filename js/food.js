/**
 * 思路：分析食物的属性及行为抽象出具体的构造函数
 * 1. 在构造函数中初始化食物的属性数据
 * 2. 在构造函数的原型对象中初始化行为方法
 */
function Food(){
  //给食物设置背景颜色v v
  PixelBlock.call(this)
  this.backgroundColor='pink';
}
//Food.prototype=new PixelBlock();
//拷贝继承 _.extend把后面的所有属性覆盖到前面
_.extend(Food.prototype,PixelBlock.prototype)
Food.prototype.render=function($canvas){
  this.$doms=[];
  //随机的top值  _.random 随机
  //因为蛇吃食物的时候要一口吞下，所以每次运动要走一个食物的宽度
  //top值为：(屏幕的高度/食物的高度-1）*食物的高度
  //随机数在0,580之间（屏幕的高度600）$canvas是获取到的屏幕的元素
  this.top= _.random(0,($canvas.height()/this.height-1))*this.height;
  this.left= _.random(0,($canvas.width()/this.width-1))*this.width;
  var $div=$('<div></div>');
  //将div放进数组里
  this.$doms.push($div)
  $div.css({
    width:this.width,
    height:this.height,
    backgroundColor:this.backgroundColor,
    position:this.position,
    top:this.top,
    left:this.left
  })
  //添加到屏幕内
  $canvas.append($div);
}
////下次随机的时候，需要把上次随机出现的食物删除
//Food.prototype.remove= function () {
//  this.$this.remove();
//}
