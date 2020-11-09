# MMI BOT

Prototype de bot permettant, entre autre de faire l'appel des étudiants.

## Installation

Il est nécessaire de créer le bot dans l'application développeur de discord (https://discord.com/developers/applications), pour récuperer le token nécessaire et ensuite ajouter votre bot dans votre serveur.

1. Mettre le code du repo sur un serveur (ou en local)
2. renommer config.dist.js en config.js et remplacer les valeurs de configurations par les données de votre bot/application
3. Executez le bot avec Nodejs (node main.js)
4. ~~La première fois lancer `!guild` pour récupérer les listes d'utilisateurs~~ Plus nécessaire. Fait à chaque appel, sur le groupe concerné

## Utilisations

### Appel

Lancez `!appel NomDuRole` (sans @)

Les étudiants doivent venir réagir avec une réaction sur le message.

### Bilan de l'appel

`!bilan`

Fait la différence entre les étudiants associés au rôle et ceux ayant réagit au message et affiche les absents.

### Limitations

Limitations de cette version.
* Un seul appel à la fois.
* ~~Les groupes ne sont pas remis à jour. Il faudrait ajouter un pointage des membres d'un groupe à chaque lancement d'appel.~~ => Corrigé. Les étudiants d'un rôle sont listés à chaque appel.
