from django.db import migrations


def rename_lowercase_chips(apps, schema_editor):
    Product = apps.get_model("products", "Product")
    Product.objects.filter(name__iexact="chips").update(name="Chin Chin")


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0002_rename_chips_to_chin_chin"),
    ]

    operations = [
        migrations.RunPython(rename_lowercase_chips, migrations.RunPython.noop),
    ]
