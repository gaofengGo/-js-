var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar() // 1

/* 
  js是词法作用域(静态作用域)，函数作用域在定义的时候就已经确定了，所以value为1
  如果是动态作用域，函数的作用域就是在调用的时候确定，value就为2
*/