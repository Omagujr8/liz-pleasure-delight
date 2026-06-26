from rest_framework import generics
from .models import Order, Cart, CartItem
from .serializers import OrderSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class AddToCartAPIView(APIView):

    def post(self, request):

        cart, _ = Cart.objects.get_or_create(
            user=request.user
        )

        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        item, created = CartItem.objects.get_or_create(
            cart=cart,
            product_id=product_id
        )

        if not created:
            item.quantity += int(quantity)

        item.save()

        return Response({
            "message": "Added to cart"
        })