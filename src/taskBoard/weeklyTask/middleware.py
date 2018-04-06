from django.contrib.auth.views import redirect_to_login
from django.http import HttpResponseForbidden

class LoginMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_view(self, request, view_func, *view_args, **view_kwargs):
        if hasattr(view_func, 'need_login') and not view_func.need_login:
            return None

        if not request.user.is_authenticated:
            if request.is_ajax():
                return HttpResponseForbidden()
            else:
                return redirect_to_login(request.path)
        else:
            return None
