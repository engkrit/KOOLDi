import requests
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from user_management.models import Customer
from user_management.serializers import CustomerSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


# register service
@csrf_exempt
def register(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        try:
            new_user = User.objects.create_user(
                username=data["username"], password=data["password"]
            )
        except:
            return JsonResponse({"error": "username already used."}, status=400)
        new_user.save()
        data["user"] = new_user.id
        customer_serializer = CustomerSerializer(data=data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data, status=201)
        new_user.delete()
        return JsonResponse({"error": "data not valid"}, status=400)
    return JsonResponse({"error": "method not allowed."}, status=405)

# Create View class after register() view
class CustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        customer_data = Customer.objects.get(user=request.user)
        customer_serializer = CustomerSerializer(customer_data)
        content = {"data": customer_serializer.data}
        return Response(content)

# Aiforthai service
@csrf_exempt
def idcard(request):
    if request.method == "POST":
        try:
            # ตรวจสอบว่ามีไฟล์ที่ถูกส่งมาหรือไม่
            if "file" not in request.FILES:
                return JsonResponse({"error": "Image file not found"}, status=400)
            image_file = request.FILES["file"]  # รับไฟล์ภาพจาก request.FILES
            # ตรวจสอบประเภทของไฟล์ภาพ
            if not image_file.content_type.startswith("image"):
                return JsonResponse({"error": "Invalid image file type"}, status=400)
            # ตรวจสอบขนาดของไฟล์ภาพ
            MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
            if image_file.size > MAX_IMAGE_SIZE:
                return JsonResponse({"error": "Image file size too large"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
        url = "https://api.aiforthai.in.th/ocr-id-front-iapp"
        files = {"file": image_file}  # ใช้ไฟล์ภาพที่รับมาจากผู้ใช้
        headers = {
            "Apikey": "aB7JgAPtaUAdbO4LUg5MhJ8hXja7kDhH",
        }
        response = requests.post(url, files=files, headers=headers)
        if response.status_code == 200:
            response_json = response.json()
            # นำ JSON ที่ได้จาก API มาแสดงในฟอร์มลงทะเบียน
            return JsonResponse(response_json, status=200)
        else:
            return JsonResponse({"error": "Failed to process image"}, status=500)
    return JsonResponse({"error": "Method not allowed!"}, status=403)
