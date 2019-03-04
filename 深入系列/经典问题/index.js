// 一：一个函数产生的多个闭包，每个闭包之间的值相互独立

//第一步
var t = function () {
  let n = 99;
  return function () {
    n++;
    console.log(n);
  }
}
var t1 = t(); 
var t2 = t();
t1(); //100
t1(); //101
t2(); //100
t2(); //101
// n都是从99开始的， t1()中的n与t2()的n是2个独立的值

// 第二步

var nAdd;
var a = function () {
  var n = 99;
  nAdd = function () {
    n++
  };
  return function() {
    console.log(n);
  }
}
var a1 = a();
var a2 = a();

nAdd();
a1();  //99
a2();  //100

// 道理同上，a1与a2中的n是相互独立，而执行的nAdd()，
// 因为a()执行了2遍，都令nAdd = function() {n++}
// var a2 = a() 中的赋值覆盖了a1中的，所以nAdd()执行改变的是a2中的n