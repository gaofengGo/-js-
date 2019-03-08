//  https://github.com/zhangxinxu/quiz/issues/8

let arr = [0,1,2,3,4,5];
// 往前移
function one(i, arr) {
  [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
  console.log(arr);
}
// 移动到最前面
function two(i, arr) {
  arr.unshift(arr.splice(i, 1));
  console.log(arr);
}
// 移动到最后面
function three(i, arr) {
  arr.push(arr.splice(i, 1));
  console.log(arr);
}

function four(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
  console.log(arr);
}

// one(2, arr);
// two(2, arr);
// three(3, arr);
// four(2,4, arr);