// criação das classes
class Lapis{
  constructor(id, altura, marca, modelo, quantidade, tipo, subtipo){
    this.id_lapis = id;
    this.altura_lapis = altura;
    this.marca_lapis = marca;
    this.tipo_lapis = modelo;
    this.quantidade_lapis = quantidade;
    this.tipo = tipo;
    this.subtipo = subtipo;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Caderno{
  constructor(id, altura, largura, materias, folhas, marca, quantidade, tipo, subtipo){
    this.id_caderno = id;
    this.altura_caderno = altura;
    this.largura_caderno = largura;
    this.materias_caderno = materias;
    this.folhas_caderno = folhas;
    this.marca_caderno = marca;
    this.quantidade_caderno = quantidade;
    this.tipo = tipo;
    this.subtipo = subtipo;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Caneta{
  constructor(id, altura, cor, marca, quantidade, tipo, subtipo){
    this.id_caneta = id;
    this.altura_caneta = altura;
    this.cor_caneta = cor;
    this.marca_caneta = marca;
    this.quantidade_caneta = quantidade;
    this.tipo = tipo;
    this.subtipo = subtipo;
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
      let id = sessionStorage.getItem('id');
      if(id === null) sessionStorage.setItem('id', 0);
  }

  getProximoId(){
    let proximoId = sessionStorage.getItem('id');
    return parseInt(proximoId) + 1;
  }

  gravar(id, a){
    if(id == '0'){
      let novoId = this.getProximoId();
      sessionStorage.setItem(novoId, JSON.stringify(a));
      sessionStorage.setItem('id', novoId);
    }else{
      sessionStorage.removeItem(id);
      sessionStorage.setItem(id, JSON.stringify(a));
    }
  }

  deletar(id){
    sessionStorage.removeItem(id);
  }

  recuperarTodosRegistros(){
    let itens = Array();
    let id = sessionStorage.getItem('id');

    for(let i = 1; i <= id; i++){
      let item = JSON.parse(sessionStorage.getItem(i));
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

// funções que guardam dados em sessionStorage
function cadastrarLapis(){
  let id = document.getElementById('id_lapis');
  let altura = document.getElementById('altura_lapis');
  let marca = document.getElementById('marca_lapis');
  let tipo = document.querySelector('input[name="tipo_lapis"]:checked');
  let quantidade = document.getElementById('quantidade_lapis');

  let lapis = new Lapis((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                        altura.value,
                        marca.value,
                        tipo.value,
                        quantidade.value,
                        'escolar',
                        'lapis');

  if(lapis.validarDados()){
    bd.gravar(id.innerText, lapis);
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

  let caderno = new Caderno((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                            altura.value,
                            largura.value,
                            materias.value,
                            folhas.value,
                            marca.value,
                            quantidade.value,
                            'escolar',
                            'caderno');

  if(caderno.validarDados()){
    bd.gravar(id.innerText, caderno);
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

  let caneta = new Caneta((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                          altura.value,
                          cor.value,
                          marca.value,
                          quantidade.value,
                          'escolar',
                          'caneta');

  if(caneta.validarDados()){
    bd.gravar(id.innerText, caneta);
    alert('dados gravados');
    carregaListaItens('tab_caneta');
  }else {
    alert('Dados incorretos');
  }
}


function deletarItem(id, subtipo){
  if(confirm("Deseja DELETAR o Item?") == true){
    bd.deletar(id);
    carregaListaItens(subtipo);
    limpaTela(subtipo);
  }
}


function limpaTela(idTab){
  switch (idTab) {
    case 'tab_lapis':
      document.getElementById('id_lapis').innerText = 0;
      document.getElementById('altura_lapis').value = '';
      document.getElementById('marca_lapis').value = '';
      document.getElementsByName('tipo_lapis')[0].checked = false;
      document.getElementsByName('tipo_lapis')[1].checked = false;
      document.getElementById('quantidade_lapis').value = '';
      break;
    case 'tab_caderno':
      document.getElementById('id_caderno').innerText = 0;
      document.getElementById('altura_caderno').value = '';
      document.getElementById('largura_caderno').value = '';
      document.getElementById('materias_caderno').value = '';
      document.getElementById('folhas_caderno').value = '';
      document.getElementById('marca_caderno').value = '';
      document.getElementById('quantidade_caderno').value = '';
      break;
    case 'tab_caneta':
      document.getElementById('id_caneta').innerText = 0;
      document.getElementById('altura_caneta').value = '';
      document.getElementById('cor_caneta').value = '';
      document.getElementById('marca_caneta').value = '';
      document.getElementById('quantidade_caneta').value = '';
      break;
  }
}


// carrega o item clicado na tabela para a o formulario
function carregarItem(id){
  var item = JSON.parse(sessionStorage.getItem(id));
  if(item != null)
  switch (item.subtipo){
    case 'lapis':
      document.getElementById('id_lapis').innerText = item.id_lapis;
      document.getElementById('altura_lapis').value = item.altura_lapis;
      document.getElementById('marca_lapis').value = item.marca_lapis;
      item.tipo_lapis == 'desenho' ? document.getElementsByName('tipo_lapis')[0].checked = true : document.getElementsByName('tipo_lapis')[1].checked = true;
      document.getElementById('quantidade_lapis').value = item.quantidade_lapis;
      break;
    case 'caderno':
      document.getElementById('id_caderno').innerText = item.id_caderno;
      document.getElementById('altura_caderno').value = item.altura_caderno;
      document.getElementById('largura_caderno').value = item.largura_caderno;
      document.getElementById('materias_caderno').value = item.materias_caderno;
      document.getElementById('folhas_caderno').value = item.folhas_caderno;
      document.getElementById('marca_caderno').value = item.marca_caderno;
      document.getElementById('quantidade_caderno').value = item.quantidade_caderno;
      break;
    case 'caneta':
      document.getElementById('id_caneta').innerText = item.id_caneta;
      document.getElementById('altura_caneta').value = item.altura_caneta;
      document.getElementById('cor_caneta').value = item.cor_caneta;
      document.getElementById('marca_caneta').value = item.marca_caneta;
      document.getElementById('quantidade_caneta').value = item.quantidade_caneta;
      break;
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
        if(item.subtipo == 'lapis'){
          let linha = lista_lapis.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_lapis;
          linha.insertCell(1).innerHTML = item.altura_lapis;
          linha.insertCell(2).innerHTML = item.marca_lapis;
          linha.insertCell(3).innerHTML = item.tipo_lapis;
          linha.insertCell(4).innerHTML = item.quantidade_lapis;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(5).appendChild(btn);
        }
      });
      break;
    case 'tab_caderno':
      let lista_caderno = document.getElementById('lista_caderno');
      lista_caderno.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'caderno'){
          let linha = lista_caderno.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_caderno;
          linha.insertCell(1).innerHTML = item.altura_caderno;
          linha.insertCell(2).innerHTML = item.largura_caderno;
          linha.insertCell(3).innerHTML = item.materias_caderno;
          linha.insertCell(4).innerHTML = item.folhas_caderno;
          linha.insertCell(5).innerHTML = item.marca_caderno;
          linha.insertCell(6).innerHTML = item.quantidade_caderno;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(7).appendChild(btn);
        }
      });
      break;
    case 'tab_caneta':
      let lista_caneta = document.getElementById('lista_caneta');
      lista_caneta.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'caneta'){
          let linha = lista_caneta.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_caneta;
          linha.insertCell(1).innerHTML = item.altura_caneta;
          linha.insertCell(2).innerHTML = item.cor_caneta;
          linha.insertCell(3).innerHTML = item.marca_caneta;
          linha.insertCell(4).innerHTML = item.quantidade_caneta;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(5).appendChild(btn);
        }
      });
      break;
    default:
  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
