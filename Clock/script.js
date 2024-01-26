let degree = 0;
let second = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let clock = new Date();
setInterval(function () {
  degree += 6;
  second.style.transform = `translateY(-50%) rotate(${degree}deg)`;
  minutes.style.transform = `translateY(-50%) rotate(${
    clock.getMinutes() * 6 + degree / 60
  }deg`;
  hours.style.transform = `translateY()-50% rotate(${
    clock.getHours() * 6 + degree / 60
  }deg)`;
}, 1000);
