from django.contrib import admin
from .models import *

admin.site.register(Question)
admin.site.register(Response)
admin.site.register(FrequentlyAskedQuestion)
admin.site.register(FrequentlyAskedQuestionAnswer)