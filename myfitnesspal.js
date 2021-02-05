
$(document).ready(function() {
  const month = 1;
  const minDate = 01;
  const maxDate = 24

  for ( i = minDate; i <= maxDate; i++ ) {
    let stringMonth = String(month).padStart(2, '0')
    let stringDate = String(i).padStart(2, '0')
    let stringMinDate = String(minDate).padStart(2, '0')
    let url = `https://www.myfitnesspal.com/food/copy_meal?date=2021-${stringMonth}-${stringDate}&from_date=2020-04-01&from_meal=0&username=mailyfesux`
    $.get(url, function(data, status) {
      console.log(`Inserted data for ${stringMonth}/${stringDate}`)
    })
  }

})