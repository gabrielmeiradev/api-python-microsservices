
from shared.cache_object import cache_object

def find_in_cache(file_name: str, key: str, value: str):
    cache = cache_object(file_name)
    for obj in cache:
        key_value = obj[key]
        if(key_value == value): return obj
    return []
