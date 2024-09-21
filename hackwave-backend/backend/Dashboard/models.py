from django.db import models
from django.core.validators import RegexValidator
# Create your models here.
from django.db import models

class Agent(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    contact = models.EmailField()
    etat = models.CharField(max_length=20, choices=[('Disponible', 'Disponible'), ('Appel en cours', 'Appel en cours'), ('Hors service', 'Hors service')])
    appels_par_jour = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.prenom} {self.nom}"

from django.db import models

class Appel(models.Model):
    # Définition des champs du modèle Appel
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    numero_telephone = models.CharField(max_length=15)
    duree_appel = models.DurationField()  # Utilisation de DurationField pour la durée
    cause_appel = models.TextField()
    
    # Champs avec choix (énumérations)
    PROFILE_CHOICES = [
        ('Porteur', 'Porteur'),
        ('Banque', 'Banque'),
        ('Commercant', 'Commerçant'),
        ('Autre', 'Autre'),
    ]
    profile = models.CharField(max_length=20, choices=PROFILE_CHOICES)
    
    BANQUE_CHOICES = [
        ('ABC BANK', 'ABC BANK'),
        ('AGB', 'AGB'),
        ('AL BARAKA BANK', 'AL BARAKA BANK'),
        ('AL SALAM BANK', 'AL SALAM BANK'),
        ('ALGERIE POSTE', 'ALGERIE POSTE'),
        ('ARAB BANK', 'ARAB BANK'),
        ('BADR', 'BADR'),
        ('BDL', 'BDL'),
        ('BEA', 'BEA'),
        ('BNA', 'BNA'),
        ('BNP PARIBAS', 'BNP PARIBAS'),
        ('BNH', 'BNH'),
        ('CNEP BANQUE', 'CNEP BANQUE'),
        ('CPA', 'CPA'),
        ('FRANSABANK', 'FRANSABANK'),
        ('HOUSING BANK', 'HOUSING BANK'),
        ('NATIXIS', 'NATIXIS'),
        ('SOCIETE GENERALE', 'SOCIETE GENERALE'),
        ('TRUST BANK', 'TRUST BANK'),
    ]
    banque = models.CharField(max_length=20, choices=BANQUE_CHOICES)

    def __str__(self):
        return f"{self.prenom} {self.nom} - {self.banque}"




class Transaction(models.Model):
    numero_carte = models.CharField(max_length=19)  # Numéro de carte (partiellement masqué)
    id_transaction = models.CharField(max_length=50, unique=True)  # ID unique de la transaction
    date_transaction = models.DateField()  # Date de la transaction
    heure_transaction = models.TimeField()  # Heure de la transaction
    montant = models.DecimalField(max_digits=10, decimal_places=2)  # Montant de la transaction
    statut = models.CharField(max_length=20)  # Statut de la transaction (réussie, échouée, etc.)
    type_transaction = models.CharField(max_length=30)  # Type de transaction (Paiement, Retrait, etc.)
    code_statut = models.CharField(max_length=10)  # Code du statut (ex: "822" pour Perdu)
    explication = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Transaction {self.id_transaction} - {self.montant} DZD"