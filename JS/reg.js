document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete1');
    var instances = M.Autocomplete.init(elems, {});

    var elems2 = document.querySelectorAll('.autocomplete2');
    var instances2 = M.Autocomplete.init(elems, {});

    var elems3 = document.querySelectorAll('.autocomplete3');
    var instances3 = M.Autocomplete.init(elems, {});

    var elems4 = document.querySelectorAll('.autocomplete4');
    var instances4 = M.Autocomplete.init(elems, {});
  });

  document.getElementById('check').onclick = function() {
    let login = document.getElementById('email');
    let password = document.getElementById('password');
    let number = document.getElementById('number');
    let birthday = document.getElementById('birthday');
  
    if (login == 'ivan' && password == '123456' && number == '+380664708301' && birthday == '12.04.2002')
      alert ('Welcome');
    else if ('login' == 'alex' && password == '123654')
      alert ('Welcome');
    else if ('login' == 'petr' && password == '654321' && number == '+380664708301' && birthday == '12.04.2002')
      alert ('Welcome');
    else alert ('Incorect login or pass')
  }