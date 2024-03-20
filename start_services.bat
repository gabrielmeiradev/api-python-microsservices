cmd /c python3 -m uvicorn login_service:app --reload --port 8001
cmd /c python3 -m uvicorn produtos_service:app --reload --port 8002
cmd /c python3 -m uvicorn carrinho_service:app --reload --port 8003
cmd /c python3 -m uvicorn pedido_service:app --reload --port 8004