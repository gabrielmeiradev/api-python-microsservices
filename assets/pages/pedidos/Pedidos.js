export default class Pedidos {

    controller = {
        insertPedido: (
            async () => {
                let id = document.querySelector("#user-id").value
                fetch(`http://127.0.0.1:8004/pedido/${id}/add`, {method: "POST"})
                .then((res) => { 
                    return res.json()
                }).then(data => {
                    console.log(data)
                    alert("Pedido cadastrado com sucesso com id: " + data.order_id) 
                })
            }
        ),
        getPedidoById: (
            async () => {
                let id = document.querySelector("#order-id").value
                fetch(`http://127.0.0.1:8004/pedido/${id}`)
                .then((res) => { 
                    return res.json()
                })
                .then((data) => {
                    document.querySelector("#order-user-id").innerText = data.user_id;
                    document.querySelector("#order-order-id").innerText = data.order_id;
                })
            }
        )
    }

    title = "Produtos"
    body = {
        innerHTML: `
            <h1>Novo pedido</h1>
            <div class="d-flex gap-1 mb-4">
                <input class="form-control" placeholder="ID do usuário" type="number" id="user-id">
                <button class="btn btn-primary" onclick="controller.insertPedido()">Adicionar</button>
            </div>
            <div id="pedidos-list"></div>

            <h1>Consultar pedido</h1>
            <div class="d-flex gap-1 mb-4">
                <input class="form-control" placeholder="ID do pedido" type="number" id="order-id">
                <button class="btn btn-primary" onclick="controller.getPedidoById()">Consultar</button>
            </div>
            <div class="pedido-info">
            <p>Id do usuário: <span id="order-user-id"></p>
            <p>Id do pedido: <span id="order-order-id"></p>
            </div>
        `,
        // onload: awaitDom(this.controller.getAllProdutos)
    }
}