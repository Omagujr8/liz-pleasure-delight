from django.contrib import admin
from django.urls import path
from products.views import ProductListAPIView, ProductDetailAPIView
from reviews.views import ReviewListCreateAPIView
from orders.views import OrderListCreateAPIView

urlpatterns = [
    path('admin/', admin.site.urls),

    # PRODUCTS
    path('api/products/', ProductListAPIView.as_view()),
    path('api/products/<int:pk>/', ProductDetailAPIView.as_view()),

    # REVIEWS
    path('api/reviews/', ReviewListCreateAPIView.as_view()),

    # ORDERS
    path('api/orders/', OrderListCreateAPIView.as_view()),
]