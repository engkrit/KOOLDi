
from django.db import models
from product_management.models import Product
# from user_management.models import Customer


# Create your models here.
class Order(models.Model):
    ouser = models.CharField(max_length=255, blank=False)
    oproduct = models.ForeignKey(Product, on_delete=models.CASCADE,to_field="id")
    quantity = models.IntegerField(null=True)


    
    