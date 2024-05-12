from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from api.views import TaskViewSet, UserViewSet, ManageUserView

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    #viewsetではないgenerics.RetrieveAPIViewではroutersが使えないので、.as_view()を使用
    path('myself/', ManageUserView.as_view(), name='myself'),
    path('', include(router.urls)),
]