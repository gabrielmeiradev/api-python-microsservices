import Index from "./index/Index.js"
import Produtos from "./produtos/Produtos.js"
import Login from "./login/Login.js"

export class Router {
    constructor() {
        this._loadActualRoute()

        window.addEventListener("hashchange", () => {
            this._loadActualRoute()
        })
    }

    routes = {
        "": new Index(),
        "produtos": new Produtos(),
        "login": new Login()
    }

    _hashInRoutes = () => {
        const currentHash = location.hash.replace("#", "")
        const routeInRoutes = this.routes[currentHash]
        return routeInRoutes
    }
    
    _loadActualRoute = () => {
        const page = this._hashInRoutes()
        if(!page) return alert("Página não encontrada")
        
        document.title = page.title

        Object.keys(page.body).forEach(key => {
            document.body[key] = page.body[key];
        });

        if (page.style) document.querySelector("#styled").innerHTML = page.style;
        if (page.controller) this.setController(page.controller);
    }

    addRoute = (routeObject) => {
        this.routes.push(routeObject)
    }

    setController(controller){
        this.controller = controller;
    }

    getController = () => {
        return this.controller;
    }

}