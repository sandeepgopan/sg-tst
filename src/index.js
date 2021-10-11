import "./styles.css";
var myAge = document.querySelector("#my-Age");
var btnAge = document.querySelector("#btn-Age");
var ageEligibilty = document.querySelector("#age-Eligibilty");
btnAge.addEventListener("click", () => {
  var ageForCal = myAge.value;
  var reqAge = 18;
  if (ageForCal >= reqAge) {
    document.querySelector("#age-Eligibilty").innerHTML = " You are eligible";
  } else {
    var moreAge = reqAge - ageForCal;
    document.querySelector("#age-Eligibilty").innerHTML =
      " You are not eligible" + moreAge + "more required";
  }
});
