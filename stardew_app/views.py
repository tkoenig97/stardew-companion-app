from django.http import HttpResponse

# Create your views here.
def react_index(request):
    index = open('static/index.html')
    return HttpResponse(index)