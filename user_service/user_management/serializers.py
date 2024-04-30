from rest_framework import serializers
from user_management.models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'firstname', 'lastname','address','province', 'district', 'subdistrict', 'tel']
