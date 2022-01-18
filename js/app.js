const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const degreeSeconds = now.getSeconds() * 6;

  const degreeMinutes = now.getMinutes() * 6;

  let degreeHours = now.getHours() * 30 + degreeMinutes / 2;
  degreeHours > 360 ? (degreeHours = degreeHours - 360) : degreeHours;

  secondHand.style.transform = `rotate(${degreeSeconds + 90}deg)`;
  minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;

  hourHand.style.transform = `rotate(${degreeHours}deg)`;

  console.log(degreeSeconds);
  console.log(degreeMinutes);
  console.log(degreeHours);
};

setInterval(setDate, 1000);
