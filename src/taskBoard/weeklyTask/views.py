from django.shortcuts import render, redirect
from .utils import no_need_login
from django.views.decorators.http import require_GET, require_POST
from .forms import LoginForm
from django.contrib.auth import authenticate, login as user_login
from django.http import JsonResponse, HttpResponseForbidden


@require_GET
def index(request):
    return render(request, 'index.html')


@require_GET
@no_need_login
def login(request):
    return render(request, 'login.html', {'redirect': request.GET['next']})


@require_POST
# @no_need_login
def check_login(request):
    login_form = LoginForm(request.POST)
    if login_form.is_valid():
        user = authenticate(
            request, username=login_form.cleaned_data['username'], password=login_form.cleaned_data['password'])
        if user is not None:
            user_login(request, user)
            return JsonResponse({'result': 'Success'})
        else:
            return JsonResponse({'result': 'Failure', 'message': 'username or password is invalid'})
    else:
        return JsonResponse({'result': 'Failure', 'message': login_form.errors.get_json_data()})
