from django.db import migrations, models


def rename_chips_products(apps, schema_editor):
    Product = apps.get_model("products", "Product")
    Product.objects.filter(name__in=["Chips", "Crispy Chips"]).update(
        name="Chin Chin",
        category="chin_chin",
    )
    Product.objects.filter(category__in=["chips", "mix"]).update(
        category="chin_chin",
    )


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(
            rename_chips_products,
            migrations.RunPython.noop,
        ),
        migrations.AlterField(
            model_name="product",
            name="category",
            field=models.CharField(
                choices=[
                    ("popcorn", "Popcorn"),
                    ("peanut", "Peanut"),
                    ("chin_chin", "Chin Chin"),
                ],
                max_length=20,
            ),
        ),
    ]
