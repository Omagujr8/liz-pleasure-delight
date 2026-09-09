from django.db import transaction
from rest_framework import serializers
from .models import Order, OrderItem, CartItem
from products.models import Product


class OrderSerializer(serializers.ModelSerializer):
    items = serializers.ListField(write_only=True, min_length=1)

    class Meta:
        model = Order
        fields = (
            'id', 'user', 'customer_name', 'phone_number', 'address',
            'scheduled_date', 'total_price', 'status', 'created_at', 'items'
        )
        read_only_fields = ('id', 'user', 'total_price', 'status', 'created_at')

    def validate_items(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError('Items must be a list.')

        product_ids = []
        for item in value:
            if not isinstance(item, dict):
                raise serializers.ValidationError('Each item must be an object.')
            try:
                product_id = int(item.get('product_id', 0))
                quantity = int(item.get('quantity', 0))
            except (TypeError, ValueError):
                raise serializers.ValidationError('Product IDs and quantities must be numbers.')
            if product_id < 1 or quantity < 1:
                raise serializers.ValidationError('Each item needs a product_id and positive quantity.')
            product_ids.append(product_id)

        products = Product.objects.in_bulk(product_ids)
        if len(products) != len(set(product_ids)):
            raise serializers.ValidationError('One or more selected products do not exist.')
        return [{'product': products[product_id], 'quantity': int(item['quantity'])} for item, product_id in zip(value, product_ids)]

    @transaction.atomic
    def create(self, validated_data):
        items = validated_data.pop('items')
        validated_data['total_price'] = sum(item['product'].price * item['quantity'] for item in items)
        order = Order.objects.create(**validated_data)
        OrderItem.objects.bulk_create([
            OrderItem(order=order, product=item['product'], quantity=item['quantity'], price=item['product'].price)
            for item in items
        ])
        return order

class CartItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = CartItem
        fields = '__all__'
        