var moment = require('moment');
var date_obj = {
  unix: null,
  natural: null
}
var reg = /^[0-9]+$/g;

var time = function(date){
  if(reg.test(date)){
    var d = new Date(date * 1000).toDateString();
    date_obj.unix = parseInt(date);
    date_obj.natural = moment(d).format('MMMM DD, YYYY');
    date_obj.type = 'number';
  } else if(moment(date).isValid()){
    date_obj.unix = parseInt(moment(date).format('X'));
    date_obj.natural = moment(date).format('MMMM DD, YYYY');
    date_obj.type = 'string';
  } 
  return date_obj;
}

module.exports = time;