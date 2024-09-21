from django.urls import re_path, path

from . import consumers

websocket_urlpatterns = [
    path("ws/recognize/",consumers.SpeachConsumer.as_asgi())
]