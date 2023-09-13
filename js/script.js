const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const miliSecondsEL = document.querySelector("#miliSeconds");
const StartBtn = document.querySelector("#StartBtn");
const StopBtn = document.querySelector("#StopBtn");
const ResumeBtn = document.querySelector("#ResumeBtn");
const ResetBtn = document.querySelector("#ResetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let IsPaused = false;

StartBtn.addEventListener("click", StartTimer);
StopBtn.addEventListener("click", pauseTimer);
ResumeBtn.addEventListener("click", resumeTimer);
ResetBtn.addEventListener("click", resetTimer);

function StartTimer() {
   interval = setInterval(() => {
      if (!IsPaused) {
         miliSeconds += 10;

         if (miliSeconds === 1000) {
            seconds++;
            miliSeconds = 0;
         }

         if (seconds === 60) {
            minutes++;
            seconds = 0;
         }

         minutesEl.textContent = formatTimer(minutes);
         secondsEl.textContent = formatTimer(seconds);
         miliSecondsEL.textContent = formatMiliSeconds(miliSeconds);
      }
   }, 10);

   StartBtn.style.display = "none";
   StopBtn.style.display = "block";
}

function pauseTimer() {
   IsPaused = true;
   StopBtn.style.display = "none";
   ResumeBtn.style.display = "block";
}

function resumeTimer() {
   IsPaused = false;
   StopBtn.style.display = "block";
   ResumeBtn.style.display = "none";
}

function resetTimer() {
   clearInterval(interval);
   IsPaused = false;
   minutes = 0;
   seconds = 0;
   miliSeconds = 0;

   miliSecondsEL.textContent = "00";
   secondsEl.textContent = "00";
   miliSecondsEL.textContent = "000";

   StartBtn.style.display = "block";
   StopBtn.style.display = "none";
   ResumeBtn.style.display = "none";
}

function formatTimer(time) {
   return time < 10 ? `0${time}` : time;
}

function formatMiliSeconds(time) {
   return time < 100 ? `${time}`.padStart(3, "0") : time;
}
