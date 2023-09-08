var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
jQuery.noConflict();


$(document).ready(function() {
  const month = moment().format('MM');
  const minDate = 1;
  const maxDate = parseInt(moment().format('DD'));
  const year = moment().format('YYYY');

  for ( i = minDate; i <= maxDate; i++ ) {
    let stringMonth = String(month).padStart(2, '0')
    let stringDate = String(i).padStart(2, '0')
    let url = `https://www.myfitnesspal.com/food/copy_meal?date=${year}-${stringMonth}-${stringDate}&from_date=2020-04-01&from_meal=0&username=mailyfesux`
    $.get(url, function(data, status) {
      console.log(`Inserted data for ${stringMonth}/${stringDate}`)
    })
  }

})
