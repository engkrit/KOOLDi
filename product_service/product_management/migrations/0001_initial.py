# Generated by Django 5.0.4 on 2024-04-29 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pname', models.CharField(blank=True, max_length=255)),
                ('price', models.FloatField(blank=True)),
                ('stock', models.IntegerField(null=True)),
                ('category', models.CharField(blank=True, max_length=100)),
                ('pgroup', models.CharField(blank=True, max_length=50)),
                ('ent', models.CharField(blank=True, max_length=200)),
                ('img_url', models.CharField(blank=True, max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ProductMaincart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pname', models.CharField(blank=True, max_length=255)),
                ('price', models.FloatField(blank=True)),
                ('stock', models.IntegerField(null=True)),
                ('category', models.CharField(blank=True, max_length=100)),
                ('pgroup', models.CharField(blank=True, max_length=50)),
                ('ent', models.CharField(blank=True, max_length=200)),
                ('img_url', models.CharField(blank=True, max_length=200)),
                ('quantity', models.IntegerField(null=True)),
            ],
        ),
    ]