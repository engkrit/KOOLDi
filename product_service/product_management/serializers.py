from rest_framework import serializers
from product_management.models import Product
from product_management.models import ProductMaincart

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['id','pname', 'price', 'stock', 'category', 'pgroup','ent'] 

class ProductBulkCreateUpdateSerializer(serializers.ListSerializer):  
        def create(self, validated_data):  
            product_data = [Product(**item) for item in validated_data]  
            return Product.objects.bulk_create(product_data)  
      
class ProductSerializer(serializers.ModelSerializer):  
        class Meta:  
            model = Product  
            fields = ['id','pname', 'price', 'stock', 'category', 'pgroup','ent','img_url']
            read_only_fields = ['id',]  
            list_serializer_class = ProductBulkCreateUpdateSerializer  

class Product_MaincartSerializer(serializers.ModelSerializer):  
        class Meta:  
            model = ProductMaincart  
            fields = ['id','pname', 'price', 'stock', 'category', 'pgroup','ent','img_url','quantity', 'oid']
            read_only_fields = ['id',]  
            list_serializer_class = ProductBulkCreateUpdateSerializer  