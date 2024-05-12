from django.db import models

# Create your models here.
# タスクタイトル、タスク作成日、更新日
class Task(models.Model):
   title = models.CharField(max_length=50)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_add = models.DateTimeField(auto_now=True)
   
   # ↓がadminページのAPI名になる
   def __str__(self):
     return self.title