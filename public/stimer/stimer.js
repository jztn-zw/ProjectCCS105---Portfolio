// STOPWATCH VARIABLES
var stopwatchInterval = null;
var stopwatchTime = 0;
var stopwatchRunning = false;

// TIMER VARIABLES
var timerInterval = null;
var timerTime = 0;
var timerRunning = false;

// GET STOPWATCH ELEMENTS
var stopwatchDisplay = document.getElementById('stopwatchDisplay');
var stopwatchMs = document.getElementById('stopwatchMs');
var startStopwatchBtn = document.getElementById('startStopwatch');
var stopStopwatchBtn = document.getElementById('stopStopwatch');
var resetStopwatchBtn = document.getElementById('resetStopwatch');


// STOPWATCH FUNCTIONS

// Add zero to single digit numbers
function addZero(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

// Update stopwatch display
function updateStopwatch() {
    var totalSeconds = Math.floor(stopwatchTime / 1000);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;
    var milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    
    stopwatchDisplay.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
    stopwatchMs.textContent = addZero(milliseconds);
}

// Start stopwatch
function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        var startTime = Date.now() - stopwatchTime;
        
        stopwatchInterval = setInterval(function() {
            stopwatchTime = Date.now() - startTime;
            updateStopwatch();
        }, 10);
        
        startStopwatchBtn.disabled = true;
        stopStopwatchBtn.disabled = false;
    }
}

// Stop stopwatch
function stopStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        
        startStopwatchBtn.disabled = false;
        stopStopwatchBtn.disabled = true;
    }
}

// Reset stopwatch
function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    updateStopwatch();
    
    startStopwatchBtn.disabled = false;
    stopStopwatchBtn.disabled = true;
}

// GET TIMER ELEMENTS
var timerDisplay = document.getElementById('timerDisplay');
var hoursInput = document.getElementById('hoursInput');
var minutesInput = document.getElementById('minutesInput');
var secondsInput = document.getElementById('secondsInput');
var startTimerBtn = document.getElementById('startTimer');
var stopTimerBtn = document.getElementById('stopTimer');
var resetTimerBtn = document.getElementById('resetTimer');

// TIMER FUNCTIONS

// Update timer display
function updateTimer() {
    var hours = Math.floor(timerTime / 3600);
    var minutes = Math.floor((timerTime % 3600) / 60);
    var seconds = timerTime % 60;
    
    timerDisplay.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

// Start timer
function startTimer() {
    if (!timerRunning) {
        // Get input values if timer is at 0
        if (timerTime === 0) {
            var hours = parseInt(hoursInput.value) || 0;
            var minutes = parseInt(minutesInput.value) || 0;
            var seconds = parseInt(secondsInput.value) || 0;
            
            timerTime = (hours * 3600) + (minutes * 60) + seconds;
            
            if (timerTime === 0) {
                alert('Please set a time first!');
                return;
            }
        }
        
        timerRunning = true;
        
        timerInterval = setInterval(function() {
            timerTime--;
            updateTimer();
            
            if (timerTime <= 0) {
                stopTimer();
                alert('Time is up!');
                resetTimer();
            }
        }, 1000);
        
        hoursInput.disabled = true;
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        startTimerBtn.disabled = true;
        stopTimerBtn.disabled = false;
    }
}

// Stop timer
function stopTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
        
        startTimerBtn.disabled = false;
        stopTimerBtn.disabled = true;
    }
}

// Reset timer
function resetTimer() {
    stopTimer();
    timerTime = 0;
    updateTimer();
    
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    
    startTimerBtn.disabled = false;
    stopTimerBtn.disabled = true;
}

// ADD EVENT LISTENERS
startStopwatchBtn.addEventListener('click', startStopwatch);
stopStopwatchBtn.addEventListener('click', stopStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);
resetTimerBtn.addEventListener('click', resetTimer);

// INITIALIZE
updateStopwatch();
updateTimer();