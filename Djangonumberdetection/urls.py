"""URLs of the number detection API (the model is loaded by predictions.model)."""
from django.urls import path

from mainapp import views

urlpatterns = [
    path('api/getOperationResults/', views.get_operation_results),
    path('api/test/', views.apiTest),
]
