from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
# from django.contrib.auth.models import User
from order_management.models import Order
from order_management.serializers import OrderSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db import connection

@csrf_exempt
def addorder(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        order_serializer = OrderSerializer(data=data)
        if order_serializer.is_valid():
            new_Order = order_serializer.save()
            return JsonResponse(order_serializer.data, status=201)
        return JsonResponse(order_serializer.errors, status=400)
    return JsonResponse({"error":"method not allowed."}, status=405)

class OrderView(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        # Order_data = Order.objects.get(user=request.user)
        Orders = Order.objects.all()
        Order_serializer = OrderSerializer(Orders,many=True)
        content = {
            'data': Order_serializer.data
        }
        return Response(content)
    
class DeleteOrder(APIView):
    def delete(self, request):
        order_id = request.GET.get('oid', None)
        if order_id is not None:
            with connection.cursor() as cursor:
                query = "DELETE FROM order_management_order WHERE id = %s"
                cursor.execute(query, [order_id])
            return Response({"result": "Delete OK!"})
        else:
            return Response({"error": "Order ID is required."})
        
class confirm_all(APIView):
    def get(self, request):
        ouser_id = request.GET.get('ouser', None)
        if ouser_id is not None:
            with connection.cursor() as cursor:
                query = "INSERT INTO order_management_confirm_order_confirm (ouser, quantity, oproduct_id) SELECT ouser, quantity, oproduct_id FROM order_management_order WHERE ouser = %s"
                cursor.execute(query, [ouser_id])

                query = "DELETE FROM order_management_order WHERE ouser = %s"
                cursor.execute(query, [ouser_id])

            return Response({"result": "Callfirm OK!"})
        else:
            return Response({"error": "Order user is required."})
            
    