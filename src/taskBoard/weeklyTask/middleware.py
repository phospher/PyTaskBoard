from django.contrib.auth.views import redirect_to_login


class LoginMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not request.user.is_authenticated:
            return redirect_to_login(request.path)
        else:
            return self.get_response(request)
