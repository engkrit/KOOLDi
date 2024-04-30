from django.contrib import admin

# Register your models here.
from user_management.models import Customer

admin.site.register(Customer)