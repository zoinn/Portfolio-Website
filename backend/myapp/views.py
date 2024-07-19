from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import RepoList
from .serializers import RepoListSerializer
import requests
from django.conf import settings

class RepoListViewSet(viewsets.ModelViewSet):
    queryset = RepoList.objects.all()
    serializer_class = RepoListSerializer

    @action(detail=False, methods=['get'])
    def repolist(self, request):
        url = "https://api.github.com/users/zoinn/repos"
        response = requests.get(url, headers={
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": f"Bearer {settings.GITHUB_TOKEN}"
        })

        if response.status_code == 200:
            data = response.json()
            names = [repo['name'] for repo in data]
            return Response({'repo_names': names})
        else:
            return Response({"error": f"Failed to retrieve data: {response.status_code}"}, status=response.status_code)

    @action(detail=False, methods=['get'])
    def repodetail(self, request):
        repo_name = request.query_params.get('repo_name')  # Use query parameters to get the repo name
        if not repo_name:
            return Response({"error": "Repository name is required"}, status=400)

        url = f"https://api.github.com/repos/zoinn/{repo_name}/readme"
        response = requests.get(url, headers={
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": f"Bearer {settings.GITHUB_TOKEN}"
        })

        if response.status_code == 200:
            data = response.json()
            print(data)
            return Response(data)
        else:
            return Response({"error": f"Failed to retrieve data: {response.status_code}"}, status=response.status_code)
