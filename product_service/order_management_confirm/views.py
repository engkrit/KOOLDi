from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
# from django.contrib.auth.models import User
from order_management_confirm.models import Order_confirm
from order_management_confirm.serializers import Order_confirmSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# from rest_framework.views import APIView
from rest_framework import generics, status  



class Order_confirmView(generics.ListCreateAPIView):  
        queryset = Order_confirm.objects.all()  
        serializer_class = Order_confirmSerializer  
        def create(self, request, *args, **kwargs):  
            serializer = self.get_serializer(data=request.data, many=True)  
            serializer.is_valid(raise_exception=True)  
      
            try:  
                self.perform_create(serializer)  
                return Response(serializer.data, status=status.HTTP_201_CREATED)  
            except:  
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

def search_confirm(request, id):
    # ดึงข้อมูลจากฐานข้อมูลโดยใช้ id ที่รับมาจาก parameter
    try:
        obj = Order_confirm.objects.get(id=id)
        # หากพบข้อมูล
        Product_serializer = Order_confirmSerializer(obj)
        content =  Product_serializer.data
        return JsonResponse(content)

    except Order_confirm.DoesNotExist:
        # หากไม่พบข้อมูล
        return JsonResponse({'error': 'Data not found'}, status=404)

