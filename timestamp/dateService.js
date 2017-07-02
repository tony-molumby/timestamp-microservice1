var moment = require('moment');
var date_obj = {
  unix: null,
  natural: null
}
var regex = /^[0-9]*/g;

var time = function(date){
  if(regex.test(date) && date > 0){
    var date_int = parseInt(date);
    var d = new Date(date * 1000);
    date_obj.unix = date_int;
    date_obj.natural = moment(d).format('MMMM DD, YYYY');
    date_obj.type = 'number';
  } else if(typeof date == 'string' && moment(date).isValid()){
    date_obj.unix = parseInt(moment(date).format('X'));
    date_obj.natural = moment(date).format('MMMM DD, YYYY');
    date_obj.type = 'string';
  } 
  return date_obj;
}

module.exports = time;