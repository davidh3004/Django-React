# Generated by Django 5.1.7 on 2025-03-29 13:04

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_alter_task_datecreated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='dateCreated',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
