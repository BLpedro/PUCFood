var objeto1 = {
    id: 1,
    nome: "João",
    produtos: "Livros",
    valor: 100,
    predio: "A",
    sala: 101,
    situacao: "Aprovado"
  };
  
  var objeto2 = {
    id: 2,
    nome: "Maria",
    produtos: "Eletrônicos",
    valor: 500,
    predio: "B",
    sala: 202,
    situacao: "Reprovado"
  };
  
  // Função para adicionar um objeto à tabela
  function adicionarObjeto(objeto) {
    var tabela = document.getElementById("tabelaObjetos");
    var linha = tabela.insertRow(-1); // Insere uma nova linha no final da tabela
  
    // Insere as células na linha
    var idCelula = linha.insertCell(0);
    var nomeCelula = linha.insertCell(1);
    var produtosCelula = linha.insertCell(2);
    var valorCelula = linha.insertCell(3);
    var predioCelula = linha.insertCell(4);
    var salaCelula = linha.insertCell(5);
    var situacaoCelula = linha.insertCell(6);
  
    // Preenche as células com os valores do objeto
    idCelula.innerHTML = objeto.id;
    nomeCelula.innerHTML = objeto.nome;
    produtosCelula.innerHTML = objeto.produtos;
    valorCelula.innerHTML = objeto.valor;
    predioCelula.innerHTML = objeto.predio;
    salaCelula.innerHTML = objeto.sala;
    situacaoCelula.innerHTML = objeto.situacao;
  }
  
  // Adiciona os objetos à tabela
  adicionarObjeto(objeto1);
  adicionarObjeto(objeto2);

