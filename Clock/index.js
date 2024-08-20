const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const setDate =() => {
  const date  = new Date();

  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  const secToDeg = ((sec / 60) * 360 )+ 90;
  const minToDeg = ((min / 60) * 360) + 90;
  const hourToDeg =( (hour / 12) * 360 )+ 90

  secHand.style.transform = `rotate(${secToDeg}deg)`
  minHand.style.transform = `rotate(${minToDeg}deg)`
  hourHand.style.transform = `rotate(${hourToDeg}deg)`
}

setInterval(setDate,1000);