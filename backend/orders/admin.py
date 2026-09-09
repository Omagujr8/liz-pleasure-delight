from django.contrib import admin
from .models import (
    Order,
    Cart,
    CartItem,
    OrderItem,
    Coupon,
    Payment
)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    change_list_template = 'admin/orders/order/change_list.html'
    list_filter = ('status', 'scheduled_date', 'created_at')
    search_fields = ('customer_name', 'phone_number', 'address')
    list_display = ('id', 'customer_name', 'phone_number', 'total_price', 'status', 'scheduled_date', 'created_at')
    ordering = ('-created_at',)


admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(OrderItem)
admin.site.register(Coupon)
admin.site.register(Payment)