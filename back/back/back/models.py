from django.db import models

class Town(models.Model):
    insee_code = models.CharField(primary_key=True, max_length=5)
    name = models.CharField(max_length=100)

class Event(models.Model):
    town = models.ForeignKey(Town, on_delete=models.CASCADE)
    year = models.IntegerField()
    description = models.CharField(max_length=255)
    count = models.IntegerField(default=0)
