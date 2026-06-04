function checkGrade() {
  let grade = document.getElementById("gradeInput").value.toUpperCase();
  let result = document.getElementById("result");

  switch (grade) {
    case "A":
      result.innerHTML = "Excellent!";
      break;
    case "B":
      result.innerHTML = "Good!";
      break;
    case "C":
      result.innerHTML = "Average performance";
      break;
    case "D":
      result.innerHTML = "Below average";
      break;
    case "F":
      result.innerHTML = "Fail";
      break;
    default:
      result.innerHTML = "Invalid grade entered";
  }
}