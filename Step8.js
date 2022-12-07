const age = document.getElementById('age');

document.getElementById('validate').addEventListener('click', function () {
if (age.value>=18)
  {
   alert ("You are above 18");
  }
else
  {
   alert ("You are under 18");
  }
});