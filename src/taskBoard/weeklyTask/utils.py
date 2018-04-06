from functools import wraps


def no_need_login(func):
    @wraps(func)
    def _decorator(*args, **kwargs):
        return func(*args, **kwargs)

    _decorator.need_login = False
    return _decorator
