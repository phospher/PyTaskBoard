from django.shortcuts import render
from weeklyTask.utils import no_need_login

def index(request):
    return render(request, 'index.html')


@no_need_login
def login(request):
    return render(request, 'login.html')
