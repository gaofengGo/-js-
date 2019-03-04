function Person() {

};
var person = new Person();
person.name = "GaoFeng";
console.log(person.name); // "GaoFeng"
/*
  Person 构造函数
  Person.prototype 实例原型
  person 实例对象
*/
console.log(Person.prototype === person.__proto__); // true
console.log(Person.prototype.constructor === Person) // true
// 一个es5的方法，可以获得对象的原型
console.log(object.getPrototypeOf(person) === Person.prototype) // true

// 原型的原型是Object的原型对象，
// Object.prototype.__proto__ 是原型链的顶层 为null 即此处不应该有值
// 原型链即是 person.__proto__.__proto__ ....


// 函数的prototype属性指向原型，说prototype是原型略显不严谨，原型链通过__proto__链接起来，这个是可以的。