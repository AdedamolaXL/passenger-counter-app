let countEl = document.getElementById('count-el');  //countEl gets the 'count-el' element
let saveEl = document.getElementById('save-el');  //saveEl gets the 'save-el' element
let count = 0  //count is a variable storing the passenger count

//increment() executes the increase in passenger count whenever the Increment button is clicked
function increment() {
  count += 1 //counts the increase in passenger by a value of 1
  countEl.textContent = count  //displays the passenger count as text within the browser
}

//save() executes the storage of each counting sequence and then restarts all over again whenever the Save button is clicked
function save() {
  let counter = count + ' - ' //stores the value of the count variable as incremented
  saveEl.textContent += counter //saves the counter value and displays it as Previous entries within the browser

  countEl.textContent = 0 // resets the passenger count as shown in the browser to zero
  count = 0 //resets the count variable within js also to zero
}

