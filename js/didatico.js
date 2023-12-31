// criação das classes
class Livro{
  constructor(id, titulo, autor, paginas, editora, quantidade, tipo, subtipo){
    this.id_livro = id;
    this.titulo_livro = titulo;
    this.autor_livro = autor;
    this.paginas_livro = paginas;
    this.editora_livro = editora;
    this.quantidade_livro = quantidade;
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
class Quadro{
  constructor(id, altura, largura, marca, modelo, quantidade, tipo, subtipo){
    this.id_quadro = id;
    this.altura_quadro = altura;
    this.largura_quadro = largura;
    this.marca_quadro = marca;
    this.tipo_quadro = modelo;
    this.quantidade_quadro = quantidade;
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
class Giz{
  constructor(id, altura, unidades, marca, quantidade, tipo, subtipo){
    this.id_giz = id;
    this.altura_giz = altura;
    this.unidades_giz = unidades;
    this.marca_giz = marca;
    this.quantidade_giz = quantidade;
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
class Apagador{
  constructor(id, altura, largura, modelo, marca, quantidade, tipo, subtipo){
    this.id_apagador = id;
    this.altura_apagador = altura;
    this.largura_apagador = largura;
    this.tipo_apagador = modelo;
    this.marca_apagador = marca;
    this.quantidade_apagador = quantidade;
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
class Pincel{
  constructor(id, altura, cor, marca, quantidade, tipo, subtipo){
    this.id_pincel = id;
    this.altura_pincel = altura;
    this.cor_pincel = cor;
    this.marca_pincel = marca;
    this.quantidade_pincel = quantidade;
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

  pesquisar(item){
    let itensFiltrados = Array();
    itensFiltrados = this.recuperarTodosRegistros();
    itensFiltrados = itensFiltrados.filter(i => i.tipo == item.tipo);
    itensFiltrados = itensFiltrados.filter(i => i.subtipo == item.subtipo);
    switch (item.subtipo) {
      case 'livro':
        if(item.titulo_livro != '') itensFiltrados = itensFiltrados.filter(i => i.titulo_livro == item.titulo_livro);
        if(item.autor_livro != '') itensFiltrados = itensFiltrados.filter(i => i.autor_livro == item.autor_livro);
        if(item.paginas_livro != '') itensFiltrados = itensFiltrados.filter(i => i.paginas_livro == item.paginas_livro);
        if(item.editora_livro != '') itensFiltrados = itensFiltrados.filter(i => i.editora_livro == item.editora_livro);
        if(item.quantidade_livro != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_livro == item.quantidade_livro);
        break;
      case 'quadro':
        if(item.altura_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.altura_quadro == item.altura_quadro);
        if(item.largura_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.largura_quadro == item.largura_quadro);
        if(item.marca_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.marca_quadro == item.marca_quadro);
        if(item.tipo_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.tipo_quadro == item.tipo_quadro);
        if(item.marca_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.marca_quadro == item.marca_quadro);
        if(item.quantidade_quadro != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_quadro == item.quantidade_quadro);
        break;
      case 'giz':
        if(item.altura_giz != '') itensFiltrados = itensFiltrados.filter(i => i.altura_giz == item.altura_giz);
        if(item.unidades_giz != '') itensFiltrados = itensFiltrados.filter(i => i.unidades_giz == item.unidades_giz);
        if(item.marca_giz != '') itensFiltrados = itensFiltrados.filter(i => i.marca_giz == item.marca_giz);
        if(item.quantidade_giz != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_giz == item.quantidade_giz);
        break;
      case 'apagador':
        if(item.altura_apagador != '') itensFiltrados = itensFiltrados.filter(i => i.altura_apagador == item.altura_apagador);
        if(item.largura_apagador != '') itensFiltrados = itensFiltrados.filter(i => i.largura_apagador == item.largura_apagador);
        if(item.tipo_apagador != '') itensFiltrados = itensFiltrados.filter(i => i.tipo_apagador == item.tipo_apagador);
        if(item.marca_apagador != '') itensFiltrados = itensFiltrados.filter(i => i.marca_apagador == item.marca_apagador);
        if(item.quantidade_apagador != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_apagador == item.quantidade_apagador);
        break;
      case 'pincel':
        if(item.altura_pincel != '') itensFiltrados = itensFiltrados.filter(i => i.altura_pincel == item.altura_pincel);
        if(item.cor_pincel != '') itensFiltrados = itensFiltrados.filter(i => i.cor_pincel == item.cor_pincel);
        if(item.marca_pincel != '') itensFiltrados = itensFiltrados.filter(i => i.marca_pincel == item.marca_pincel);
        if(item.quantidade_pincel != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_pincel == item.quantidade_pincel);
        break;

    }

    return itensFiltrados;

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
function cadastrarLivro(){
  let id = document.getElementById('id_livro');
  let titulo = document.getElementById('titulo_livro');
  let autor = document.getElementById('autor_livro');
  let paginas = document.getElementById('paginas_livro');
  let editora = document.getElementById('editora_livro');
  let quantidade = document.getElementById('quantidade_livro');

  let livro = new Livro((id.innerText == '0')? bd.getProximoId() : id.innerText,
                        titulo.value,
                        autor.value,
                        paginas.value,
                        editora.value,
                        quantidade.value,
                        'didatico',
                        'livro');

  if(livro.validarDados()){
    bd.gravar(id.innerText, livro);
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

  let quadro = new Quadro((id.innerText == '0')? bd.getProximoId() : id.innerText,
                          altura.value,
                          largura.value,
                          marca.value,
                          tipo.value,
                          quantidade.value,
                          'didatico',
                          'quadro');

  if(quadro.validarDados()){
    bd.gravar(id.innerText, quadro);
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

  let giz = new Giz((id.innerText == '0')? bd.getProximoId() : id.innerText,
                    altura.value,
                    unidades.value,
                    marca.value,
                    quantidade.value,
                    'didatico',
                    'giz');

  if(giz.validarDados()){
    bd.gravar(id.innerText, giz);
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

  let apagador = new Apagador((id.innerText == '0')? bd.getProximoId() : id.innerText,
                              altura.value,
                              largura.value,
                              tipo.value,
                              marca.value,
                              quantidade.value,
                              'didatico',
                              'apagador');

  if(apagador.validarDados()){
    bd.gravar(id.innerText, apagador);
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

  let pincel = new Pincel((id.innerText == '0')? bd.getProximoId() : id.innerText,
                          altura.value,
                          cor.value,
                          marca.value,
                          quantidade.value,
                          'didatico',
                          'pincel');

  if(pincel.validarDados()){
    bd.gravar(id.innerText, pincel);
    alert('dados gravados');
    carregaListaItens('tab_pincel');
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
    case 'tab_livro':
      document.getElementById('id_livro').innerText = 0;
      document.getElementById('titulo_livro').value = '';
      document.getElementById('autor_livro').value = '';
      document.getElementById('paginas_livro').value = '';
      document.getElementById('editora_livro').value = '';
      document.getElementById('quantidade_livro').value = '';
      break;
    case 'tab_quadro':
      document.getElementById('id_quadro').innerText = 0;
      document.getElementById('altura_quadro').value = '';
      document.getElementById('largura_quadro').value = '';
      document.getElementById('marca_quadro').value = '';
      document.getElementsByName('tipo_quadro')[0].checked = false;
      document.getElementsByName('tipo_quadro')[1].checked = false;
      document.getElementById('quantidade_quadro').value = '';
      break;
    case 'tab_giz':
      document.getElementById('id_giz').innerText = 0;
      document.getElementById('altura_giz').value = '';
      document.getElementById('unidades_giz').value = '';
      document.getElementById('marca_giz').value = '';
      document.getElementById('quantidade_giz').value = '';
      break;
    case 'tab_apagador':
      document.getElementById('id_apagador').innerText = 0;
      document.getElementById('altura_apagador').value = '';
      document.getElementById('largura_apagador').value = '';
      document.getElementsByName('tipo_apagador')[0].checked = false;
      document.getElementsByName('tipo_apagador')[1].checked = false;
      document.getElementById('marca_apagador').value = '';
      document.getElementById('quantidade_apagador').value = '';
      break;
    case 'tab_pincel':
      document.getElementById('id_pincel').innerText = 0;
      document.getElementById('altura_pincel').value = '';
      document.getElementById('cor_pincel').value = '';
      document.getElementById('marca_pincel').value = '';
      document.getElementById('quantidade_pincel').value = '';
      break;
  }
}


// carrega o item clicado na tabela para a o formulario
function carregarItem(id){
  var item = JSON.parse(sessionStorage.getItem(id));
  if(item != null)
  switch (item.subtipo){
    case 'livro':
      document.getElementById('id_livro').innerText = item.id_livro;
      document.getElementById('titulo_livro').value = item.titulo_livro;
      document.getElementById('autor_livro').value = item.autor_livro;
      document.getElementById('paginas_livro').value = item.paginas_livro;
      document.getElementById('editora_livro').value = item.editora_livro;
      document.getElementById('quantidade_livro').value = item.quantidade_livro;
      break;
    case 'quadro':
      document.getElementById('id_quadro').innerText = item.id_quadro;
      document.getElementById('altura_quadro').value = item.altura_quadro;
      document.getElementById('largura_quadro').value = item.largura_quadro;
      document.getElementById('marca_quadro').value = item.marca_quadro;
      item.tipo_lapis == 'negro' ? document.getElementsByName('tipo_quadro')[0].checked = true : document.getElementsByName('tipo_quadro')[1].checked = true;
      document.getElementById('quantidade_quadro').value = item.quantidade_quadro;
      break;
    case 'giz':
      document.getElementById('id_giz').innerText = item.id_giz;
      document.getElementById('altura_giz').value = item.altura_giz;
      document.getElementById('unidades_giz').value = item.unidades_giz;
      document.getElementById('marca_giz').value = item.marca_giz;
      document.getElementById('quantidade_giz').value = item.quantidade_giz;
      break;
    case 'apagador':
      document.getElementById('id_apagador').innerText = item.id_apagador;
      document.getElementById('altura_apagador').value = item.altura_apagador;
      document.getElementById('largura_apagador').value = item.largura_apagador;
      item.tipo_apagador == 'negro' ? document.getElementsByName('tipo_apagador')[0].checked = true : document.getElementsByName('tipo_apagador')[1].checked = true;
      document.getElementById('marca_apagador').value = item.marca_apagador;
      document.getElementById('quantidade_apagador').value = item.quantidade_apagador;
      break;
    case 'pincel':
      document.getElementById('id_pincel').innerText = item.id_pincel;
      document.getElementById('altura_pincel').value = item.altura_pincel;
      document.getElementById('cor_pincel').value = item.cor_pincel;
      document.getElementById('marca_pincel').value = item.marca_pincel;
      document.getElementById('quantidade_pincel').value = item.quantidade_pincel;
      break;
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
        if(item.subtipo == 'livro'){
          let linha = lista_livro.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_livro;
          linha.insertCell(1).innerHTML = item.titulo_livro;
          linha.insertCell(2).innerHTML = item.autor_livro;
          linha.insertCell(3).innerHTML = item.paginas_livro;
          linha.insertCell(4).innerHTML = item.editora_livro;
          linha.insertCell(5).innerHTML = item.quantidade_livro;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(6).appendChild(btn);
        }
      });
      break;
    case 'tab_quadro':
      let lista_quadro = document.getElementById('lista_quadro');
      lista_quadro.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'quadro'){
          let linha = lista_quadro.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_quadro;
          linha.insertCell(1).innerHTML = item.altura_quadro;
          linha.insertCell(2).innerHTML = item.largura_quadro;
          linha.insertCell(3).innerHTML = item.marca_quadro;
          linha.insertCell(4).innerHTML = item.tipo_quadro;
          linha.insertCell(5).innerHTML = item.quantidade_quadro;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(6).appendChild(btn);
        }
      });
      break;
    case 'tab_giz':
      let lista_giz = document.getElementById('lista_giz');
      lista_giz.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'giz'){
          let linha = lista_giz.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_giz;
          linha.insertCell(1).innerHTML = item.altura_giz;
          linha.insertCell(2).innerHTML = item.unidades_giz;
          linha.insertCell(3).innerHTML = item.marca_giz;
          linha.insertCell(4).innerHTML = item.quantidade_giz;
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
    case 'tab_apagador':
      let lista_apagador = document.getElementById('lista_apagador');
      lista_apagador.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'apagador'){
          let linha = lista_apagador.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_apagador;
          linha.insertCell(1).innerHTML = item.altura_apagador;
          linha.insertCell(2).innerHTML = item.largura_apagador;
          linha.insertCell(3).innerHTML = item.tipo_apagador;
          linha.insertCell(4).innerHTML = item.marca_apagador;
          linha.insertCell(5).innerHTML = item.quantidade_apagador;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(6).appendChild(btn);
        }
      });
      break;
    case 'tab_pincel':
      let lista_pincel = document.getElementById('lista_pincel');
      lista_pincel.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'pincel'){
          let linha = lista_pincel.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_pincel;
          linha.insertCell(1).innerHTML = item.altura_pincel;
          linha.insertCell(2).innerHTML = item.cor_pincel;
          linha.insertCell(3).innerHTML = item.marca_pincel;
          linha.insertCell(4).innerHTML = item.quantidade_pincel;
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

// realiza filtro de itens para colocar na tabela
function pesquisarItem(idTab){
  let itensFiltrados = Array();
  switch (idTab) {
    case 'livro':
      let id_livro = document.getElementById('id_livro').innerText;
      let titulo_livro = document.getElementById('titulo_livro').value;
      let autor_livro = document.getElementById('autor_livro').value;
      let paginas_livro = document.getElementById('paginas_livro').value;
      let editora_livro = document.getElementById('editora_livro').value;
      let quantidade_livro = document.getElementById('quantidade_livro').value;
      let livro = new Livro(id_livro, titulo_livro, autor_livro, paginas_livro, editora_livro, quantidade_livro, 'didatico', 'livro');
      itensFiltrados = bd.pesquisar(livro);

      let lista_livro = document.getElementById('lista_livro');
      lista_livro.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_livro.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_livro;
        linha.insertCell(1).innerHTML = item.titulo_livro;
        linha.insertCell(2).innerHTML = item.autor_livro;
        linha.insertCell(3).innerHTML = item.paginas_livro;
        linha.insertCell(4).innerHTML = item.editora_livro;
        linha.insertCell(5).innerHTML = item.quantidade_livro;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_livro');
        }
        linha.insertCell(6).appendChild(btn);
      });
      break;
    case 'quadro':
      let id_quadro = document.getElementById('id_quadro').innerText;
      let altura_quadro = document.getElementById('altura_quadro').value;
      let largura_quadro = document.getElementById('largura_quadro').value;
      let marca_quadro = document.getElementById('marca_quadro').value;
      let tipo_quadro = (document.getElementsByName('tipo_quadro')[0].checked == true) ? 'negro' : 'branco';
      let quantidade_quadro = document.getElementById('quantidade_quadro').value;

      let quadro = new Quadro(id_quadro, altura_quadro, largura_quadro, marca_quadro, tipo_quadro, quantidade_quadro, 'didatico', 'quadro');
      itensFiltrados = bd.pesquisar(quadro);
      let lista_quadro = document.getElementById('lista_quadro');
      lista_quadro.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_quadro.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_quadro;
        linha.insertCell(1).innerHTML = item.altura_quadro;
        linha.insertCell(2).innerHTML = item.largura_quadro;
        linha.insertCell(3).innerHTML = item.marca_quadro;
        linha.insertCell(4).innerHTML = item.tipo_quadro;
        linha.insertCell(5).innerHTML = item.quantidade_quadro;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_quadro');
        }
        linha.insertCell(6).appendChild(btn);

      });
      break;
    case 'giz':
      let id_giz = document.getElementById('id_giz').innerText;
      let altura_giz = document.getElementById('altura_giz').value;
      let unidades_giz = document.getElementById('unidades_giz').value;
      let marca_giz = document.getElementById('marca_giz').value;
      let quantidade_giz = document.getElementById('quantidade_giz').value;

      let giz = new Giz(id_giz, altura_giz, unidades_giz, marca_giz, quantidade_giz, 'didatico', 'giz');
      itensFiltrados = bd.pesquisar(giz);

      let lista_giz = document.getElementById('lista_giz');
      lista_giz.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_giz.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_giz;
        linha.insertCell(1).innerHTML = item.altura_giz;
        linha.insertCell(2).innerHTML = item.unidades_giz;
        linha.insertCell(3).innerHTML = item.marca_giz;
        linha.insertCell(4).innerHTML = item.quantidade_giz;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_giz');
        }
        linha.insertCell(5).appendChild(btn);

      });
      break;
    case 'apagador':
      let id_apagador = document.getElementById('id_apagador').innerText;
      let altura_apagador = document.getElementById('altura_apagador').value;
      let largura_apagador = document.getElementById('largura_apagador').value;
      let tipo_apagador = (document.getElementsByName('tipo_apagador')[0].checked == true) ? 'negro' : 'branco';
      let marca_apagador = document.getElementById('marca_apagador').value;
      let quantidade_apagador = document.getElementById('quantidade_apagador').value;

      let apagador = new Apagador(id_apagador, altura_apagador, largura_apagador, tipo_apagador, marca_apagador, quantidade_apagador, 'didatico', 'apagador');
      itensFiltrados = bd.pesquisar(apagador);
      let lista_apagador = document.getElementById('lista_apagador');
      lista_apagador.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_apagador.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_apagador;
        linha.insertCell(1).innerHTML = item.altura_apagador;
        linha.insertCell(2).innerHTML = item.largura_apagador;
        linha.insertCell(3).innerHTML = item.tipo_apagador;
        linha.insertCell(4).innerHTML = item.marca_apagador;
        linha.insertCell(5).innerHTML = item.quantidade_apagador;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_apagador');
        }
        linha.insertCell(6).appendChild(btn);

      });
      break;
    case 'pincel':
      let id_pincel = document.getElementById('id_pincel').innerText;
      let altura_pincel = document.getElementById('altura_pincel').value;
      let cor_pincel = document.getElementById('cor_pincel').value;
      let marca_pincel = document.getElementById('marca_pincel').value;
      let quantidade_pincel = document.getElementById('quantidade_pincel').value;

      let pincel = new Pincel(id_pincel, altura_pincel, cor_pincel, marca_pincel, quantidade_pincel, 'didatico', 'pincel');
      itensFiltrados = bd.pesquisar(pincel);

      let lista_pincel = document.getElementById('lista_pincel');
      lista_pincel.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_pincel.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_pincel;
        linha.insertCell(1).innerHTML = item.altura_pincel;
        linha.insertCell(2).innerHTML = item.cor_pincel;
        linha.insertCell(3).innerHTML = item.marca_pincel;
        linha.insertCell(4).innerHTML = item.quantidade_pincel;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_pincel');
        }
        linha.insertCell(5).appendChild(btn);

      });
      break;
  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
