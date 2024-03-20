import os

def save_cache(file_name:str, obj:object):
     path = os.path.abspath(f"./cache/{file_name}")
     with open(path, "a") as file:
            file.write(f"{repr(obj)}\n")