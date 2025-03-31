from rest_framework import serializers
from .models import Task  # Import your Task model

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task # Replace with your actual Task model
        fields = '__all__'  # Include all fields in the serialization   