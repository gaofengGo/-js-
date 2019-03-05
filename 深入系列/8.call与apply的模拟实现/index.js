// 一句话介绍call ：
//  call（） 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法

var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call(foo); // foo.value 1

// 模拟实现第一步
// 给foo 对象本身添加一个属性，执行后删除；

Function.prototype.call2 = function(context) {
  //首先要获取调用call的函数，用this可以获取
  context.fn() = this;
  context.fn();
  delete context.fn();
}

var args = [];
for (var i = 1, len = arguments.lenght; i< len; i ++) {
  args.push("arguments[" + i + "]")
}

// 模拟实现第二版
Function.prototype.call2 = function(context) {
  context.fn = this;
  var args = [];
  for (var i = 1, len =arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  eval("context.fn("  + args +")");
  delete context.fn;
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.call2(foo, "kevin", 18);

// 模拟实现第三步
// 1.this参数可以传null， 当为null的时候，视为指向window

var value = 1;
function bar() {
  console.log(this.value);
}
bar.call(null);

// 2.函数是可以有返回值的

var obj = {
  value: 1
}
function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age
  }
}

console.log(bar.call(obj, "kevin", 18));

// 第三版
Function.prototype.call2 = function(context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len ; i++) {
    args.push("arguments[" + args + "]");
  }

  var result = eval("context.fn(" + args + ")");

  delete context.fn;
  return result;
}

var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null);
console.log(bar.call2(obj, "kevin", 18));


// apply的模拟实现
Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" +  args + ")")
  }

  delete context.fn;
  return result;
}