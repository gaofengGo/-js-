// 有以下三个判断数组的方法，请分别介绍它们之间的区别和优劣

// 1️⃣
Object.prototype.toString.call()   // [object, Undefined]
// toString 方法只有Object类型的对象调用时才会返回 [object, type],
// 其他类型对象直接调用toString方法，会直接返回内容的字符串；所以需要借助call或者apply方法来改变toString的执行上下文

// 2️⃣
[1] instanceof Array // true

//备注： instanceof 与 typeof的区别
/*
  instanceof 
*/

// 有大，中，小三个酒桶，分别梦装19斤，13斤和7斤酒。现在大桶空着，另外两个桶都装满了酒。 
// 试问：用这三个酒桶倒几次可以把全部酒平均分成两份？ 
/*
  0 13 7
  7 13 0
  19 1 0
  12 1 7
  12 8 0
  5 8 7
  5 13 2
  18 0 2
  18 2 0
  11 2 7
  11 9 0
  4 9 7
  4 13 3
  17 0 3
  17 3 0
  10 3 7
  10 10 0
*/
function A(a) {
  var age = a;
  A.prototype.getAge = function() {
    return age;
  }
  A.prototype.setAge = function(num) {
    age = num;
  }
  this.selfGetAge = function() {
    return age;
  }
  this.selfSetAge = function(num) {
    age = num;
  } 
}
var a1 = new A(50);
var a2 = new A(25);
console.log(a1.getAge())  // 50    25
console.log(a2.getAge())  // 25
console.log(a1.selfGetAge())  // 50
console.log(a2.selfGetAge())  // 25
a1.setAge(24);
a1.selfSetAge(20);
a2.setAge(22);
console.log(a1.getAge())  // 20  22
console.log(a2.getAge())  // 22
console.log(a1.selfGetAge())  // 20
console.log(a2.selfGetAge())  // 22
console.log(a1);
console.log(a2)
function Name(a) {
  // var name = a;
  this.name = a;
  Name.prototype.get = function() {
    console.log(this.name)
  }
}
var name1 = new Name("高枫");
var name2 = new Name("峰高")
name1.get();
name2.get();