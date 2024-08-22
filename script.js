//your JS code here. If required.
// Function to update the timer with the current date and time
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const currentDate = new Date();
    timerElement.textContent = currentDate.toLocaleString();
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to display the time immediately on load
updateTimer();

