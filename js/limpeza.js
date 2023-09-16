// criação de classes
class Alvejante{
  constructor(id, marca, unidades, quantidade){
    this.id_alvejante = id;
    this.marca_alvejante = marca;
    this.unidades_alvejante = unidades;
    this.quantidade_alvejante = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class SabaoEmPo{
  constructor(id, marca, unidades, quantidade){
    this.id_sabao_em_po = id;
    this.marca_sabao_em_po = marca;
    this.unidades_sabao_em_po = unidades;
    this.quantidade_sabao_em_po = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class AguaSanitaria{
  constructor(id, marca, unidades, quantidade){
    this.id_agua_sanitaria = id;
    this.marca_agua_sanitaria = marca;
    this.unidades_agua_sanitaria = unidades;
    this.quantidade_agua_sanitaria = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class SabaoEmBarra{
  constructor(id, marca, unidades, quantidade){
    this.id_sabao_em_barra = id;
    this.marca_sabao_em_barra = marca;
    this.unidades_sabao_em_barra = unidades;
    this.quantidade_sabao_em_barra = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}

class Bd{
  constructor(){
      let id = localStorage.getItem('id');
      if(id === null) localStorage.setItem('id', 0);
  }

  getProximoId(){
    let proximoId = localStorage.getItem('id');
    return parseInt(proximoId) + 1;
  }

  gravar(a){
    let id = this.getProximoId();
    localStorage.setItem(id, JSON.stringify(a));
    localStorage.setItem('id', id);
  }

  recuperarTodosRegistros(){
    let itens = Array();
    let id = localStorage.getItem('id');

    for(let i = 1; i <= id; i++){
      let item = JSON.parse(localStorage.getItem(i));
      if(item === null) continue;
      itens.push(item);
    }
    return itens;
  }
}
let bd = new Bd();

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

  //carrega lista de itens
  carregaListaItens(idTab);
}

// funções que guardam os dados em localStorage
function cadastrarAlvejante(){
  let id = document.getElementById('id_alvejante');
  let marca = document.getElementById('marca_alvejante');
  let unidades = document.getElementById('unidades_alvejante');
  let quantidade = document.getElementById('quantidade_alvejante');


  let alvejante = new Alvejante(id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value);

  if(alvejante.validarDados()){
    bd.gravar(alvejante);
    alert('dados gravados');
    carregaListaItens('tab_alvejante');
  }else {
    alert('Dados incorretos');
  }

}
function cadastrarSabaoEmPo(){
  let id = document.getElementById('id_sabao_em_po');
  let marca = document.getElementById('marca_sabao_em_po');
  let unidades = document.getElementById('unidades_sabao_em_po');
  let quantidade = document.getElementById('quantidade_sabao_em_po');


  let sabaoEmPo = new SabaoEmPo(id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value);

  if(sabaoEmPo.validarDados()){
    bd.gravar(sabaoEmPo);
    alert('dados gravados');
    carregaListaItens('tab_sabao_em_po');
  }else {
    alert('Dados incorretos');
  }

}
function cadastrarAguaSanitaria(){
  let id = document.getElementById('id_agua_sanitaria');
  let marca = document.getElementById('marca_agua_sanitaria');
  let unidades = document.getElementById('unidades_agua_sanitaria');
  let quantidade = document.getElementById('quantidade_agua_sanitaria');


  let aguaSanitaria = new AguaSanitaria(id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value);

  if(aguaSanitaria.validarDados()){
    bd.gravar(aguaSanitaria);
    alert('dados gravados');
    carregaListaItens('tab_agua_sanitaria');
  }else {
    alert('Dados incorretos');
  }

}
function cadastrarSabaoEmBarra(){
  let id = document.getElementById('id_sabao_em_barra');
  let marca = document.getElementById('marca_sabao_em_barra');
  let unidades = document.getElementById('unidades_sabao_em_barra');
  let quantidade = document.getElementById('quantidade_sabao_em_barra');


  let sabaoEmBarra = new SabaoEmBarra(id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value);

  if(sabaoEmBarra.validarDados()){
    bd.gravar(sabaoEmBarra);
    alert('dados gravados');
    carregaListaItens('tab_sabao_em_barra');
  }else {
    alert('Dados incorretos');
  }

}


function carregaListaItens(idTab){
  let itens = Array();
  itens = bd.recuperarTodosRegistros();
  switch (idTab) {
    case 'tab_alvejante':
      let lista_alvejante = document.getElementById('lista_alvejante');
      lista_alvejante.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_alvejante.insertRow();
        linha.insertCell(0).innerHTML = item.id_alvejante;
        linha.insertCell(1).innerHTML = item.marca_alvejante;
        linha.insertCell(2).innerHTML = item.unidades_alvejante;
        linha.insertCell(3).innerHTML = item.quantidade_alvejante;
      });
      break;
    case 'tab_sabao_em_po':
      let lista_sabao_em_po = document.getElementById('lista_sabao_em_po');
      lista_sabao_em_po.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_sabao_em_po.insertRow();
        linha.insertCell(0).innerHTML = item.id_sabao_em_po;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_po;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_po;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_po;
      });
      break;
    case 'tab_agua_sanitaria':
      let lista_agua_sanitaria = document.getElementById('lista_agua_sanitaria');
      lista_agua_sanitaria.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_agua_sanitaria.insertRow();
        linha.insertCell(0).innerHTML = item.id_agua_sanitaria;
        linha.insertCell(1).innerHTML = item.marca_agua_sanitaria;
        linha.insertCell(2).innerHTML = item.unidades_agua_sanitaria;
        linha.insertCell(3).innerHTML = item.quantidade_agua_sanitaria;
      });
      break;
    case 'tab_sabao_em_barra':
      let lista_sabao_em_barra = document.getElementById('lista_sabao_em_barra');
      lista_sabao_em_barra.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_sabao_em_barra.insertRow();
        linha.insertCell(0).innerHTML = item.id_sabao_em_barra;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_barra;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_barra;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_barra;
      });
      break;
    default:

  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
