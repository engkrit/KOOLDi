from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
# from django.contrib.auth.models import User
from product_management.models import Product
from product_management.serializers import ProductSerializer
from product_management.serializers import Product_MaincartSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status  
from django.db import connection

# @csrf_exempt
# def addproduct(request):
#     if request.method == "POST":
#         data = JSONParser().parse(request)

#         product_serializer = ProductSerializer(data=data)
#         if product_serializer.is_valid():
#             new_product = product_serializer.save()
#             return JsonResponse(product_serializer.data, status=201)
#         return JsonResponse(product_serializer.errors, status=400)
#     return JsonResponse({"error":"method not allowed."}, status=405)

# class ProductView(APIView):
#     # permission_classes = [IsAuthenticated]
#     def get(self, request, format=None):
#         products = Product.objects.all()
#         Product_serializer = ProductSerializer(products,many=True)
#         content = {
#             'data': Product_serializer.data
#         }
#         return Response(content)
class ProductView(generics.ListCreateAPIView):  
        queryset = Product.objects.all()  
        serializer_class = ProductSerializer  
        def create(self, request, *args, **kwargs):  
            serializer = self.get_serializer(data=request.data, many=True)  
            serializer.is_valid(raise_exception=True)  
      
            try:  
                self.perform_create(serializer)  
                return Response(serializer.data, status=status.HTTP_201_CREATED)  
            except:  
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class search_product(generics.ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        if self.request.method == 'GET':
            queryset = Product.objects.all()
            state_name = self.request.GET.get('id', None)
            if state_name is not None:
               queryset = queryset.filter(id=state_name)
            return queryset

def search_order(request, id):
    # ดึงข้อมูลจากฐานข้อมูลโดยใช้ id ที่รับมาจาก parameter
    try:
        # data = []   
        obj = Product.objects.get(id=id)
        # หากพบข้อมูล
        Product_serializer = ProductSerializer(obj)
        content =  Product_serializer.data
        # data.append(JsonResponse(content)) 
        return JsonResponse(content)

    except Product.DoesNotExist:
        # หากไม่พบข้อมูล
        return JsonResponse({'error': 'Data not found'}, status=404)
    
class search_bestseller(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            query = "SELECT p.*,sum(quantity) as quantity FROM product_management_product p INNER JOIN order_management_confirm_order_confirm o  ON p.id = o.oproduct_id GROUP BY 1 ORDER BY quantity DESC LIMIT 6"
            queryset = Product.objects.raw(query)
            # queryset = Product.objects.all()
            state_name = self.request.GET.get('q', None)
            if state_name is not None:
                query = "SELECT p.*,sum(quantity) as quantity FROM product_management_product as p INNER JOIN order_management_confirm_order_confirm o  ON p.id = o.oproduct_id WHERE p.category = '%s' GROUP BY 1 ORDER BY quantity DESC LIMIT 6" % state_name
                queryset = Product.objects.raw(query)
                # queryset = queryset.filter(category=state_name)
                
            return queryset
    
class search_bestsellerLimit(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            query = "SELECT p.*,sum(quantity) as quantity FROM product_management_product p INNER JOIN order_management_confirm_order_confirm o  ON p.id = o.oproduct_id GROUP BY 1 ORDER BY quantity DESC LIMIT 3 "
            queryset = Product.objects.raw(query)
            # queryset = Product.objects.all()
            state_name = self.request.GET.get('q', None)
            if state_name is not None:
                query = "SELECT p.*,sum(quantity) as quantity FROM product_management_product as p LEFT JOIN order_management_confirm_order_confirm o  ON p.id = o.oproduct_id WHERE p.category = '%s' GROUP BY 1 ORDER BY quantity DESC LIMIT 3" % state_name
                queryset = Product.objects.raw(query)
                # queryset = queryset.filter(category=state_name)
                
            return queryset

class search_maincart(generics.ListAPIView):
    serializer_class = Product_MaincartSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            query = "SELECT p.*,o.quantity as quantity,o.id as oid FROM product_management_product p INNER JOIN order_management_order o  ON p.id = o.oproduct_id "
            queryset = Product.objects.raw(query)
            state_name = self.request.GET.get('q', None)
            if state_name is not None:
                query = "SELECT p.*,o.quantity as quantity,o.id as oid FROM product_management_product as p INNER JOIN order_management_order o  ON p.id = o.oproduct_id WHERE o.ouser = '%s' " % state_name
                queryset = Product.objects.raw(query)
                
            return queryset

class search_maincartprice(generics.ListAPIView):
    serializer_class = Product_MaincartSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            query = "SELECT p.id,SUM(p.price*o.quantity) OVER() as quantity   FROM product_management_product p INNER JOIN order_management_order o  ON p.id = o.oproduct_id LIMIT 1"
            queryset = Product.objects.raw(query)
            state_name = self.request.GET.get('q', None)
            if state_name is not None:
                query = "SELECT a.ouser as id,SUM(a.quantity*a.price) as quantity FROM ( SELECT p.id,o.ouser,p.price,o.quantity FROM product_management_product as p INNER JOIN order_management_order o  ON p.id = o.oproduct_id WHERE o.ouser = '%s' ) as a  GROUP BY 1" % state_name
                queryset = Product.objects.raw(query)
                
            return queryset
