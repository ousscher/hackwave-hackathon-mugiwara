from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

@api_view(['POST'])
def first_response(request):
    data = request.data
    
    if (data['choice'] in range(1,5)):
        msg = "Veuillez choisir votre type de traitement\n\n\n"
        msg+= "Tapez 1, si c'est un traitement ordinaire\n"
        msg+= "Tapez 2, si c'est un traitement urgent, le cas ou vous avez perdu votre carte ou elle a été volée\n"
    
    return Response({"message": msg})

@api_view(['POST'])
def second_response(request):
    data = request.data

    if (data['choice']==1):
        msg = "Veuillez choisir le type de votre opération\n"
        msg += "Tapez 1, pour DAB\n"
        msg += "Tapez 2, pour Paiements en ligne\n"
        msg += "Tapez 3, pour TPE\n"
        
    
    elif(data['choice']==2):
        msg = "Cet Appel va etres redirigé vers un agent"
    
    return Response({"message": msg})

@api_view(['POST'])
def third_response(request):
    data = request.data
    
    msg = "Tapez 1, pour verfier l'etat de votre derniere transaction\n"
    
    return Response({"message": msg})

@api_view(['POST'])
def forth_response(request):
    data = request.data
    
    if (data['choice']==1):
        if (random.randint(0,1)):
            msg = "Votre derniere transaction a été effectuée avec succées"
        else:
            msg="Votre derniere transaction a échoué"
    
    return Response({"message": msg})