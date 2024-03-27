export default class Index {
    title = "Página principal"

    body = {
        innerHTML: `
            <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center">Microsserviços + <br />Single Page Application</h1>
                <h6" class="mt-3 mb-3">Desenvolvido por Gabriel Meira</h6">
                <div class="d-flex gap-2 mt-3">
                    <a href='#login' class="btn btn btn-outline-dark d-flex gap-1">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        Login
                    </a>
                    <a href='#produtos' class="btn btn btn-outline-dark d-flex gap-1">
                        <span class="material-symbols-outlined">
                            shopping_basket
                        </span>
                        Produtos
                    </a>
                    <a href='#carrinho' class="btn btn btn-outline-dark d-flex gap-1">
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        Carrinho
                    </a>
                    <a href='#pedidos' class="btn btn btn-outline-dark d-flex gap-1">
                        <span class="material-symbols-outlined">
                            receipt_long
                        </span>
                        Pedido
                    </a>
                </div>
            </div>
        `
    }
}