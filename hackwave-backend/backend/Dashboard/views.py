from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Agent,Appel,Transaction
from .serializers import AgentSerializer,AppelSerializer,TransactionSerializer
# Create your views here.
def index(request):
    return(Response("helloo"))

@api_view(['GET'])
def Agents_view(request):
    agents = Agent.objects.all()
    serializer = AgentSerializer(agents, many=True)
    print(serializer.data) 
    return Response(serializer.data)

@api_view(['GET'])
def Appels_view(request):
    appels = Appel.objects.all()
    serializer = AppelSerializer(appels, many=True)
    print(serializer.data) 
    return Response(serializer.data)

@api_view(['GET'])
def Transaction_view(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    print(serializer.data) 
    return Response(serializer.data)