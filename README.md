# TypeScript To-do list

## Un projet d'une To-do list avec Vite + TypeScript

<!-- <p float="left">
    <img src="sources/ipad_silver_portrait.png" width="300">
    <img src="sources/iphone12black_portrait.png" width="200">
    <img src="sources/imac2015retina_front.png" width="400">
</p> -->
<p>
<p>
      <img alt="typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?flat-square&logo=typescript&logoColor=white" />
      <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white" />
      <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
      <img alt="pnpm" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220" />

</p>

Les trois codes TypeScript travaillent ensemble pour créer, gérer et afficher une liste d'éléments dans une interface utilisateur (UI) basée sur le Document Object Model (DOM). Voici une synthèse de leur fonctionnement collectif :

1.  **`ListItem.ts`** : Ce fichier définit une interface `Item` spécifiant la structure des éléments de la liste. La classe `ListItem` implémente cette interface en utilisant des propriétés privées avec des accesseurs et des mutateurs pour assurer un accès contrôlé aux données. Chaque élément de la liste a un identifiant (`id`), une description (`item`), et un état de vérification (`checked`).
2.  **`FullList.ts`** : Ce fichier utilise la classe `ListItem` et définit une interface `List` spécifiant les opérations de base sur une liste (chargement, sauvegarde, ajout, suppression, etc.). La classe `FullList` implémente cette interface en utilisant une propriété statique pour garantir une unique instance de la liste. Elle utilise également le localStorage pour persister la liste entre les sessions.

    -   La méthode `load` charge la liste à partir du stockage local.
    -   La méthode `save` sauvegarde la liste dans le stockage local.
    -   La méthode `clearList` vide la liste et sauvegarde les changements.
    -   Les méthodes `addItem` et `removeItem` ajoutent et suppriment des éléments de la liste, respectivement, et sauvegardent les changements.

3.  **`ListTemplate.ts`** :

    -   Utilise la classe `FullList` pour rendre dynamiquement la liste dans l'interface utilisateur (UI) à travers des éléments DOM.
    -   Implémente l'interface `DOMList` avec des méthodes pour vider l'élément de liste existant et rendre une nouvelle liste à partir d'une instance de `FullList`.
    -   Crée des éléments HTML (li, checkbox, label, bouton) pour chaque élément de la liste et les associe à des événements pour mettre à jour la liste lors de changements d'état ou de suppression d'éléments.

En résumé, le cycle de vie de l'application fonctionne de la manière suivante :

1.  L'utilisateur interagit avec l'application, ajoutant, supprimant ou cochant des éléments dans la liste.
2.  Ces modifications sont gérées par la classe `FullList`, qui sauvegarde l'état actuel de la liste dans le `localStorage`.
3.  La classe `ListTemplate` est ensuite utilisée pour mettre à jour l'interface utilisateur, rendant la liste actualisée et reflétant les changements apportés par l'utilisateur.
4.  Les classes travaillent ensemble pour fournir une expérience utilisateur fluide et synchronisée entre la manipulation des données (dans la classe `FullList`) et la représentation visuelle (dans la classe `ListTemplate`).
