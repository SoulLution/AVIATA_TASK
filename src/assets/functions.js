module.exports.getShortMonthName = date => {
  let result = new Date(date).getMonth()
  switch(result){
    case 0: result = 'янв'; break;
    case 1: result = 'фев'; break;
    case 2: result = 'мар'; break;
    case 3: result = 'апр'; break;
    case 4: result = 'май'; break;
    case 5: result = 'июн'; break;
    case 6: result = 'июл'; break;
    case 7: result = 'авг'; break;
    case 8: result = 'сен'; break;
    case 9: result = 'окт'; break;
    case 10: result = 'ноя'; break;
    case 11: result = 'дек'; break;
    default: result = 'Invalid Date';
  }
  return result
}
module.exports.getShortDayName = date => {
  let result = new Date(date).getDay()
  switch(result){
    case 0: result = 'вс'; break;
    case 1: result = 'пн'; break;
    case 2: result = 'вт'; break;
    case 3: result = 'ср'; break;
    case 4: result = 'чт'; break;
    case 5: result = 'пт'; break;
    case 6: result = 'сб'; break;
    default: result = 'Invalid Date';
  }
  return result
}

module.exports.checkIntOnZero = number => {
  return number < 10 ? '0' + number : number
}