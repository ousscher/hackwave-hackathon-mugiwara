from rest_framework import serializers
from .models import Agent ,Appel, Transaction

class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = ['id' , 'nom', 'prenom', 'appels_par_jour', 'contact', 'etat']

class AppelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appel
        fields = ['id', 'nom', 'prenom', 'numero_telephone', 'duree_appel', 'cause_appel', 'profile', 'banque']


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id','numero_carte', 'id_transaction', 'date_transaction', 'heure_transaction', 'montant', 'statut', 'type_transaction', 'code_statut','explication']