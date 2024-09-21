from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('first', views.first_response),
    path('second', views.second_response),
    path('third', views.third_response),
    path('forth', views.forth_response),
]
