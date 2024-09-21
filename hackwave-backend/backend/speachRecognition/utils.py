import openai

def extract_answers(scrumbled_discussion_text):
    client = openai.AzureOpenAI(
            api_key="4c59ca6b820f49bdbbde08c6218a439f",
            api_version="2023-12-01-preview",
            azure_endpoint="https://jobmarketplace-openaiservice.openai.azure.com/"
        )

    prompt = (
        "Voici une discussion capturée par un agent de reconaissance vocale médiocre:\n\n"
        f"{scrumbled_discussion_text}\n\n"
        "Je veux extraire les informations suivantes:\n\n"
        "nom,prenom,numero de telephone,banque\n\n"
        "Veuillez respecter l'ordre des informations demandées.\n\n"
        "Donner moi la réponse sous le format suivant (json) seulement sans informations supplémentaires, et sans caractères supplimentaires:\n\n"
        '{"nom":"nom","prenom":"prenom","numero_tel":"numero_tel","banque":"banque"}'
        "Pour les champs ou il n'y a pas de valeure met null\n\n"
        "Ne met pas le résultat entre les trois back quotes\n\n"
    )
    
    response = client.chat.completions.create(model='gpt4o',  messages=[{"role": "user", "content": prompt }]).choices[0].message.content
    
    print(response)
    return response