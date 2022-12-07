const shoe = document.getElementById('shoe_size');
const birth = document.getElementById('year');

document.getElementById('validate').addEventListener('click', function () {
    const validate = (shoe.value * 2 + 5) * 50 - birth.value + 1766;
    alert (`The result is ${validate}`);
  });
