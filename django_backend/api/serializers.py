from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
  
  # 内部制御：シリアライズ＝バイナリデータ変換？
  class Meta:
    model = User
    
    # responseで表示する内容
    fields = ['id', 'username', 'password']
    extra_kwargs = {'password':{'write_only':True, 'required':True}}
    
  # シリアライズ後の処理 
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    Token.objects.create(user=user)
    return user
  
  
class TaskSerializer(serializers.ModelSerializer):
  
  created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
  updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
  
  class Meta:
    model = Task
    fields = ['id', 'title', 'created_at', 'updated_at']