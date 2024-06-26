# Generated by Django 5.0.4 on 2024-04-28 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='fullname',
            new_name='firstname',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='post_code',
        ),
        migrations.AddField(
            model_name='customer',
            name='district',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='customer',
            name='lastname',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='customer',
            name='subdistrict',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
