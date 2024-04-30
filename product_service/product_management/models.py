from django.db import models

# Create your models here.
# from django.contrib.auth.models import User
# Create your models here.

class Product(models.Model):
    pname = models.CharField(max_length=255, blank=True)
    price = models.FloatField(blank=True)
    stock = models.IntegerField(null=True)
    category = models.CharField(max_length=100, blank=True)
    pgroup = models.CharField(max_length=50, blank=True)
    ent = models.CharField(max_length=200, blank=True)
    img_url = models.CharField(max_length=200, blank=True)

class ProductMaincart(models.Model):
    pname = models.CharField(max_length=255, blank=True)
    price = models.FloatField(blank=True)
    stock = models.IntegerField(null=True)
    category = models.CharField(max_length=100, blank=True)
    pgroup = models.CharField(max_length=50, blank=True)
    ent = models.CharField(max_length=200, blank=True)
    img_url = models.CharField(max_length=200, blank=True)
    quantity = models.IntegerField(null=True)
    oid = models.IntegerField(null=True)
