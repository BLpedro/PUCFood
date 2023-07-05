const express = require("express")
const { listen } = require("express/lib/application")
const server = express()
const router = express.Router()
const fs = require('fs')
server.use(express.json({extended: true}))
server.use(router)

const readFile = () => {
    const content = fs.readFileSync('./data/locais.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/locais.json', updateFile, 'utf-8')
}


router.get('/', (req, res) => {
    const content = readFile() 
    res.send(content)
})

router.post('/cadastro', (req, res) => {
    const { nome, telefone, endereco } = req.body;
    const currentContent = readFile();
    const id = Math.random().toString(32).substring(1, 9);
    currentContent.push({ id, nome, telefone, endereco });
    writeFile(currentContent);
    res.send({ id, nome, telefone, endereco });
});

router.put('/:id', (req, res) => {
    const {id} = req.params
    const { nome, telefone, endereco} = req.body

    const currentContent = readFile()
   const selectedItem = currentContent.findIndex((item) => item.id === id)

   const { id: cid, nome: cnome, telefone: ctelefone, endereco: cendereco} = currentContent[selectedItem]

   const newObject = {
    id: cid,
    nome: cnome ? nome: cnome,
    telefone: ctelefone ? telefone: ctelefone,
    endereco: cendereco ? endereco: cendereco,
   }
    currentContent[selectedItem] = newObject
    writeFile(currentContent)
   res.send(newObject)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    res.send(true)
})


server.listen(3000, () => {
    console.log("server on")
})

function criarObjeto() {
    var nome = document.getElementById("idNome").value;
    var predio = document.getElementById("idPredio").value;
    var sala = document.getElementById("sala").value;
  
    var item = {
        id: 1,
        nome: nome,
        produtos: coxinha,
        valor: 2.50,
        predio: predio,
        sala: sala,
        situacao: Entregue
    };

    var objetoDiv = document.getElementById("objetoCriado");
    objetoDiv.innerHTML = `
    <tr>
      <td>${item.id}</td>
      <td>${item.nome}</td>
      <td>${item.produtos}</td>
      <td>${item.valor}</td>
      <td>${item.predio}</td>
      <td>${item.sala}</td>
      <td>${item.situacao}</td>
    </tr>
  `;

  localStorage.setItem('objetoCriado', JSON.stringify(novoObjeto));

}


var excluirProduto = document.createElement("div");
excluirProduto.classList.add("excluir-produto");
excluirProduto.innerHTML = "Excluir";
excluirProduto.style.color = "red";
excluirProduto.style.border = "none";
excluirProduto.addEventListener("click", function() {
  item.remove();
});




var objetos = []; // Array para armazenar os objetos

function preencherTabela() {
    var tabela = document.getElementById("tabela-objetos");
    var tbody = tabela.getElementsByTagName("tbody")[0];

    // Limpa o conteúdo da tabela antes de preenchê-la novamente
    tbody.innerHTML = "";

    // Itera sobre os objetos no array e adiciona as linhas à tabela
    for (var i = 0; i < objetos.length; i++) {
        var objeto = objetos[i];

        var row = document.createElement("tr");
        row.innerHTML = "<td>" + objeto.id + "</td>" +
                        "<td>" + objeto.nome + "</td>" +
                        "<td>" + objeto.produtos + "</td>" +
                        "<td>" + objeto.valor + "</td>" +
                        "<td>" + objeto.predio + "</td>" +
                        "<td>" + objeto.sala + "</td>" +
                        "<td>" + objeto.situacao + "</td>";

        tbody.appendChild(row);
    }
}

function adicionarObjeto(event) {
    event.preventDefault(); // Evita o recarregamento da página

    var nome = document.getElementById("input-nome").value;
    var predio = document.getElementById("input-predio").value;
    var sala = document.getElementById("input-sala").value;

    var produtosElement = document.getElementById("produto");
    var produtos = produtosElement.textContent;

    var objeto = {
        id: objetos.length + 1,
        nome: nome,
        produtos: produtos,
        valor: "2.50",
        predio: predio,
        sala: sala,
        situacao: "Entregue"
    };

    objetos.push(objeto);
    preencherTabela();

    // Limpa os campos de entrada do formulário
    document.getElementById("input-nome").value = "";
    document.getElementById("input-predio").value = "";
    document.getElementById("input-sala").value = "";
}

document.getElementById("form-objeto").addEventListener("submit", adicionarObjeto);
