from rest_framework import serializers
from order_management_confirm.models import Order_confirm

class Order_confirmBulkCreateUpdateSerializer(serializers.ListSerializer):  
        def create(self, validated_data):  
            product_data = [Order_confirm(**item) for item in validated_data]  
            return Order_confirm.objects.bulk_create(product_data)  
      
class Order_confirmSerializer(serializers.ModelSerializer):  
        class Meta:  
            model = Order_confirm  
            fields = ['id','oproduct', 'quantity'] 
            read_only_fields = ['id',]  
            list_serializer_class = Order_confirmBulkCreateUpdateSerializer  