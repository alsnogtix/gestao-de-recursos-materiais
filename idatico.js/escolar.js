function abrirTab(idTab){
  var tabs = document.getElementsByClassName('section-tabs');
  Array.from(tabs).forEach((tab) => {
    tab.style.display = 'none';
  });
  document.getElementById(idTab).style.display = 'block';
}
