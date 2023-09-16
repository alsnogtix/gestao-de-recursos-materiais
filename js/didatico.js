// criação das classes
class Livro{
  constructor(id, titulo, autor, paginas, editora, quantidade){
    this.id_livro = id;
    this.titulo_livro = titulo;
    this.autor_livro = autor;
    this.paginas_livro = paginas;
    this.editora_livro = editora;
    this.quantidade_livro = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Quadro{
  constructor(id, altura, largura, marca, tipo, quantidade){
    this.id_quadro = id;
    this.altura_quadro = altura;
    this.largura_quadro = largura;
    this.marca_quadro = marca;
    this.tipo_quadro = tipo;
    this.quantidade_quadro = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Giz{
  constructor(id, altura, unidades, marca, quantidade){
    this.id_giz = id;
    this.altura_giz = altura;
    this.unidades_giz = unidades;
    this.marca_giz = marca;
    this.quantidade_giz = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Apagador{
  constructor(id, altura, largura, tipo, marca, quantidade){
    this.id_apagador = id;
    this.altura_apagador = altura;
    this.largura_apagador = largura;
    this.tipo_apagador = tipo;
    this.marca_apagador = marca;
    this.quantidade_apagador = quantidade;
  }
  validarDados(){
      for(let i in this){
        if(this[i] == undefined || this[i] == null || this[i] == '') return false;
      }
      return true;
  }
}
class Pincel{
  constructor(id, altura, cor, marca, quantidade){
    this.id_pincel = id;
    this.altura_pincel = altura;
    this.cor_pincel = cor;
    this.marca_pincel = marca;
    this.quantidade_pincel = quantidade;
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
function cadastrarLivro(){
  let id = document.getElementById('id_livro');
  let titulo = document.getElementById('titulo_livro');
  let autor = document.getElementById('autor_livro');
  let paginas = document.getElementById('paginas_livro');
  let editora = document.getElementById('editora_livro');
  let quantidade = document.getElementById('quantidade_livro');

  let livro = new Livro(id.innerText,
                        titulo.value,
                        autor.value,
                        paginas.value,
                        editora.value,
                        quantidade.value);

  if(livro.validarDados()){
    bd.gravar(livro);
    alert('dados gravados');
    carregaListaItens('tab_livro');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarQuadro(){
  let id = document.getElementById('id_quadro');
  let altura = document.getElementById('altura_quadro');
  let largura = document.getElementById('largura_quadro');
  let marca = document.getElementById('marca_quadro');
  let tipo = document.querySelector('input[name="tipo_quadro"]:checked');
  let quantidade = document.getElementById('quantidade_quadro');

  let quadro = new Quadro(id.innerText,
                          altura.value,
                          largura.value,
                          marca.value,
                          tipo.value,
                          quantidade.value);

  if(quadro.validarDados()){
    bd.gravar(quadro);
    alert('dados gravados');
    carregaListaItens('tab_quadro');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarGiz(){
  let id = document.getElementById('id_giz');
  let altura = document.getElementById('altura_giz');
  let unidades = document.getElementById('unidades_giz');
  let marca = document.getElementById('marca_giz');
  let quantidade = document.getElementById('quantidade_giz');

  let giz = new Giz(id.innerText,
                    altura.value,
                    unidades.value,
                    marca.value,
                    quantidade.value);

  if(giz.validarDados()){
    bd.gravar(giz);
    alert('dados gravados');
    carregaListaItens('tab_giz');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarApagador(){
  let id = document.getElementById('id_apagador');
  let altura = document.getElementById('altura_apagador');
  let largura = document.getElementById('largura_apagador');
  let tipo = document.querySelector('input[name="tipo_apagador"]:checked');
  let marca = document.getElementById('marca_apagador');
  let quantidade = document.getElementById('quantidade_apagador');

  let apagador = new Apagador(id.innerText,
                              altura.value,
                              largura.value,
                              tipo.value,
                              marca.value,
                              quantidade.value);

  if(apagador.validarDados()){
    bd.gravar(apagador);
    alert('dados gravados');
    carregaListaItens('tab_apagador');
  }else {
    alert('Dados incorretos');
  }
}
function cadastrarPincel(){
  let id = document.getElementById('id_pincel');
  let altura = document.getElementById('altura_pincel');
  let cor = document.getElementById('cor_pincel');
  let marca = document.getElementById('marca_pincel');
  let quantidade = document.getElementById('quantidade_pincel');

  let pincel = new Pincel(id.innerText,
                          altura.value,
                          cor.value,
                          marca.value,
                          quantidade.value);

  if(pincel.validarDados()){
    bd.gravar(pincel);
    alert('dados gravados');
    carregaListaItens('tab_pincel');
  }else {
    alert('Dados incorretos');
  }
}

function carregaListaItens(idTab){
  let itens = Array();
  itens = bd.recuperarTodosRegistros();
  switch (idTab) {
    case 'tab_livro':
      let lista_livro = document.getElementById('lista_livro');
      lista_livro.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_livro.insertRow();
        linha.insertCell(0).innerHTML = item.id_livro;
        linha.insertCell(1).innerHTML = item.titulo_livro;
        linha.insertCell(2).innerHTML = item.autor_livro;
        linha.insertCell(3).innerHTML = item.paginas_livro;
        linha.insertCell(4).innerHTML = item.editora_livro;
        linha.insertCell(5).innerHTML = item.quantidade_livro;
      });
      break;
    case 'tab_quadro':
      let lista_quadro = document.getElementById('lista_quadro');
      lista_quadro.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_quadro.insertRow();
        linha.insertCell(0).innerHTML = item.id_quadro;
        linha.insertCell(1).innerHTML = item.altura_quadro;
        linha.insertCell(2).innerHTML = item.largura_quadro;
        linha.insertCell(3).innerHTML = item.marca_quadro;
        linha.insertCell(4).innerHTML = item.tipo_quadro;
        linha.insertCell(5).innerHTML = item.quantidade_quadro;
      });
      break;
    case 'tab_giz':
      let lista_giz = document.getElementById('lista_giz');
      lista_giz.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_giz.insertRow();
        linha.insertCell(0).innerHTML = item.id_giz;
        linha.insertCell(1).innerHTML = item.altura_giz;
        linha.insertCell(2).innerHTML = item.unidades_giz;
        linha.insertCell(3).innerHTML = item.marca_giz;
        linha.insertCell(4).innerHTML = item.quantidade_agua_sanitaria;
      });
      break;
    case 'tab_apagador':
      let lista_apagador = document.getElementById('lista_apagador');
      lista_apagador.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_apagador.insertRow();
        linha.insertCell(0).innerHTML = item.id_apagador;
        linha.insertCell(1).innerHTML = item.altura_apagador;
        linha.insertCell(2).innerHTML = item.largura_apagador;
        linha.insertCell(3).innerHTML = item.tipo_apagador;
        linha.insertCell(4).innerHTML = item.marca_apagador;
        linha.insertCell(5).innerHTML = item.quantidade_apagador;
      });
      break;
    case 'tab_pincel':
      let lista_pincel = document.getElementById('lista_pincel');
      lista_pincel.innerHTML = '';
      itens.forEach((item, i) => {
        let linha = lista_pincel.insertRow();
        linha.insertCell(0).innerHTML = item.id_pincel;
        linha.insertCell(1).innerHTML = item.altura_pincel;
        linha.insertCell(2).innerHTML = item.cor_pincel;
        linha.insertCell(3).innerHTML = item.marca_pincel;
        linha.insertCell(4).innerHTML = item.quantidade_pincel;
      });
      break;
    default:
  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
