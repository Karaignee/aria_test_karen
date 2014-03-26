


function multiplier() {
  var mult = document.getElementById('multipleOf').value;
  var str = '';
  str += '<table class="table table-bordered">';
  str += '<caption> Multiples of: '+mult+'</caption>';
  str += '<tr class="info">';
  for (var i=0; i<10; i++) {
    str += '<td style="text-align:left">';
    str +=  mult  + ' x ' + i + ' = ';
    str += mult * i;
    str += '</td>';
  }
  str += '</tr>'
  str += '</table>';
  document.getElementById('multTable').innerHTML = '<h2>Times Table</h2>'+str;
}

