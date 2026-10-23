# Audit fonctionnel

## 1 Présenter le travail

- **Nom et prénom :** Loïck LAURENT
- **Date :** 23/10/2026
- **Fork et branche :** https://github.com/underfr/projet_todo.git branche evaluation-tests-audit
- **Version testée :** [Identifiant du commit testé]
- **Pages testées :** /register, /task/new et /task/activeall

**Comment lancer l’application et les tests ?**

Une fois le projet clonné, démmarer le projet avec docker via docker compose up -d --build, utilisé npm install pour installer les dépendances et ensuite utilisé npm cypress open pour lancer Cypress. L'application est disponible sur http://localhost:8080 

**Quelles données faut-il préparer pour lancer et rejouer vos tests ?**
Les données de bases avec deux comptes, deux catégorie et plusieurs taches sont créer au lancement de l'application via l'éxecution du script db.sql
Pour effectuer les tests, toutes les données sont présentes dans le dossier fixtures de cypress avec un jeu de donnée pour chaque cas

## 2 Présenter le bilan

Comptez les cas de votre plan, pas les assertions. Chaque ligne doit totaliser neuf cas.

| Passage | Réussis | Échoués | Bloqués | Non exécutés | Preuve |
| --- | --- | --- | --- | --- | --- |
| Premier lancement | [5] | [1] | [0] | [3] | [Lien dans resultats/] |
| Relance | [5] | [0] | [1] | [3] | [Lien dans resultats/] |

**Les résultats changent-ils entre les deux passages ?**

Les résultats sont toujours identiques entre deux passaages.


## 4 Donner votre conclusion

- **Qu’est-ce qui fonctionne d’après vos tests ?** 
L'inscription, la connexion, l'ajout de tache ainsi que l'afficahge des taches fonctionnent.
- **Quels problèmes faut-il traiter en premier et pourquoi ?**
On peu ajouter plusieurs taches ayant le même titre, description, dates, catégorie, ca ne devrais pas être possible, le titre d'une tache devrais être unique
- **Qu’est-ce qui n’a pas été vérifié ?**
Les tests LISTE-01, LISTE-02 et TACHE-03 ne sont pas vérifié par manque de temps
- **Votre avis sur les trois fonctionnalités :**
Globalement l'application est fonctionnelle, quelques améliorations sont a prendre en considération:
1. Faire en sorte qu'un titre de tache sois unique
2. Faire en sorte que l'on puisse supprimé définitivement une tache
3. Faire en sorte que les catégorie sois lié aux utilisateurs et pas communes sinon un utilisateur peu supprimé des catégorie d'un autre