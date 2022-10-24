let d = new Date();

function timer(){
  let time = d.toLocaleTimeString();
  console.log(time);
}

const time = setInterval(timer,1000);
