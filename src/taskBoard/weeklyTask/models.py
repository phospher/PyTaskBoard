from django.db import models


class Task(models.Model):

    class Meta:
        db_table = 'task'

    id = models.AutoField(primary_key=True)
    task_week = models.CharField(max_length=50)
    last_week = models.TextField()
    next_week = models.TextField()
    created_user = models.CharField(max_length=200)
    created_time = models.DateTimeField(auto_now=True)
