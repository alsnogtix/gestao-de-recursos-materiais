// criação das classes
class Lapis{
  constructor(id, altura, marca, tipo, quantidade){
    this.id_lapis = id;
    this.altura_lapis = altura;
    this.marca_lapis = marca;
    this.tipo_lapis = tipo;
    this.quantidade_lapis = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Caderno{
  constructor(id, altura, largura, materias, folhas, marca, quantidade){
    this.id_caderno = id;
    this.altura_caderno = altura;
    this.largura_caderno = largura;
    this.materias_caderno = materias;
    this.folhas_caderno = folhas;
    this.marca_caderno = marca;
    this.quantidade_caderno = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Caneta{
  constructor(id, altura, cor, marca, quantidade){
    this.id_caneta = id;
    this.altura_caneta = altura;
    this.cor_caneta = cor;
    this.marca_caneta = marca;
    this.quantidade_caneta = quantidade;
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

// funções que guardam dados em localStorage
function cadastrarLapis(){
  let id = document.getElementById('id_lapis');
  let altura = document.getElementById('altura_lapis');
  let marca = document.getElementById('marca_lapis');
  let tipo = document.querySelector('input[name="tipo_lapis"]:checked');
  let quantidade = document.getElementById('quantidade_lapis');

  let lapis = new Lapis(id.innerText,
                        altura.value,
                        marca.value,
                        tipo.value,
                        quantidade.value);

  if(lapis.validarDados()){
    bd.gravar(lapis);
    alert('dados gravados');
    carregaListaItens('tab_lapis');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarCaderno(){
  let id = document.getElementById('id_caderno');
  let altura = document.getElementById('altura_caderno');
  let largura = document.getElementById('largura_caderno');
  let materias = document.getElementById('materias_caderno');
  let folhas = document.getElementById('folhas_caderno');
  let marca = document.getElementById('marca_caderno');
  let quantidade = document.getElementById('quantidade_caderno');

  let caderno = new Caderno(id.innerText,
                            altura.value,
                            largura.value,
                            materias.value,
                            folhas.value,
                            marca.value,
                            quantidade.value);

  if(caderno.validarDados()){
    bd.gravar(caderno);
    alert('dados gravados');
    carregaListaItens('tab_caderno');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarCaneta(){
  let id = document.getElementById('id_caneta');
  let altura = document.getElementById('altura_caneta');
  let cor = document.getElementById('cor_caneta');
  let marca = document.getElementById('marca_caneta');
  let quantidade = document.getElementById('quantidade_caneta');

  let caneta = new Caneta(id.innerText,
                          altura.value,
                          cor.value,
                          marca.value,
                          quantidade.value);

  if(caneta.validarDados()){
    bd.gravar(caneta);
    alert('dados gravados');
    carregaListaItens('tab_caneta');
  }else {
    alert('Dados incorretos');
  }
}

function carregaListaItens(idTab){
  let itens = Array();
  itens = bd.recuperarTodosRegistros();
  switch (idTab) {
    case 'tab_lapis':
      let lista_lapis = document.getElementById('lista_lapis');
      lista_lapis.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_lapis.insertRow();
        linha.insertCell(0).innerHTML = item.id_lapis;
        linha.insertCell(1).innerHTML = item.altura_lapis;
        linha.insertCell(2).innerHTML = item.marca_lapis;
        linha.insertCell(3).innerHTML = item.tipo_lapis;
        linha.insertCell(4).innerHTML = item.quantidade_lapis;
      });
      break;
    case 'tab_caderno':
      let lista_caderno = document.getElementById('lista_caderno');
      lista_caderno.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_caderno.insertRow();
        linha.insertCell(0).innerHTML = item.id_caderno;
        linha.insertCell(1).innerHTML = item.altura_caderno;
        linha.insertCell(2).innerHTML = item.largura_caderno;
        linha.insertCell(3).innerHTML = item.materias_caderno;
        linha.insertCell(4).innerHTML = item.folhas_caderno;
        linha.insertCell(5).innerHTML = item.marca_caderno;
        linha.insertCell(6).innerHTML = item.quantidade_caderno;
      });
      break;
    case 'tab_caneta':
      let lista_caneta = document.getElementById('lista_caneta');
      lista_caneta.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_caneta.insertRow();
        linha.insertCell(0).innerHTML = item.id_caneta;
        linha.insertCell(1).innerHTML = item.altura_caneta;
        linha.insertCell(2).innerHTML = item.cor_caneta;
        linha.insertCell(3).innerHTML = item.marca_caneta;
        linha.insertCell(4).innerHTML = item.quantidade_caneta;
      });
      break;
    default:
  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
