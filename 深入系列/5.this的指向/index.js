var obj = {
  a: 1,
  b: function() {
    console.log(this);
  }
};
// 1.作为对象调用
obj.b()  
// this指向对象 obj

// 2.作为函数调用
var b = obj.b;
b()
// this指向window

// 3.作为构造函数调用
var b = new Fun()
// 此时指向当前实例对象

// 4.apply和call调用
obj.b.apply(object, [])
// this指向当前的object