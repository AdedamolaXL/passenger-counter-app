//document.getElementById assigns the html id attribute to variables saveEl, countEl
//this DOM displays the results of the mathematical operations within the functions

//the count variable initiialized as zero represents the passenger count entering the station

//increment() executes the increase in passenger count
//save() executes the storage of each counter value
//the counter variable equated to the count variable receives the exact passenger count which is useful if you want to know how many passengers entered the station per day for example
  //countEl.textContent = 0 resets the passenger count value to zero, this allows a fresh passenger count 

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}


function save() {
  let counter = count + ' - '
  saveEl.textContent += counter

  countEl.textContent = 0
  count = 0
}
