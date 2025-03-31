from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.documentation import include_docs_urls
from rest_framework import routers 
from tasks import views


router = routers.DefaultRouter()
router.register(r'tasks', views.Taskview, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Task API"))
    # path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

]