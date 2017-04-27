serveur API de Sondage
sondages.

##API

###créer un sondages

'POST /polls'

paramètres:string
-question
-answers: string[]

réponse en cas de succés :
'201 Created'
sondage nouvellement créé en JSON :

{"id": 1, "question": "Question ?", "answers": ["Réponse 0", "Réponse 1"], "votes": []}

Erreurs:
-'400 bad request' : paramétres incorrects

###Supprimer un sondages

'delete/polls/:id'

réponse avec succès : '204 no content'

Erreurs
-'404 Page Not Found' : sondage non trouvé



### Lister les sondages

'GET /Polls'

réponse en cas de succés : '200 ok'
Liste des sondages (id et question en JSON)

[{ "id :1, "question ?}, ...]

### récupérer un sondage et ses résultats
'GET /polls/:id'
réponse en cas de succès '200 ok'
sondage en JSON

{ "id :1, "question " : "question ?", "answer" :
 ["réponse 1", "Réponse 2"], "votes" : [0,0,1,0,1]}

Erreurs
-'404 Page Not Found' : sondage non trouvé


### voter pour une réponse du sondage
'POST'/polls/:id/votes'

Paramétre:

-answer :index de la réponse (number)

réponse en cas de succès :
'201 Created'

lites des votes en JSON

[0, 0, 1, 0, 1]

Erreurs:
-'400 bad request' : paramétres incorrects
-'404 Page Not Found' : Sondage non trouvé
