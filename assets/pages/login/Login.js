export default class Login {
    title = "Login"

    _authenticate(user, pass) {
        return fetch(`http://127.0.0.1:8001/login?username=${user}&password=${pass}`, {method: "POST"})
        .then(res => { return res.json() })
    }

    controller = {
        login: async () => {
            const user = document.querySelector('#user').value;
            const pass = document.querySelector('#pass').value;
            let response = this._authenticate(user, pass);
            response.then((data) => {
                if(data.status && data.status == "sucesso"){
                    alert(data.mensagem)
                }
            });
        }
    }
    
    body = {
        innerHTML: `
            <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                <div class="container w-50 text-center">
                    <h1>Login</h1>
                    <input class="form-control mb-2" placeholder="Digite o usuário" id="user">
                    <input class="form-control mb-3" placeholder="Digite sua senha" type="password" id="pass">
                    <button class="btn btn-primary w-100" onclick="controller.login()">Entrar</button>
                </div>
            </div>
        `
    }
}