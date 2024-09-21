from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import *
from .models import FrequentlyAskedQuestionAnswer


@api_view(['POST'])
def index(request):
    data = request.data
    
    if ("question" not in data):
        return Response({"message":"No question found"},status=400)
    
    question = data['question']
    
    id = get_frequently_asked_question_id(question)
    
    if (id==-1):
        r = {"message": "Je n'ai pas pu comprendre cette question, veuillez appeler le centre d'appel sous le numéro: 3020 pour plus de détailles"}
    else:
        r = {"message": str(FrequentlyAskedQuestionAnswer.objects.filter(question_id=id).first())}
    
    return Response(r)