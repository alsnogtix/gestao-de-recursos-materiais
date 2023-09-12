function abrirTab(idTab){
  console.log(idTab);
  var tabs = document.getElementsByClassName('section-tabs');
  console.log(tabs);
  Array.from(tabs).forEach((tab) => {
    tab.style.display = 'none';
  });
  document.getElementById(idTab).style.display = 'block';
}
