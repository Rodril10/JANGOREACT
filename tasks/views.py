from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.

class taskview(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


# Create your views here.
