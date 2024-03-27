export default class Carrinho {

    controller = {
        insertCarrinho: (
            async () => {
                let id = document.querySelector("#user-id").value
                let produto_id = document.querySelector("#produto-id").value
                let quantidade = document.querySelector("#quantidade").value
                fetch(`http://127.0.0.1:8003/carrinho/${id}/add?produto_id=${produto_id}&quantidade=${quantidade}`, {method: "POST"})
                .then((res) => { 
                    return res.json()
                }).then(data => {
                    alert(data.mensagem) 
                })
            }
        ),
        getCarrinhoById: (
            async () => {
                let id = document.querySelector("#user-id-consulta").value
                fetch(`http://127.0.0.1:8003/carrinho/${id}`)
                .then((res) => { 
                    return res.json()
                })
                .then((data) => {
                    alert("O usuário possui um carrinho")
                })
            }
        )
    }

    title = "Produtos"
    body = {
        innerHTML: `
            <h1>Novo carrinho</h1>
            <div class="d-flex gap-1 mb-4">
                <input class="form-control" placeholder="ID do usuário" type="number" id="user-id">
                <input class="form-control" placeholder="ID do produto" type="number" id="produto-id">
                <input class="form-control" placeholder="Quantidade" type="number" id="quantidade">
                <button class="btn btn-primary" onclick="controller.insertCarrinho()">Adicionar</button>
            </div>
            <div id="pedidos-list"></div>

            <h1>Consultar pedido</h1>
            <div class="d-flex gap-1 mb-4">
                <input class="form-control" placeholder="ID do usuário" type="number" id="user-id-consulta">
                <button class="btn btn-primary" onclick="controller.getCarrinhoById()">Consultar</button>
            </div>
        `,
        // onload: awaitDom(this.controller.getAllProdutos)
    }
}