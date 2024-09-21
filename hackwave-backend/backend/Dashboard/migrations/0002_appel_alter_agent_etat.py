# Generated by Django 5.1.1 on 2024-09-20 20:30

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('duree_appel', models.DurationField()),
                ('cause_appel', models.TextField()),
                ('numero_telephone', models.CharField(blank=True, max_length=20, null=True, validators=[django.core.validators.RegexValidator('^\\+\\d{10,15}$')])),
                ('profile', models.CharField(choices=[('Porteur', 'Porteur'), ('Banque', 'Banque'), ('Commercant', 'Commerçant'), ('Autre', 'Autre')], max_length=20)),
                ('banque', models.CharField(choices=[('ABC BANK', 'ABC BANK'), ('AGB', 'AGB'), ('AL BARAKA BANK', 'AL BARAKA BANK'), ('AL SALAM BANK', 'AL SALAM BANK'), ('ALGERIE POSTE', 'ALGERIE POSTE'), ('ARAB BANK', 'ARAB BANK'), ('BADR', 'BADR'), ('BDL', 'BDL'), ('BEA', 'BEA'), ('BNA', 'BNA'), ('BNP PARIBAS', 'BNP PARIBAS'), ('BNH', 'BNH'), ('CNEP BANQUE', 'CNEP BANQUE'), ('CPA', 'CPA'), ('FRANSABANK', 'FRANSABANK'), ('HOUSING BANK', 'HOUSING BANK'), ('NATIXIS', 'NATIXIS'), ('SOCIETE GENERALE', 'SOCIETE GENERALE'), ('TRUST BANK', 'TRUST BANK')], max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='agent',
            name='etat',
            field=models.CharField(choices=[('Disponible', 'Disponible'), ('Appel en cours', 'Appel en cours'), ('Hors service', 'Hors service')], max_length=20),
        ),
    ]