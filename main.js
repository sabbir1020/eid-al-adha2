const eidAlAdha  = "10 july 2022";
const daysDiv = document.getElementById("days")
const hoursDiv = document.getElementById("hours")
const minsDiv = document.getElementById("mins")
const secondDiv = document.getElementById("second")

function conuntdown(){
 const eidDay = new Date(eidAlAdha);
 const currentday = new Date()
  const totalTime =  (eidDay - currentday)/1000;

  const days = Math.floor (totalTime / 3600/24);
  const hours = Math.floor( totalTime / 3600 )% 24;
  const mins = Math.floor( totalTime/60) % 60;
  const second = Math.floor( totalTime) % 60;

  daysDiv.innerText = days
  hoursDiv.innerText = hours;
  minsDiv.innerText = mins;
  secondDiv.innerText = second;
//  console.log(days,hours)
}
conuntdown()
setInterval (conuntdown, 1000)