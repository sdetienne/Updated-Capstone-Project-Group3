
// Get the current date
//var currentDate = new Date();

// Get the current hour
//var currentHour = currentDate.getHours();

// Define the welcome message based on the hour
//var welcomeMessage;
//if (currentHour < 12) {
  //welcomeMessage = "Good morning!";
//} else if (currentHour < 18) {
 // welcomeMessage = "Good afternoon!";
//} else {
 // welcomeMessage = "Good evening!";
//}

function updateDateTime() {
  var now = new Date();
  var dateElement = document.getElementById('date');
  //var timeElement = document.getElementById('time');
  
  // Format the date
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = now.toLocaleDateString(undefined, options);
  
  // Format the time
  //var hours = now.getHours();
  //var minutes = now.getMinutes();
  //var seconds = now.getSeconds();
  //var formattedTime = hours + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
  
  // Update the content
  dateElement.textContent = formattedDate;
  //timeElement.textContent = formattedTime;
}

function addLeadingZero(number) {
  return (number < 10 ? "0" : "") + number;
}

// Update date and time every second
setInterval(updateDateTime, 1000);


const toggleSwitch = document.getElementById('toggle');
const titleElement = document.getElementById('title');
const contentElement = document.getElementById('content');

toggleSwitch.addEventListener('change', function(event) {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});