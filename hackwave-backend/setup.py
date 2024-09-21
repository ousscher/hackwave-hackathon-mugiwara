from backend.chatbot.models import *

qa_list = [
    ("Ma carte CIB est bloquée, que dois-je faire ?", 
     "Si votre carte est bloquée, veuillez vérifier si vous avez atteint le nombre limite de tentatives de saisie du code PIN. Dans ce cas, rendez-vous à votre agence bancaire pour débloquer votre carte."),
    
    ("J’ai effectué un paiement avec ma carte Eddahabia, mais il n’a pas été validé. Que faire ?", 
     "Vérifiez d’abord que votre compte est approvisionné et que la transaction n'a pas été annulée. Si le problème persiste, contactez Algérie Poste ou votre banque pour vérifier l’état de la transaction."),
    
    ("Comment vérifier si ma carte est active ?", 
     "Pour vérifier l’état de votre carte, vous pouvez contacter votre banque pour connaître son statut. Vous pouvez également essayer de faire un retrait ou un paiement pour voir si la carte fonctionne."),
    
    ("J’ai perdu ma carte, comment la bloquer ?", 
     "Contactez immédiatement votre banque ou Algérie Poste pour signaler la perte et demander le blocage de votre carte."),
    
    ("J’ai reçu un message d'erreur lors d’un paiement, que signifie-t-il ?", 
     "Les messages d’erreur peuvent indiquer un problème avec le terminal de paiement, une carte expirée, ou un solde insuffisant. Veuillez vérifier ces éléments et réessayer."),
    
    ("Quelle est la procédure pour renouveler ma carte CIB ?", 
     "Pour renouveler votre carte CIB, rendez-vous dans votre agence bancaire. Vous devrez fournir une pièce d’identité valide et remplir les formulaires nécessaires."),
    
    ("Pourquoi ma transaction a-t-elle été rejetée ?", 
     "Les transactions peuvent être rejetées pour plusieurs raisons : solde insuffisant, carte expirée, ou problème technique avec le terminal de paiement. Contactez votre banque pour plus de détails."),
    
    ("Comment puis-je changer le code PIN de ma carte ?", 
     "Vous pouvez changer votre code PIN en utilisant un distributeur automatique de billets (DAB) de votre banque ou en vous rendant à votre agence."),
    
    ("Combien de temps faut-il pour qu’une transaction soit visible sur mon compte ?", 
     "Les transactions sont généralement visibles immédiatement, mais il peut y avoir un délai de 24 à 48 heures en fonction de la banque et du type de transaction."),
    
    ("Puis-je utiliser ma carte CIB à l’étranger ?", 
     "Oui, votre carte CIB peut être utilisée à l’étranger, à condition qu’elle soit activée pour les transactions internationales. Vérifiez avec votre banque si cette option est activée sur votre carte."),
        ("Qu’est-ce que la carte CIB ?", 
     "Il s’agit d’une carte à utilisation domestique (nationale), elle permet le retrait en espèces sur les distributeurs/guichets automatiques de billets (DAB/GAB), le paiement de proximité sur les terminaux de paiement électroniques (TPE) et le paiement en ligne sur les sites Webmarchands du réseau CIB."),
    
    ("Que signifie interbancarité de la carte CIB ?", 
     "La carte CIB comprend deux logos, le logo de l’interbancarité et le logo de la banque émettrice. La carte CIB est par nature interbancaire. Elle est donc acceptée, même si la banque du porteur de carte est différente de celle du commerçant ou de la banque gestionnaire du distributeur de billets, dès lors qu'il s'agit d'établissements membres du réseau monétique interbancaire."),
    
    ("Qu’est-ce qu’un contrat porteur ?", 
     "Il s’agit d’un contrat signé conjointement entre le client et sa banque pour l’obtention d’une carte bancaire."),
    
    ("Où demander sa carte CIB ?", 
     "Au niveau des agences des banques affiliées au réseau monétique interbancaire."),
    
    ("Quelle est la durée de validité de la carte CIB?", 
     "La carte CIB est valide pour une durée minimale de deux années, son renouvellement est automatique, sauf en cas de résiliation de contrat entre les deux parties."),
    
    ("Où récupérer sa carte CIB ainsi que le code confidentiel ?", 
     "Le porteur récupère sa carte ainsi que le code confidentiel au niveau de son agence bancaire."),
    
    ("Comment reconnaître un point d’acceptation de la carte CIB ?", 
     "Il s’agit de repérer le logo CIB en vitrophanie apposé sur la vitrine du commerçant ou sur l’ATM DAB/GAB."),
    
    ("Quelle est la différence entre le Code PIN et le Mot de passe E-Paiement ?", 
     "Le code de la carte bancaire est un code confidentiel; il est communiqué par un document scellé, envoyé dans un courrier séparé de celui de la carte. Composé de 4 chiffres, il est destiné à effectuer des opérations de retrait sur distributeur ou guichet automatique (DAB/GAB) ou/et des paiements sur terminal de paiement électronique (TPE). Le mot de passe e-paiement est confidentiel; il est communiqué par un document scellé ou par SMS. Composé de 6 chiffres, il est destiné à effectuer des opérations de paiement en ligne."),
    
    ("Que faut-il faire en cas de code PIN erroné ?", 
     "Après 3 tentatives erronées de saisie du code confidentiel sur distributeur ou guichet de retrait automatique, la carte du porteur est automatiquement capturée. Se rapprocher de sa banque en précisant la localisation du distributeur ou guichet de retrait automatique pour débloquer et récupérer la carte saisie et demander une réinitialisation du code pin."),
    
    ("Quels sont les motifs de rejet de l’opération de retrait sur ATM DAB/GAB?", 
     "• Carte bloquée par la banque (mise en opposition) • Carte expirée • Carte non active : se rapprocher de la banque pour l’activer • Cassette vide • Code PIN erroné • Date utilisation de la carte (mise à jour de la nouvelle carte non effectuée sur le système : contacter la banque) • Dépassement du plafond • Incident technique (coupure de liaison ou instabilité du système de la banque…) • Mise à jour du solde non effectuée par la banque (fichier Solde) • ATM hors service ou en cours de démarrage • Puce grillée sur TPE • Solde insuffisant • Type de comptes : faire la différence lors du retrait sur ATM entre le « compte Courant et le compte Épargne »."),
    
    ("Qu’est-ce qu’un TPE ?", 
     "Un TPE ou Terminal de Paiement Électronique est un appareil permettant d’effectuer des paiements par carte de manière totalement digitale et sécurisée. Après une transaction de paiement effectuée avec une carte CIB, le compte du porteur est débité du montant de la transaction et le compte du commerçant est crédité d’un montant après prélèvement par la banque acquéreur des commissions contractuelles."),
    
    ("Quels sont les motifs de refus d’une transaction sur Terminal de Paiement Électronique TPE?", 
     "• Carte arrachée avant la fin du traitement de la transaction • Carte mise en opposition • Carte non émise par un établissement membre du RMI • Code confidentiel erroné • Compte clôturé • Défectuosité du support (puce ou piste) • Défectuosité du terminal (lecteur carte à puce…) • Dépassement du plafond autorisé du commerçant (le plafond commerçant est défini selon le type d’activité) • Dépassement du plafond autorisé du porteur (montant introduit supérieur par rapport à la limite du montant que le porteur peut utiliser) • Dépassement du solde du porteur • Fin de validité de la carte (carte expirée) • Incident technique (coupure de liaison avec le serveur, serveur d’autorisation ne répond pas…)."),
    
    ("Besoin d’assistance d’ordre technique ?", 
     "Veuillez contacter le centre d’appel de SATIM au numéro vert 3020 disponible 24h/24 7j/7 afin d’être assisté."),
    
    ("Qu’est-ce qu’un contrat commerçant ?", 
     "Il s’agit d’un contrat signé conjointement entre le commerçant et sa banque pour l’installation d’un terminal de paiement électronique (TPE)."),
    
    ("Qu’est-ce que la commission commerçant ?", 
     "Il s’agit de la commission prélevée par la banque « réceptrice » du commerçant lors des opérations de paiement sur TPE. Se rapprocher de la banque pour plus d’informations."),
    
    ("Dans quel cas la carte est-elle capturée sur ATM (DAB/GAB)?", 
     "• Après 3 tentatives de saisie erronée du code PIN sur ATM DAB/GAB, la carte est systématiquement capturée. • Délais de récupération de la carte dépassé (Time Out)."),
    
    ("Que faire en cas de carte capturée sur ATM (DAB/GAB) ?", 
     "Le porteur muni de sa pièce d’identité doit se présenter à la banque où la carte a été capturée durant les jours ouvrables et heures de services afin de reprendre possession de sa carte."),
    
    ("Que faire en cas de carte perdue ou volée ?", 
     "Contacter le centre d’appel SATIM numéro vert au 3020 ou le centre relation clientèle de la banque émettrice de la carte (banques ayant leur propre système) afin de bloquer la carte et se renseigner sur la procédure à suivre."),
    
    ("Comment faire une réclamation lors d’un débit à tort ?", 
     "Le porteur de carte formule une réclamation au niveau de la banque domiciliataire."),
    
    ("Que signifie le mot de passe temporaire E-paiement ?", 
     "Il s’agit de la réinitialisation du mot de passe E-Paiement transmis par la banque au porteur de carte CIB afin d’effectuer des transactions en ligne."),
    
    ("Où trouver la clé de facture pour les transactions E paiement ?", 
     "Il s’agit de la clé ou du code indiqué sur la facture des grands facturiers afin d’effectuer le paiement en ligne des factures (exemple la clé EBB sur la facture Sonelgaz, clé de paiement électronique sur la facture Seaal ou ADE Algérienne des Eaux…)."),
    
    ("Où se trouve le CVV2 ?", 
     "Le code CVV2 (card verification value ou cryptogramme) est un numéro qui confirme l'authenticité de votre carte CIB qui se trouve au verso de la carte, il correspond aux trois derniers chiffres du numéro situé dans cet espace."),
    
    ("Que faire lorsque le mot de passe e-paiement est bloqué ?", 
     "Après 3 tentatives de saisie erronée du mot de passe e-paiement en ligne, ce dernier est bloqué pour le service e-paiement, les autres services tel que le retrait sur ATM DAB/GAB ou/et paiement sur TPE demeurent opérationnels. Le porteur est tenu de contacter ou de se rapprocher de sa banque pour faire une demande de régénération du mot de passe en question."),
    
    ("Quelle est la différence entre le E-banking et le E-paiement ?", 
     "Le service e-banking est fourni par la banque après souscription de son client qui reçoit un nom d’utilisateur ou numéro d’abonné ainsi qu’un mot de passe provisoire pour des opérations bancaires (consultation et/ou opération) à distance. Le service e-paiement est ouvert au porteur de carte pour effectuer des opérations de paiement en ligne."),
    
    ("Qu’est-ce la messagerie SMS ?", 
     "La banque met à la disposition de ses clients souhaitant y souscrire le service SMS qui permet à tout titulaire d'un compte bancaire de recevoir en temps réel des SMS en l'informant de toutes les opérations effectuées sur leurs comptes ouverts auprès de la banque en question."),
    
    ("Que faire si le TPE ne lit pas les cartes de mes clients ?", 
     "Nettoyez le lecteur de cartes et assurez-vous que la carte n'est pas endommagée. Si le problème persiste avec plusieurs cartes, contactez le service technique pour une vérification du TPE."),
    
    ("Comment configurer un nouveau TPE dans mon point de vente ?", 
     "Pour installer un nouveau TPE, suivez les instructions fournies par votre fournisseur ou votre banque. Vous pouvez également demander à un technicien d'effectuer l'installation et de configurer la machine."),
    
    ("Comment obtenir un relevé des transactions journalières effectuées avec le TPE ?", 
     "La majorité des TPE permettent d'imprimer un relevé journalier en sélectionnant l'option 'rapport journalier' ou 'total des transactions' dans le menu. Contactez le service technique pour obtenir de l'aide."),
    
    ("Comment puis-je demander un remboursement pour une transaction incorrecte ?", 
     "Le commerçant peut annuler la transaction via le TPE s'il est encore dans les délais autorisés. Si ce n'est plus possible, contactez votre banque pour entamer une procédure de remboursement."),
    
    ("Le TPE affiche un message d’erreur « Transaction refusée ». Que faire ?", 
     "Vérifiez la connexion du TPE (réseau, ligne téléphonique ou Internet). Si la connexion est correcte, essayez une autre carte. Si le problème persiste, contactez l'assistance technique.")
]

[ i.delete() for i in FrequentlyAskedQuestion.objects.all() ]

for qa in qa_list:
    q = FrequentlyAskedQuestion()
    q.question_text = qa[0]
    q.save()
    a = FrequentlyAskedQuestionAnswer()
    a.question_id=q
    a.response_text=qa[1]
    a.save()