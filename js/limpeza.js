// criação de classes
class Alvejante{
  constructor(id, marca, unidades, quantidade, tipo, subtipo){
    this.id_alvejante = id;
    this.marca_alvejante = marca;
    this.unidades_alvejante = unidades;
    this.quantidade_alvejante = quantidade;
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
class SabaoEmPo{
  constructor(id, marca, unidades, quantidade, tipo, subtipo){
    this.id_sabao_em_po = id;
    this.marca_sabao_em_po = marca;
    this.unidades_sabao_em_po = unidades;
    this.quantidade_sabao_em_po = quantidade;
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
class AguaSanitaria{
  constructor(id, marca, unidades, quantidade, tipo, subtipo){
    this.id_agua_sanitaria = id;
    this.marca_agua_sanitaria = marca;
    this.unidades_agua_sanitaria = unidades;
    this.quantidade_agua_sanitaria = quantidade;
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
class SabaoEmBarra{
  constructor(id, marca, unidades, quantidade, tipo, subtipo){
    this.id_sabao_em_barra = id;
    this.marca_sabao_em_barra = marca;
    this.unidades_sabao_em_barra = unidades;
    this.quantidade_sabao_em_barra = quantidade;
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
      case 'alvejante':
        if(item.marca_alvejante != '') itensFiltrados = itensFiltrados.filter(i => i.marca_alvejante == item.marca_alvejante);
        if(item.unidades_alvejante != '') itensFiltrados = itensFiltrados.filter(i => i.unidades_alvejante == item.unidades_alvejante);
        if(item.quantidade_alvejante != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_alvejante == item.quantidade_alvejante);
        break;
      case 'sabao_em_po':
        if(item.marca_sabao_em_po != '') itensFiltrados = itensFiltrados.filter(i => i.marca_sabao_em_po == item.marca_sabao_em_po);
        if(item.unidades_sabao_em_po != '') itensFiltrados = itensFiltrados.filter(i => i.unidades_sabao_em_po == item.unidades_sabao_em_po);
        if(item.quantidade_sabao_em_po != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_sabao_em_po == item.quantidade_sabao_em_po);
        break;
      case 'agua_sanitaria':
        if(item.marca_agua_sanitaria != '') itensFiltrados = itensFiltrados.filter(i => i.marca_agua_sanitaria == item.marca_agua_sanitaria);
        if(item.unidades_agua_sanitaria != '') itensFiltrados = itensFiltrados.filter(i => i.unidades_agua_sanitaria == item.unidades_agua_sanitaria);
        if(item.quantidade_agua_sanitaria != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_agua_sanitaria == item.quantidade_agua_sanitaria);
        break;
      case 'sabao_em_barra':
        if(item.marca_sabao_em_barra != '') itensFiltrados = itensFiltrados.filter(i => i.marca_sabao_em_barra == item.marca_sabao_em_barra);
        if(item.unidades_sabao_em_barra != '') itensFiltrados = itensFiltrados.filter(i => i.unidades_sabao_em_barra == item.unidades_sabao_em_barra);
        if(item.quantidade_sabao_em_barra != '') itensFiltrados = itensFiltrados.filter(i => i.quantidade_sabao_em_barra == item.quantidade_sabao_em_barra);
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

// funções que guardam os dados em sessionStorage
function cadastrarAlvejante(){
  let id = document.getElementById('id_alvejante');
  let marca = document.getElementById('marca_alvejante');
  let unidades = document.getElementById('unidades_alvejante');
  let quantidade = document.getElementById('quantidade_alvejante');

  let alvejante = new Alvejante((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value,
                                'limpeza',
                                'alvejante');

  if(alvejante.validarDados()){
    bd.gravar(id.innerText, alvejante);
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


  let sabaoEmPo = new SabaoEmPo((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value,
                                'limpeza',
                                'sabao_em_po');

  if(sabaoEmPo.validarDados()){
    bd.gravar(id.innerText, sabaoEmPo);
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


  let aguaSanitaria = new AguaSanitaria((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value,
                                'limpeza',
                                'agua_sanitaria');

  if(aguaSanitaria.validarDados()){
    bd.gravar(id.innerText, aguaSanitaria);
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


  let sabaoEmBarra = new SabaoEmBarra((id.innerText == '0') ? bd.getProximoId() : id.innerText,
                                marca.value,
                                unidades.value,
                                quantidade.value,
                                'limpeza',
                                'sabao_em_barra');

  if(sabaoEmBarra.validarDados()){
    bd.gravar(id.innerText, sabaoEmBarra);
    alert('dados gravados');
    carregaListaItens('tab_sabao_em_barra');
  }else {
    alert('Dados incorretos');
  }

}

function limpaTela(idTab){
  switch (idTab) {
    case 'tab_alvejante':
      document.getElementById('id_alvejante').innerText = 0;
      document.getElementById('marca_alvejante').value = '';
      document.getElementById('unidades_alvejante').value = '';
      document.getElementById('quantidade_alvejante').value = '';
      break;
    case 'tab_sabao_em_po':
      document.getElementById('id_sabao_em_po').innerText = 0;
      document.getElementById('marca_sabao_em_po').value = '';
      document.getElementById('unidades_sabao_em_po').value = '';
      document.getElementById('quantidade_sabao_em_po').value = '';
      break;
    case 'tab_agua_sanitaria':
      document.getElementById('id_agua_sanitaria').innerText = 0;
      document.getElementById('marca_agua_sanitaria').value = '';
      document.getElementById('unidades_agua_sanitaria').value = '';
      document.getElementById('quantidade_agua_sanitaria').value = '';
      break;
    case 'tab_sabao_em_barra':
      document.getElementById('id_sabao_em_barra').innerText = 0;
      document.getElementById('marca_sabao_em_barra').value = '';
      document.getElementById('unidades_sabao_em_barra').value = '';
      document.getElementById('quantidade_sabao_em_barra').value = '';
      break;
  }
}

function deletarItem(id, subtipo){
  if(confirm("Deseja DELETAR o Item?") == true){
    bd.deletar(id);
    carregaListaItens(subtipo);
    limpaTela(subtipo);
  }
}

  // carrega o item clicado na tabela para a o formulario
function carregarItem(id){
  var item = JSON.parse(sessionStorage.getItem(id));
  if(item != null)
  switch (item.subtipo){
    case 'alvejante':
      document.getElementById('id_alvejante').innerText = item.id_alvejante;
      document.getElementById('marca_alvejante').value = item.marca_alvejante;
      document.getElementById('unidades_alvejante').value = item.unidades_alvejante;
      document.getElementById('quantidade_alvejante').value = item.quantidade_alvejante;
      break;
    case 'sabao_em_po':
      document.getElementById('id_sabao_em_po').innerText = item.id_sabao_em_po;
      document.getElementById('marca_sabao_em_po').value = item.marca_sabao_em_po;
      document.getElementById('unidades_sabao_em_po').value = item.unidades_sabao_em_po;
      document.getElementById('quantidade_sabao_em_po').value = item.quantidade_sabao_em_po;
      break;
    case 'agua_sanitaria':
      document.getElementById('id_agua_sanitaria').innerText = item.id_agua_sanitaria;
      document.getElementById('marca_agua_sanitaria').value = item.marca_agua_sanitaria;
      document.getElementById('unidades_agua_sanitaria').value = item.unidades_agua_sanitaria;
      document.getElementById('quantidade_agua_sanitaria').value = item.quantidade_agua_sanitaria;
      break;
    case 'sabao_em_barra':
      document.getElementById('id_sabao_em_barra').innerText = item.id_sabao_em_barra;
      document.getElementById('marca_sabao_em_barra').value = item.marca_sabao_em_barra;
      document.getElementById('unidades_sabao_em_barra').value = item.unidades_sabao_em_barra;
      document.getElementById('quantidade_sabao_em_barra').value = item.quantidade_sabao_em_barra;
      break;
  }
}

// cria a lista de itens na tabela
function carregaListaItens(idTab){
  let itens = Array();
  itens = bd.recuperarTodosRegistros();
  switch (idTab) {
    case 'tab_alvejante':
      let lista_alvejante = document.getElementById('lista_alvejante');
      lista_alvejante.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'alvejante'){
          let linha = lista_alvejante.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_alvejante;
          linha.insertCell(1).innerHTML = item.marca_alvejante;
          linha.insertCell(2).innerHTML = item.unidades_alvejante;
          linha.insertCell(3).innerHTML = item.quantidade_alvejante;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(4).appendChild(btn);

        }

      });
      break;
    case 'tab_sabao_em_po':
      let lista_sabao_em_po = document.getElementById('lista_sabao_em_po');
      lista_sabao_em_po.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'sabao_em_po'){
          let linha = lista_sabao_em_po.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_sabao_em_po;
          linha.insertCell(1).innerHTML = item.marca_sabao_em_po;
          linha.insertCell(2).innerHTML = item.unidades_sabao_em_po;
          linha.insertCell(3).innerHTML = item.quantidade_sabao_em_po;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(4).appendChild(btn);
        }
      });
      break;
    case 'tab_agua_sanitaria':
      let lista_agua_sanitaria = document.getElementById('lista_agua_sanitaria');
      lista_agua_sanitaria.innerHTML = '';
      itens.forEach((item, i) => {
        if (item.subtipo == 'agua_sanitaria'){
          let linha = lista_agua_sanitaria.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_agua_sanitaria;
          linha.insertCell(1).innerHTML = item.marca_agua_sanitaria;
          linha.insertCell(2).innerHTML = item.unidades_agua_sanitaria;
          linha.insertCell(3).innerHTML = item.quantidade_agua_sanitaria;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(4).appendChild(btn);
        }
      });
      break;
    case 'tab_sabao_em_barra':
      let lista_sabao_em_barra = document.getElementById('lista_sabao_em_barra');
      lista_sabao_em_barra.innerHTML = '';
      itens.forEach((item, i) => {
        if(item.subtipo == 'sabao_em_barra'){
          let linha = lista_sabao_em_barra.insertRow();
          linha.addEventListener('click', () => {
            carregarItem(linha.cells[0].innerText);
          });
          linha.insertCell(0).innerHTML = item.id_sabao_em_barra;
          linha.insertCell(1).innerHTML = item.marca_sabao_em_barra;
          linha.insertCell(2).innerHTML = item.unidades_sabao_em_barra;
          linha.insertCell(3).innerHTML = item.quantidade_sabao_em_barra;
          let btn = document.createElement('BUTTON');
          btn.classList.add('btn-deletar');
          btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
          btn.onclick = function () {
            deletarItem(linha.cells[0].innerText, idTab);
          }
          linha.insertCell(4).appendChild(btn);
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
    case 'alvejante':
      let id_alvejante = document.getElementById('id_alvejante').innerText;
      let marca_alvejante = document.getElementById('marca_alvejante').value;
      let unidades_alvejante = document.getElementById('unidades_alvejante').value;
      let quantidade_alvejante = document.getElementById('quantidade_alvejante').value;

      let alvejante = new Alvejante(id_alvejante, marca_alvejante, unidades_alvejante, quantidade_alvejante, 'limpeza', 'alvejante');
      itensFiltrados = bd.pesquisar(alvejante);

      let lista_alvejante = document.getElementById('lista_alvejante');
      lista_alvejante.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_alvejante.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_alvejante;
        linha.insertCell(1).innerHTML = item.marca_alvejante;
        linha.insertCell(2).innerHTML = item.unidades_alvejante;
        linha.insertCell(3).innerHTML = item.quantidade_alvejante;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_alvejante');
        }
        linha.insertCell(4).appendChild(btn);
      });
      break;
    case 'agua_sanitaria':
      let id_agua_sanitaria = document.getElementById('id_agua_sanitaria').innerText;
      let marca_agua_sanitaria = document.getElementById('marca_agua_sanitaria').value;
      let unidades_agua_sanitaria = document.getElementById('unidades_agua_sanitaria').value;
      let quantidade_agua_sanitaria = document.getElementById('quantidade_agua_sanitaria').value;

      let aguaSanitaria = new AguaSanitaria(id_agua_sanitaria, marca_agua_sanitaria, unidades_agua_sanitaria, quantidade_agua_sanitaria, 'limpeza', 'agua_sanitaria');
      itensFiltrados = bd.pesquisar(aguaSanitaria);

      let lista_agua_sanitaria = document.getElementById('lista_agua_sanitaria');
      lista_agua_sanitaria.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_agua_sanitaria.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_agua_sanitaria;
        linha.insertCell(1).innerHTML = item.marca_agua_sanitaria;
        linha.insertCell(2).innerHTML = item.unidades_agua_sanitaria;
        linha.insertCell(3).innerHTML = item.quantidade_agua_sanitaria;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_agua_sanitaria');
        }
        linha.insertCell(4).appendChild(btn);

      });
      break;
    case 'sabao_em_po':
      let id_sabao_em_po = document.getElementById('id_sabao_em_po').innerText;
      let marca_sabao_em_po = document.getElementById('marca_sabao_em_po').value;
      let unidades_sabao_em_po = document.getElementById('unidades_sabao_em_po').value;
      let quantidade_sabao_em_po = document.getElementById('quantidade_sabao_em_po').value;

      let sabaoEmPo = new SabaoEmPo(id_sabao_em_po, marca_sabao_em_po, unidades_sabao_em_po, quantidade_sabao_em_po, 'limpeza', 'sabao_em_po');
      itensFiltrados = bd.pesquisar(sabaoEmPo);

      let lista_sabao_em_po = document.getElementById('lista_sabao_em_po');
      lista_sabao_em_po.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_sabao_em_po.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_sabao_em_po;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_po;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_po;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_po;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_sabao_em_po');
        }
        linha.insertCell(4).appendChild(btn);

      });
      break;
    case 'sabao_em_barra':
      let id_sabao_em_barra = document.getElementById('id_sabao_em_barra').innerText;
      let marca_sabao_em_barra = document.getElementById('marca_sabao_em_barra').value;
      let unidades_sabao_em_barra = document.getElementById('unidades_sabao_em_barra').value;
      let quantidade_sabao_em_barra = document.getElementById('quantidade_sabao_em_barra').value;

      let sabaoEmBarra = new SabaoEmBarra(id_sabao_em_barra, marca_sabao_em_barra, unidades_sabao_em_barra, quantidade_sabao_em_barra, 'limpeza', 'sabao_em_barra');
      itensFiltrados = bd.pesquisar(sabaoEmBarra);

      let lista_sabao_em_barra = document.getElementById('lista_sabao_em_barra');
      lista_sabao_em_barra.innerHTML = '';

      itensFiltrados.forEach((item, i) => {
        let linha = lista_sabao_em_barra.insertRow();
        linha.addEventListener('click', () => {
          carregarItem(linha.cells[0].innerText);
        });
        linha.insertCell(0).innerHTML = item.id_sabao_em_barra;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_barra;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_barra;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_barra;
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn-deletar');
        btn.innerHTML = '<span class="material-symbols-rounded">delete</span>';
        btn.onclick = function () {
          deletarItem(linha.cells[0].innerText, 'tab_sabao_em_barra');
        }
        linha.insertCell(4).appendChild(btn);

      });
      break;

  }
}


// comando para marcar a primeira aba
document.getElementById('tab-padrao').click();
