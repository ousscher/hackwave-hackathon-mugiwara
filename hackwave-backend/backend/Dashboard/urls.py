from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('agents', views.Agents_view),
    path('appels', views.Appels_view),
     path('transactions', views.Transaction_view),

]
