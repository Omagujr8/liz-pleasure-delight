from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):

    serializer_class = ProductSerializer

    def get_queryset(self):

        queryset = Product.objects.filter(stock__gt=0)

        category = self.request.GET.get('category')
        search = self.request.GET.get('search')

        if category:
            queryset = queryset.filter(
                category__iexact=category
            )

        if search:
            queryset = queryset.filter(
                name__icontains=search
            )

        return queryset


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer