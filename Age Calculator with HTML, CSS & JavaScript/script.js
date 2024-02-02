let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
var today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString("en-US")}`;

CalcAge.addEventListener("click", () => {
  var brithDate = new Date(dateOfBirth.value);
  var age = today.getFullYear() - brithDate.getFullYear();
  var m = today.getMonth() - brithDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < brithDate.getDate())) {
    age = age - 1;
  }
  displayAge.style.visibility = "visible";
  Age.innerText = `You are ${age} years old.`;
});
