function findWeekDay() {
  let day = Number(document.getElementById("dayInput").value);
  let result = document.getElementById("result");

  switch (day) {
    case 1:
      result.innerHTML = "Today is Sunday";
      break;

    case 2:
      result.innerHTML = "Today is Monday";
      break;

    case 3:
      result.innerHTML = "Today is Tuesday";
      break;

    case 4:
      result.innerHTML = "Today is Wednesday";
      break;

    case 5:
      result.innerHTML = "Today is Thursday";
      break;

    case 6:
      result.innerHTML = "Today is Friday";
      break;

    case 7:
      result.innerHTML = "Today is Saturday";
      break;

    default:
      result.innerHTML = "Invalid day number. Please enter a number from 1 to 7.";
  }
}

function clearResult() {
  document.getElementById("dayInput").value = "";
  document.getElementById("result").innerHTML = "";
}

document.getElementById("dayInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    findWeekDay();
  }
});