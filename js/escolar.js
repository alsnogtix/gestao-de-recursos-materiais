document.getElementById('tab-padrao').click();

function abrirTab(event, idTab){
  var tabs = document.getElementsByClassName('section-tabs');
  var buttons = document.getElementsByClassName('button-tabs');

  Array.from(tabs).forEach((tab) => {
    tab.style.display = 'none';
  });

  Array.from(buttons).forEach((button) => {
    button.className = button.className.replace('ativo', '');
  });

  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.className += ' ativo';
}
