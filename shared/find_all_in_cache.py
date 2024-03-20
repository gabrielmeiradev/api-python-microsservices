from shared.cache_object import cache_object

def find_all_in_cache(file_name: str, key: str | bool = False, value: str | bool = False):
    cache = cache_object(file_name)
    out = []
    for obj in cache:
        if(not key or not value):
            out.append(obj)
            continue
        key_value = obj[key]
        if(key_value == value): out.append(obj)
    return out