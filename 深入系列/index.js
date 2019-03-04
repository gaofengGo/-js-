let data = {
  winAll : 24,
  loseAll : 11,
  winVampire : 13,
  loseVampire : 4,
  winJess : 6,
  loseJess : 2,
  winSaien: 0,
  loseSaien: 3,
  winEjt: 1,
  loseEjt: 1
} 

function func(data){
  let hero = [];
  for (let item in data) {
    let number = item.includes("win")
    if( number ) {
      hero.push(item.split("win")[1]);
    }
  }
  // console.log(hero)
  let datanew = {};
  let other = {
    win: data.winAll*2,
    lose: data.loseAll*2,
  }
  for (let i of hero) {
    datanew[i] = {
      win: data["win" + i],
      lose: data["lose" + i],
      odds: (data["win" + i]/(data["win" + i] + data["lose" + i])*100).toFixed() + "%"
    }
    other.win = other.win - data["win" + i];
    other.lose = other.lose - data["lose" + i];
  }

  datanew.other = {
    win: other.win,
    lose:other.lose,
    odds: (other.win / (other.win+other.lose)*100).toFixed() + "%"
  }
  return datanew
}
func(data);
console.log(func(data))
var other =  
  `
  jqrWin 
  stoneWin
  kuangzWin
  debWin
  ejtWin
  bingnvLose
  SaienLose 3
  ejtLose
  `;