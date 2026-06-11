from django.db import models
from products.models import Product


class Order(models.Model):

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('delivered', 'Delivered'),
    )

    customer_name = models.CharField(
        max_length=100
    )

    phone_number = models.CharField(
        max_length=20
    )

    address = models.TextField()

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.customer_name