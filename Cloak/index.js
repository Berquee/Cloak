const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hour = document.querySelector(".hours");

function tiktak() {
  let second = new Date().getSeconds();
  let minute = new Date().getMinutes();
  let hourValue = new Date().getHours() % 12;

  sec.style.transform = `rotate(${180 + second * 6}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  hour.style.transform = `rotate(${180 + hourValue * 30}deg)`;

  console.log(second, minute, hourValue);
}

setInterval(tiktak, 1000);











