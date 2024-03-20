from fastapi import FastAPI
import random

from shared.find_all_in_cache import find_all_in_cache
from shared.save_cache import save_cache
from shared.find_in_cache import find_in_cache
app = FastAPI()

@app.post("/pedido/{user_id}/add")
async def criar_pedido(user_id):
    order_id = random.randint(1, 9999)
    try:
        save_cache("pedido_service.txt", {"user_id": user_id, "order_id": order_id})
    except:
        return {"status": "erro", "mensagem": "Falha ao criar pedido"}
    finally:
        return {"status": "sucesso", "mensagem": "Pedido criado", "order_id": order_id}

@app.get("/pedido/{order_id}")
async def get_pedido(order_id: int):
    return find_in_cache("pedido_service.txt", "order_id", order_id)

@app.get("/pedidos/{user_id}")
async def get_pedidos_by_userid(user_id: str):
    return find_all_in_cache("pedido_service.txt", "user_id", user_id)