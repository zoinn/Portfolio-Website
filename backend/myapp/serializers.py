from rest_framework import serializers
from .models import RepoList

class RepoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RepoList
        fields = '__all__'