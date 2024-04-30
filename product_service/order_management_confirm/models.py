
from django.db import models
from product_management.models import Product

# Create your models here.
class Order_confirm(models.Model):
    ouser = models.CharField(max_length=255, blank=False)
    oproduct = models.ForeignKey(Product, on_delete=models.CASCADE,to_field="id")
    quantity = models.IntegerField(null=True)


    
      