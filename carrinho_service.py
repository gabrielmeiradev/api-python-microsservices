from fastapi import FastAPI

from shared.save_cache import save_cache
from shared.find_in_cache import find_in_cache

app = FastAPI()


@app.post("/carrinho/{user_id}/add")
async def add_carrinho(user_id: int, produto_id: int, quantidade: int):
    try:
        save_cache("carrinho_service.txt", {"user_id": user_id, "produto_id": produto_id, "quantidade": quantidade})
    except:
        return {"status": "erro", "mensagem": "Erro ao adicionar"}
    finally:
        return {"status": "sucesso", "mensagem": "Produto adicionado ao carrinho"}

@app.get("/carrinho/{user_id}")
async def get_carrinho(user_id: int):
    return find_in_cache("carrinho_service.txt", "user_id", user_id)
