function limpaTela(){
  document.getElementById('subtipo').value = 0;
}

function recuperarTodosRegistros(){
  let itens = Array();
  let id = sessionStorage.getItem('id');

  for(let i = 1; i <= id; i++){
    let item = JSON.parse(sessionStorage.getItem(i));
    if(item === null) continue;
    itens.push(item);
  }
  return itens;
}

function criarTabela(tipo){
  var tabela = document.getElementById('tabela');
  tabela.innerHTML = '';
  var cabecalho = document.createElement('thead');
  var corpo = document.createElement('tbody');
  if (tipo == 'todos'){
    cabecalho.innerHTML = ['<tr><th>Tipo</th><th>Subtipo</th><th>Total</th></tr>'];
    let itens = Array();
    itens = recuperarTodosRegistros();

    var contAlvejante = 0;
    var contSabaoEmPo = 0;
    var contAguaSanitaria = 0;
    var contSabaoEmBarra = 0;
    var contLapis = 0;
    var contCaderno = 0;
    var contCaneta = 0;
    var contLivro = 0;
    var contQuadro = 0;
    var contGiz = 0;
    var contApagador = 0;
    var contPincel = 0;
    itens.forEach((item, i) => {
      if(item.subtipo == 'alvejante') contAlvejante += 1;
      if(item.subtipo == 'sabao_em_po') contSabaoEmPo += 1;
      if(item.subtipo == 'agua_sanitaria') contAguaSanitaria += 1;
      if(item.subtipo == 'sabao_em_barra') contSabaoEmBarra += 1;
      if(item.subtipo == 'lapis') contLapis += 1;
      if(item.subtipo == 'caderno') contCaderno += 1;
      if(item.subtipo == 'caneta') contCaneta += 1;
      if(item.subtipo == 'livro') contLivro += 1;
      if(item.subtipo == 'quadro') contQuadro += 1;
      if(item.subtipo == 'giz') contGiz += 1;
      if(item.subtipo == 'apagador') contApagador += 1;
      if(item.subtipo == 'pincel') contPincel += 1;
    });

    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Didatico';
    linha.insertCell(1).innerHTML = 'Livro';
    linha.insertCell(2).innerHTML = contLivro;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Didatico';
    linha.insertCell(1).innerHTML = 'Quadro';
    linha.insertCell(2).innerHTML = contQuadro;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Didatico';
    linha.insertCell(1).innerHTML = 'Giz';
    linha.insertCell(2).innerHTML = contGiz;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Didatico';
    linha.insertCell(1).innerHTML = 'Apagador';
    linha.insertCell(2).innerHTML = contApagador;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Didatico';
    linha.insertCell(1).innerHTML = 'Pincel';
    linha.insertCell(2).innerHTML = contPincel;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = '<hr>';
    linha.insertCell(1).innerHTML = '<hr>';
    linha.insertCell(2).innerHTML = '<hr>';
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Escolar';
    linha.insertCell(1).innerHTML = 'Lápis';
    linha.insertCell(2).innerHTML = contLapis;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Escolar';
    linha.insertCell(1).innerHTML = 'Caderno';
    linha.insertCell(2).innerHTML = contCaderno;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Escolar';
    linha.insertCell(1).innerHTML = 'Caneta';
    linha.insertCell(2).innerHTML = contCaneta;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = '<hr>';
    linha.insertCell(1).innerHTML = '<hr>';
    linha.insertCell(2).innerHTML = '<hr>';


    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Limpeza';
    linha.insertCell(1).innerHTML = 'Alvejante';
    linha.insertCell(2).innerHTML = contAlvejante;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Limpeza';
    linha.insertCell(1).innerHTML = 'Sabão em pó';
    linha.insertCell(2).innerHTML = contSabaoEmPo;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Limpeza';
    linha.insertCell(1).innerHTML = 'Água sanitária';
    linha.insertCell(2).innerHTML = contAguaSanitaria;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = 'Limpeza';
    linha.insertCell(1).innerHTML = 'Sabão em Barra';
    linha.insertCell(2).innerHTML = contSabaoEmBarra;
    var linha = corpo.insertRow();
    linha.insertCell(0).innerHTML = '<hr>';
    linha.insertCell(1).innerHTML = '<hr>';
    linha.insertCell(2).innerHTML = '<hr>';


    tabela.appendChild(cabecalho);
    tabela.appendChild(corpo);
    document.getElementById('container').appendChild(tabela);
  }else if(tipo == 'subtipo'){
    let subtipo = document.getElementById('subtipo').value;
    if(subtipo == 'alvejante'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Marca</th><th>Unidades</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_alvejante;
        linha.insertCell(1).innerHTML = item.marca_alvejante;
        linha.insertCell(2).innerHTML = item.unidades_alvejante;
        linha.insertCell(3).innerHTML = item.quantidade_alvejante;
      });

    }else if(subtipo == 'agua_sanitaria'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Marca</th><th>Unidades</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_agua_sanitaria;
        linha.insertCell(1).innerHTML = item.marca_agua_sanitaria;
        linha.insertCell(2).innerHTML = item.unidades_agua_sanitaria;
        linha.insertCell(3).innerHTML = item.quantidade_agua_sanitaria;
      });

    }else if(subtipo == 'sabao_em_po'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Marca</th><th>Unidades</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_sabao_em_po;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_po;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_po;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_po;
      });

    }else if(subtipo == 'sabao_em_barra'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Marca</th><th>Unidades</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_sabao_em_barra;
        linha.insertCell(1).innerHTML = item.marca_sabao_em_barra;
        linha.insertCell(2).innerHTML = item.unidades_sabao_em_barra;
        linha.insertCell(3).innerHTML = item.quantidade_sabao_em_barra;
      });

    }else if(subtipo == 'lapis'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Marca</th><th>Tipo</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_lapis;
        linha.insertCell(1).innerHTML = item.altura_lapis;
        linha.insertCell(2).innerHTML = item.marca_lapis;
        linha.insertCell(3).innerHTML = item.tipo_lapis;
        linha.insertCell(4).innerHTML = item.quantidade_lapis;
      });

    }else if(subtipo == 'caderno'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Largura</th><th>Materias</th><th>Folhas</th><th>Marca</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_caderno;
        linha.insertCell(1).innerHTML = item.altura_caderno;
        linha.insertCell(2).innerHTML = item.largura_caderno;
        linha.insertCell(3).innerHTML = item.materias_caderno;
        linha.insertCell(4).innerHTML = item.folhas_caderno;
        linha.insertCell(5).innerHTML = item.marca_caderno;
        linha.insertCell(6).innerHTML = item.quantidade_caderno;
      });

    }else if(subtipo == 'caneta'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Cor</th><th>Marca</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_caneta;
        linha.insertCell(1).innerHTML = item.altura_caneta;
        linha.insertCell(2).innerHTML = item.cor_caneta;
        linha.insertCell(3).innerHTML = item.marca_caneta;
        linha.insertCell(4).innerHTML = item.quantidade_caneta;
      });

    }else if(subtipo == 'livro'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Titulo</th><th>Altor</th><th>Paginas</th><th>Editora</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_livro;
        linha.insertCell(1).innerHTML = item.titulo_livro;
        linha.insertCell(2).innerHTML = item.autor_livro;
        linha.insertCell(3).innerHTML = item.paginas_livro;
        linha.insertCell(4).innerHTML = item.editora_livro;
        linha.insertCell(5).innerHTML = item.quantidade_livro;
      });

    }else if(subtipo == 'quadro'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Largura</th><th>Marca</th><th>Tipo</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_quadro;
        linha.insertCell(1).innerHTML = item.altura_quadro;
        linha.insertCell(2).innerHTML = item.largura_quadro;
        linha.insertCell(3).innerHTML = item.marca_quadro;
        linha.insertCell(4).innerHTML = item.tipo_quadro;
        linha.insertCell(5).innerHTML = item.quantidade_quadro;
      });

    }else if(subtipo == 'giz'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Unidades</th><th>Marca</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_giz;
        linha.insertCell(1).innerHTML = item.altura_giz;
        linha.insertCell(2).innerHTML = item.unidades_giz;
        linha.insertCell(3).innerHTML = item.marca_giz;
        linha.insertCell(4).innerHTML = item.quantidade_giz;
      });

    }else if(subtipo == 'apagador'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Largura</th><th>Tipo</th><th>Marca</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_apagador;
        linha.insertCell(1).innerHTML = item.altura_apagador;
        linha.insertCell(2).innerHTML = item.largura_apagador;
        linha.insertCell(3).innerHTML = item.tipo_apagador;
        linha.insertCell(4).innerHTML = item.marca_apagador;
        linha.insertCell(5).innerHTML = item.quantidade_apagador;
      });

    }else if(subtipo == 'pincel'){
      cabecalho.innerHTML = ['<tr><th>Id</th><th>Altura</th><th>Cor</th><th>Marca</th><th>Quantidade</th></tr>']
      corpo.innerHTML = '';
      let itens = Array();
      itens = recuperarTodosRegistros();
      itens = itens.filter(i => i.subtipo == subtipo);
      itens.forEach((item, i) => {
        let linha = corpo.insertRow();
        linha.insertCell(0).innerHTML = item.id_pincel;
        linha.insertCell(1).innerHTML = item.altura_pincel;
        linha.insertCell(2).innerHTML = item.cor_pincel;
        linha.insertCell(3).innerHTML = item.marca_pincel;
        linha.insertCell(4).innerHTML = item.quantidade_pincel;
      });

    }



    tabela.appendChild(cabecalho);
    tabela.appendChild(corpo);
    document.getElementById('container').appendChild(tabela);
  }
}

function pesquisarItem(){
  var selectSubtipo = document.getElementById("subtipo");
  let subtipo = selectSubtipo.options[selectSubtipo.selectedIndex].value;
  if (subtipo != 0){
    criarTabela('subtipo');
  }else {
    criarTabela('todos');
  }
}
