"""
URL configuration for product_service project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from product_management.views import *
from order_management.views import *
from order_management_confirm.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/product', ProductView.as_view()), 
    path('api/order', OrderView.as_view()), 
    path('api/addorder', addorder), 
    path('api/confirm', Order_confirmView.as_view()), 
    path('api/product_id/<int:id>/',search_order ), 
    path('api/order_confirm_id/<int:id>/',search_confirm ), 
    path('api/bestseller/',search_bestseller.as_view()), 
    path('api/bestsellerlimit/',search_bestsellerLimit.as_view()), 
    path('api/product_id1/',search_product.as_view() ), 
    path('api/maincart/',search_maincart.as_view() ), 
    path('api/maincartprice/',search_maincartprice.as_view() ),
    
    # path('admin_tools_stats/', include('admin_tools_stats.urls')),
    
    path('api/orderdelete/',DeleteOrder.as_view(), name='order_delete'),
    path('api/confirm_all/',confirm_all.as_view(), name='order_all'),
]
