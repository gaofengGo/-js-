// 执行上下文产生的闭包问题
var t = function() {
  var n = 99;
  var t2 = function t() {

  }
}

// 函数防抖  在1s内
function debounce(fn, time) {
  let timeout;
  return function () {
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn;
    }, time)
  }
}
var _debounce = debounce(() => {
  console.log(11)
}, 1000);

// 函数节流 1s内最多执行一遍
function throttle(fn, time) {
  let timeout,
      start = new Date();
  return function () {
    clearTimeout(timeout);
    let curr = new Date() - 0;
    if (curr - start >= time) {
      fn();
      start = curr;
    } else {
      // 让方法在脱离事件时再执行一遍
      timeout = setTimeout(() => {
        fn()
      }, time)
    }
  }
}
var _throttle = throttle(() => {
  console.log(22)
}, 1000);