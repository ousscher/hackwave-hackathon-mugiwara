# Simulation de centre d'appel
C'est un outil simuler la gestion des appels téléphoniques dans le centre d'appel de SATIM.

## Guide d'installation

#### Requirements
- python3
- Verifiez que la commande `pipenv` est presente dans votre systeme
- Le port 8000 doit etre libre
- Le port 5173 est preferable d'etre libre aussi

#### Setup
```bash
git clone https://github.com/ousscher/hackwave-hackathon-mugiwara
cd hackwave-hackathon-mugiwara
```
#### Run & Stop & Debug
Pour lancer le backend
```bash
cd hackwave-backend/
pipenv shell
pipenv install -r requirements.txt
cd backend/
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Pour lancer le frontend : dans un nouvel terminal, revenir à hackwave-hackathon-mugiwara
```bash
cd hackwave-frontend/
npm install 
npm run dev 
```
Pour avoir acces à l'application
```bash
http://localhost:5173/
```
