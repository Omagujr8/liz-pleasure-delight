from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('orders', '0002_coupon_order_user_alter_order_status_cart_cartitem_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='scheduled_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]