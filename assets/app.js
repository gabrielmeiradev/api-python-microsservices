import { Router } from "./pages/router.js";

window.onload = () => {
    const router = new Router();
    window.controller = router.getController();
}

