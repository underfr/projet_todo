# Plan de test

**Nom et prénom:** Loïck LAURENT

**Date :** 23/10/2026

## 1 Les neuf cas à tester

| ID | Page | Situation à vérifier |
| --- | --- | --- |
| INS-01 | /register | Inscription avec des données valides |
| INS-02 | /register | Inscription avec un champ obligatoire vide |
| INS-03 | /register | Inscription avec deux mots de passe différents |
| TACHE-01 | /task/new | Ajout d’une tâche valide avec une catégorie |
| TACHE-02 | /task/new | Ajout avec un champ obligatoire vide |
| TACHE-03 | /task/new | Accès à la page sans être connecté |
| LISTE-01 | /task/activeall | Les tâches actives du compte connecté sont affichées |
| LISTE-02 | /task/activeall | Ses tâches terminées ne sont pas affichées |
| LISTE-03 | /task/activeall | Les tâches d’un autre compte ne sont pas affichées |

### [INS-01] - Inscription avec des données valides

- **Objectif:** Vérifier que l'inscription fonctionne

- **Données nécessaires aux test:**

fixtures user-valid.json

- **Actions a réaliser:**

1. Se rendre sur le site
2. Se rendre sur la page d'inscription
3. Renseigner les informations obligatoire
4. Soumettre le formulaire

- **Résultat attendu:** Les comptes doivent être créer
- **Résultat obtenu:** Les comptes sont bien créer
- **Statut:** Réussi

### [INS-02] - Inscription avec un champ obligatoire vide

**Objectif:** Vérifier que l'inscription avec un champ vide ne fonctionne pas

**Données nécessaires aux test:** 

fixtures user-invalid.json

- Actions a réaliser:

1. Se rendre sur le site
2. Se rendre sur la page d'inscription
3. Renseigner les informations
4. Laisser un champ vide
5. Soumettre le formulaire

- **Résultat attendu:** Les comptes ne doivent pas se créer et un message d'erreur est afficher
- **Résultat obtenu:** Les comptes ne sont pas créer et le message d'erreur est lisible
- **Statut:** Réussi

Test INS-03

Objectif: Inscription avec deux mots de passe différents

Données nécessaires aux test:

fixtures user-mismatch-password.json

Actions a réaliser:

- Se rendre sur le site
- Se rendre sur la page d'inscription
- Renseigner les informations
- Renseigner deux mots de passe différents
- Soumettre le formulaire

- **Résultat attendu:** Les comptes ne doivent pas etre créer et un message d'erreur dois s'afficher
- **Résultat obtenu:** Les comptes ne sont pas créer et le message d'erreur est lisible
- **Statut:** Réussi

Test TACHE-01

Objectif: Ajout d'une tache valide avec une catégorie


Données nécessaires aux tests:

fixtures task-valid.json

Nécessite d'être connecter:
- Se rendre sur le site
- Se rendre sur la page de connexion
- Renseigner les champs de connexion
- Soumettre le formulaire

Actions a réaliser:

- Se rendre sur la page d'ajout de tache
- Remplir les informations obligatoire
- Soumettre le formulaire

- **Résultat attendu:** Les taches doivent être créer
- **Résultat obtenu:** Les taches sont bien ajouter en BDD
- **Statut:** Réussi

Test TACHE-02

Objectif: Ajout avec un champ obligatoire vide

Données nécessaires aux test:

fixtures task-invalid.json

Nécessite d'être connecter:
- Se rendre sur le site
- Se rendre sur la page de connexion
- Renseigner les champs de connexion
- Soumettre le formulaire

Actions a réaliser:

- Se rendre sur la page d'ajout de tache
- Remplir les informations
- Laisser un champ obligatoire vide
- Soumettre le formulaire

- **Résultat attendu:** Les taches ne doivent pas être créer et un message d'erreur doit etre lisible
- **Résultat obtenu:** Les taches ne peuvent pas être créer
- **Statut:** Echec

Test TACHE-03

Objectif: Accès a la page sans être connecté

Actions a réaliser:

- Se rendre sur la page d'ajout de tache

- **Résultat attendu:** L'utilisateur doit être rediriger vers la page d'accueil
- **Résultat obtenu:**
- **Statut:** Non réalisé

Test LISTE-01

Objectif: Les taches actives du compte connecté sont affichées

Nécessite d'être connecter:
- Se rendre sur le site
- Se rendre sur la page de connexion
- Renseigner les champs de connexion
- Soumettre le formulaire

Actions a réaliser:
- Se rendre sur la page Mes Taches Actives
- Vérifier l'existence des taches

- **Résultat attendu:** Les taches actives de l'utilisateur sont affichées
- **Résultat obtenu:**
- **Statut:** Non réalisé

Test LISTE-02

Objectif: Les taches terminées ne sont pas affichées

Nécessite d'être connecter:
- Se rendre sur le site
- Se rendre sur la page de connexion
- Renseigner les champs de connexion
- Soumettre le formulaire

Actions a réaliser:
- Se rendre sur la page Mes Taches Actives
- Vérifier l'existence de taches terminées

- **Résultat attendu:** Seules les taches en cours sont affiché
- **Résultat obtenu:** 
- **Statut:** Non réalisé

Test LISTE-03

Objectif: Les taches d'un autre compte ne sont pas affichées

Nécessite d'être connecter:
- Se rendre sur le site
- Se rendre sur la page de connexion
- Renseigner les champs de connexion
- Soumettre le formulaire

Actions a réaliser:
- Se rendre sur la page Mes Taches Actives
- Vérifier l'existence de taches d'un autre compte

- **Résultat attendu:** Seules les taches du compte doivent être affiché
- **Résultat obtenu:** Uniquement les taches de l'utilisateur sont affiché
- **Statut:** Réussi

## 3 Priorités

1. INS-01
   Prérequis absolu. Si la création de compte échoue, aucun utilisateur ne peut s'inscrire et tous les tests authentifiés sont bloqués.
2. TACHE-01
   Fonctionnalité coeur de métier. Créer une tâche est la proposition de valeur principale de l'application et est indispensable pour alimenter les tests.
3. LISTE-03
   Confidentialité critique / Sécurité. Un échec ici constitue une faille d'isolation des données (fuite de données inter-comptes) où l'Utilisateur A voit les tâches privées de l'Utilisateur B.
