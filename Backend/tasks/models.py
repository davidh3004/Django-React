from django.db import models
from django.utils.timezone import now


# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    dateCreated = models.DateTimeField(default=now)
    dateUpdated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title