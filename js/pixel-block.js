/**
 * Created by 0.0 on 2017/6/16.
 */
function PixelBlock(){
  //给食物设置宽度  这里不能加px
  this.width=20;
  //给食物设置高度
  this.height=20;
  //给食物设置随机的定位
  this.position='absolute';
  //top值初始化
  this.top=0;
  this.left=0;
  //
  this.$doms=[];
}
PixelBlock.prototype.render = function () {}
PixelBlock.prototype.remove = function () {
  this.$doms.forEach(function ($item) {
    $item.remove()
  })
}
