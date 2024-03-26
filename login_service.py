from fastapi import FastAPI, HTTPException
from shared.find_in_cache import find_in_cache

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

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


@app.post("/login")
async def login(username: str, password: str):
    user = find_in_cache("login_service.txt", "username", username)
    if(user):
        print(user)
        if(user["password"] == password): 
            return {"status": "sucesso", "mensagem": "Usuário autenticado"}
        else:
            raise HTTPException(status_code=401, detail="Credenciais inválidas")
    else:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")


