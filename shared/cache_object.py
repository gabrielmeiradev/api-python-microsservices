import os
def cache_object(file_name: str) -> list:
    path = os.path.abspath(f"./cache/{file_name}")
    cache = []
    try:
        with open(path, "r") as file:
            for line in file:
                cache.append(eval(line))
    except FileNotFoundError:
        pass
    return cache