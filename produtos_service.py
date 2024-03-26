from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from shared.find_all_in_cache import find_all_in_cache
from shared.save_cache import save_cache
from shared.find_in_cache import find_in_cache

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/produtos")
async def add_produto(id: int, nome: str, preco: float):
    try:
        save_cache("produtos_service.txt", {"id": id, "nome": nome, "preco": preco})
    except:
        return {"status": "erro", "mensagem": "Erro ao adicionar"}
    finally:
        return {"status": "sucesso", "mensagem": "Produto criado"}

@app.get("/produtos")
async def listar_produtos():
    return find_all_in_cache("produtos_service.txt")

@app.get("/produtos/{product_id}")
async def get_produto(product_id: int):
    return find_in_cache("produtos_service.txt", "id", product_id)