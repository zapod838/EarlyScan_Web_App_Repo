# mydjangoapp/views.py

from django.http import HttpResponse

def home_view(request):
    return HttpResponse("Welcome to the EarlyScan API. Please use the appropriate endpoints.")
