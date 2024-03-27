import { awaitDom } from "../../services/awaitDom.js"


export default class Produtos {
    _getAllProdutos() {
        return fetch("http://127.0.0.1:8002/produtos")
        .then(res => {return res.json()})
    }

    controller = {
        getAllProdutos: async () => {
            const listElem = document.querySelector("#produtos-list");
            this._getAllProdutos().then((data) => {
                data.forEach(produto => {
                    console.log(produto)
                    const produtoItem = document.createElement("div");
                    produtoItem.style.justifyContent = "space-between"
                    produtoItem.classList.add("form-control", "mb-2", "d-flex", "align-items-center");
                    produtoItem.innerHTML = `
                        <span style="width: 10%">#${produto.id}</span>
                        <span style="width: 70%">${produto.nome}</span>
                        <span style="width: 10%">${produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                    `;
                    listElem.appendChild(produtoItem)
                })
            })
        },
        
        addProduto: (
            async () => {
                let id = document.querySelector("#id").value
                let nome = document.querySelector("#nome").value
                let preco = document.querySelector("#preco").value
                fetch(`http://127.0.0.1:8002/produtos?id=${id}&nome=${nome}&preco=${preco}`, {method: "POST"})
                .then((res) => { console.log(res) })
            }
        )
    }

    title = "Produtos"
    body = {
        innerHTML: `
            <h1>Produtos</h1>
            <div class="d-flex gap-1 mb-4">
                <input class="form-control" placeholder="ID do produto" type="number" id="id">
                <input class="form-control" placeholder="Nome do produto" id="nome">
                <input class="form-control" placeholder="Preço do produto" type="number" id="preco">
                <button class="btn btn-primary" onclick="controller.addProduto()">Adicionar</button>
            </div>
            <div id="produtos-list"></div>
        `,
        onload: () => {awaitDom(this.controller.getAllProdutos)}
    }
}