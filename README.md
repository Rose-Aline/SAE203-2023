- Nom:
- Prénom:
- URL du site:

# Sujet : Description de la SAE

Cette SAE s’inscrit dans le prolongement de la SAE 105 du premier semestre sur la réalisation d’un site évènementiel pour promouvoir une exposition temporaire sur un mouvement artistique.

En partant du travail effectué lors de cette SAE, vous devrez :

- Reprendre les éléments graphiques de l’interface en vue de l’améliorer
- Réaliser la version bureau de l’interface
- Reprendre totalement l’intégration en vue d’une intégration Vite / Vue 3 / Tailwind / Pocketbase
- Mettre en ligne le site sur votre VPS

# Consignes

- Le rendu se fait en publiant vos modifications dans ce dépôt.
- Le site doit être publié à une adresse publique sous peinne de perdre des points dans touts les matiéres.
- Lire les consignes et répondre aux éventuelles questions sur ce même document.
- [ ] Cochez si vous avez compris !

## Consignes Intégration (Xavier Senente)

À partir de la maquette réalisée lors de la SAE 105, apporter quelques corrections mineures pour améliorer l’interface mobile du site. Réaliser ensuite la version bureau.

Conseil ⇒ mettez en place une grille pour agencer le contenu dans la version bureau.

Exportez les icônes vectorielles au format svg.

## Consignes Systéme d'information (Abdallah Makhoul)

Voici les attendus concernant cette partie :

- Un modèle conceptuel de données
- Structuration de la base de données et saisie de données dans Pocketbase
- Saisir les données dans PocketBase
- Un fichier `backend.mjs` comportant les fonctions suivantes qui sont testées dans un fichier `testback.js`
  - une fonction qui retourne la liste de tous les artistes (page)
  - une fonction qui retourne la liste de toutes les œuvres (page)
  - une fonction qui retourne les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)
  - une fonction qui retourne la liste des œuvres d'un artiste donné
  - une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
  - une fonction qui retourne la liste des œuvres triées par date (d'une manière chronologique) (frise)
- **travail supplémentaire :**
  - **saisir ou modifier des données automatiquement à partir du front**
  - **une page de connexion (en utilisant la collection users)**

Assurez-vous que vous rendez les fichiers suivants (liens) :

- [ ] [backend](/pocketbase/backend.mjs)
- [ ] [test backen](/pocketbase/testback.js)
- [ ] [MCD](/pocketbase/MCD.pdf)

## Consignes Développent web (Pierre Pracht)

Recopier `/pocketbase/backend.mjs` en `/pocketbase/backend.ts`. C'est le premier qui est noté en Systéme d'information. Le second indirectement dans le cadre de ma matiére.

Réalisez le site comme vu en utilisant VueJS/ViteJS founis et configurés pour l'usage TailwindCSS.

- Usage de `<RouterLink>` et `<RouterView>`
- Usage de `<Suspense>` et d'"`avait`" pour récuppérer les données du backend. (appel de fonctions)
-

## Consignes Hébergement (Hakim Mabed)
