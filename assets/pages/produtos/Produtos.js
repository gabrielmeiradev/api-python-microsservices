export default class Produtos {
    _getAllProdutos() {
        return fetch("http://127.0.0.1:8002/produtos")
        .then(res => {return res.json()})
    }

    controller = {
        getAllProdutos: () => {
            const listElem = document.querySelector("#produtos-list");
            this._getAllProdutos().then((data) => {
                console.log(data)
            })
        }
    }

    title = "Produtos"
    body = `
        <h1>Teste</h1>
        <div id="produtos-list" onload="controller.getAllProdutos()"></div>
    `
}