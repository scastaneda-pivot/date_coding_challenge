import "./styles.css";

document.getElementById("age-button").addEventListener("click", function () {
  /* 
  1. Create a variable that stores the current date and subtracts it from a new random date using the date contructor
  
  2. Create a new variable that takes the variable from above and passes it in as an argument with the new Date contructor

  3. Create a new variable called 'age' that takes the above variable then:
   a) Uses a method on the variable create in the previous step to convert it into full year format 
   b) Subtracts the result from 1970
   c) Uses a Math method to convert the result into an absolute number
  */

  document.getElementById("age-display").innerHTML = age;
});
