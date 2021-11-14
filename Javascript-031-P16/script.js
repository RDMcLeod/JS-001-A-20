const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate) * 1000;

  const days = seconds / 3600 / 24;

  console.log(newYearsDate - currentDate);
}

//Initial Call
setInterval(countdown, 1000);
countdown();
