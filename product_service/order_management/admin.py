from django.contrib import admin

# Register your models here.
from order_management.models import Order

admin.site.register(Order)
