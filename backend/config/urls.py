from django.contrib import admin
from django.urls import path
from products.views import ProductListAPIView, ProductDetailAPIView
from reviews.views import ReviewListCreateAPIView
from orders.views import OrderListCreateAPIView
from accounts.views import RegisterAPIView
from orders.views import AddToCartAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', ProductListAPIView.as_view()),
    path('api/products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('api/reviews/', ReviewListCreateAPIView.as_view()),
    path('api/orders/', OrderListCreateAPIView.as_view()),
    path('api/cart/add/', AddToCartAPIView.as_view()),
]

urlpatterns += [
    # AUTH
    path('api/auth/register/', RegisterAPIView.as_view()),
    path('api/auth/login/', TokenObtainPairView.as_view()),
    path('api/auth/refresh/', TokenRefreshView.as_view()),
]