from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, viewsets
from django.contrib.auth.models import User
from .models import Task
from .serializers import TaskSerializer, UserSerializer

# ModelViewSetはデフォルトでCrudが使える
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = {AllowAny, }


# GETのみ
class ManageUserView(generics.RetrieveAPIView):
  serializer_class = UserSerializer
  authentication_classes = { TokenAuthentication, }
  permission_classes = {IsAuthenticated, }
  
  def get_object(self):
    return self.request.user
  
  
class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
  authentication_classes = { TokenAuthentication, }
  permission_classes = {IsAuthenticated, }