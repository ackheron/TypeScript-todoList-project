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

Les modèles **`ListItem.ts`** et **`FullList.ts`** présentent une structure de gestion d'une liste d'éléments, avec des fonctionnalités pour ajouter, supprimer, charger, sauvegarder et vider la liste. Les deux fichiers sont conçus pour être utilisés ensemble dans une application.

1.  **`ListItem.ts`** : Ce fichier définit une interface `Item` spécifiant la structure des éléments de la liste. La classe `ListItem` implémente cette interface en utilisant des propriétés privées avec des accesseurs et des mutateurs pour assurer un accès contrôlé aux données. Chaque élément de la liste a un identifiant (`id`), une description (`item`), et un état de vérification (`checked`).
2.  **`FullList.ts`** : Ce fichier utilise la classe `ListItem` et définit une interface `List` spécifiant les opérations de base sur une liste (chargement, sauvegarde, ajout, suppression, etc.). La classe `FullList` implémente cette interface en utilisant une propriété statique pour garantir une unique instance de la liste. Elle utilise également le localStorage pour persister la liste entre les sessions.

    -   La méthode `load` charge la liste à partir du stockage local.
    -   La méthode `save` sauvegarde la liste dans le stockage local.
    -   La méthode `clearList` vide la liste et sauvegarde les changements.
    -   Les méthodes `addItem` et `removeItem` ajoutent et suppriment des éléments de la liste, respectivement, et sauvegardent les changements.

En résumé, ensemble, ces deux fichiers permettent la création, la manipulation et la persistance d'une liste d'éléments à travers l'utilisation d'une classe principale (`FullList`) et d'une classe auxiliaire (`ListItem`) qui encapsule la structure et le comportement des éléments individuels de la liste. La classe `FullList` implémente des opérations de gestion de la liste tout en utilisant la classe `ListItem` pour représenter les éléments de la liste.
