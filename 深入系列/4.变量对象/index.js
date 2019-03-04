/*
   全局对象可以通过this引用；
   在客户端js中，全局对象就是window对象
  全局上下文中的变量对象就是全局对象！
*/
function foo() {
  console.log(a);
  a = 1;
}

foo(); // 报错，因为a前面没有var 声明，所以全局变量没有a

function bar() {
  a = 1;
  console.log(a);
}
bar(); // 打印1， 全局声明了a