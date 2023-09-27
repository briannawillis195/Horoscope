document.querySelector('#check').addEventListener('click', check);

function check() {
  // Variables listed here
  let d = Number(document.querySelector('#day').value);
  let m = document.querySelector('#month').value.toLowerCase();

  // Conditionals go here
  if (d >= 21 && d <= 31 && m === 'march') {
    document.querySelector('#placeToSee').innerText = 'Aries';
  } else if (d >= 1 && d <= 19 && m === 'april') {
    document.querySelector('#placeToSee').innerText = 'Aries';
  } else if (d >= 20 && d <= 30 && m === 'april') {
    document.querySelector('#placeToSee').innerText = 'Taurus';
  } else if (d >= 1 && d <= 20 && m === 'may') {
    document.querySelector('#placeToSee').innerText = 'Taurus';
  } else if (d >= 21 && d <= 31 && m === 'may'){
    document.querySelector('#placeToSee').innerText = 'Gemini'
  } else if (d >= 1 && d <= 20 && m === 'june'){
    document.querySelector('#placeToSee').innerText = 'Gemini'
  } else if (d >= 21 && d <= 30 && m === 'june'){
    document.querySelector('#placeToSee').innerText = 'Cancer'
  } else if (d >= 1 && d <= 22 && m === 'july'){
    document.querySelector('#placeToSee').innerText = 'Cancer'
  } else if (d >= 23 && d <= 31 && m === 'july'){
    document.querySelector('#placeToSee').innerText = 'Leo'
  } else if (d >= 1 && d <= 22 && m === 'august'){
    document.querySelector('#placeToSee').innerText = 'Leo'
  } else if (d >= 23 && d <= 31 && m === 'august'){
    document.querySelector('#placeToSee').innerText = 'Virgo'
  } else if (d >= 1 && d <= 22 && m === 'september'){
    document.querySelector('#placeToSee').innerText = 'Virgo'
  } else if (d >= 23 && d <= 30 && m === 'september'){
    document.querySelector('#placeToSee').innerText = 'Libra'
  } else if (d >= 1 && d <= 22 && m === 'october'){
    document.querySelector.apply('#placeToSee').innerText = 'Libra'
  } else if (d >= 23 && d <= 31 && m === 'october'){
    document.querySelector('#placeToSee').innerText = 'Scorpio'
  } else if (d >= 1 && d <= 21 && m === 'november'){
    document.querySelector('#placeToSee').innerText = 'Scorpio'
  } else if (d >= 22 && d <= 30 && m === 'november'){
    document.querySelector('#placeToSee').innerText = 'Sagittarius'
  } else if (d >= 1 && d <= 21 && m === 'december'){
    document.querySelector('#placeToSee').innerText = 'Sagittarius'
  } else if (d >= 22 && d <= 31 && m === 'december'){
    document.querySelector('#placeToSee').innerText = 'Capricorn'
  } else if (d >= 1 && d <= 19 && m === 'january'){
    document.querySelector('#placeToSee').innerText = 'Capricorn'
  } else if (d >= 20 && d <= 31 && m === 'january'){
    document.querySelector('#placeToSee').innerText = 'Aquarius'
  } else if (d >= 1 && d <= 18 && m === 'february'){
    document.querySelector('#placeToSee').innerText = 'Aquarius'
  } else if (d >= 19 && d <= 29 && m === 'february'){
    document.querySelector('#placeToSee').innerText = 'Pisces'
  }else if (d >= 1 && d <= 20 && m === 'march'){
    document.querySelector('#placeToSee').innerText = 'Pisces'
  }else {
    document.querySelector('#placeToSee').innerText = 'Enter a real day of the year, silly!'
  }
}




//create event listener for check button
//create a function for the check button
//define variables for day and month
// create conditionals for each zodiac sign ex) if(day == 2 && month === 'january')
