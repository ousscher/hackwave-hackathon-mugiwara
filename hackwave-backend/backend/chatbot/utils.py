import openai
from .models import FrequentlyAskedQuestion
import json

def get_frequently_asked_question_id(question):
    
    client = openai.AzureOpenAI(
            api_key="4c59ca6b820f49bdbbde08c6218a439f",
            api_version="2023-12-01-preview",
            azure_endpoint="https://jobmarketplace-openaiservice.openai.azure.com/"
        )
    
    questions = [ (q.id, str(q)) for q in FrequentlyAskedQuestion.objects.all() ]
    prompt = (
        "Voici une liste de questions fréquemment posées :\n\n"
        f"{questions}\n\n"
        "Vois voyez bien que les questions précédentes sont exclusivement liés au domaine de la banque et des cartes bancaires"
        "Voici une question qui m'a été posée :\n\n"
        f"{question}\n\n"
        "Si possible, veuillez classifier cette dernière quetion au numéro de la question équivalente dans la liste que je vous ai fournis, sinon, veuillez répondre par -1."
        "Renvoie la réponse sous le format suivant, sans informations additionnelles :\n"
        "{\"question\": 5}"
        ""
    )
    
    while (1):
        
        response = client.chat.completions.create(model='gpt4o',  messages=[{"role": "user", "content": prompt }])
        
        if ('{"question":' in response.choices[0].message.content):
            break
    
    data = json.loads(response.choices[0].message.content)
    
    print(data)
    
    return data['question']