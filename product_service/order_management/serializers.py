from rest_framework import serializers
from order_management.models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['ouser','oproduct', 'quantity'] 