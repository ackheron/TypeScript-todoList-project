// Définition de l'interface Item
export interface Item {
    id: string; // Identifiant unique de l'élément
    item: string; // Contenu de l'élément
    checked: boolean; // État de l'élément (coché ou non)
}

// Définition de la classe ListItem qui implémente l'interface Item

/* L'utilisation de export default permet d'exporter la classe ListItem en tant qu'export par défaut du module, ce qui signifie qu'elle peut être importée sans utiliser de noms spécifiques lors de l'importation. */

export default class ListItem implements Item {
    // Les propriétés privées _id, _item et _checked avec des valeurs par défaut
    constructor(private _id: string = "", private _item: string = "", private _checked: boolean = false) {}

    /* La classe a des accesseurs (get) et des mutateurs (set) pour chaque propriété, ce qui permet un accès contrôlé aux propriétés privées de la classe.
    Les accesseurs et les mutateurs sont utilisés pour lire et écrire les valeurs des propriétés privées de manière encapsulé */

    // Définition des accesseurs get et set pour l'attribut id
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    // Définition des accesseurs get et set pour l'attribut item
    get item() {
        return this._item;
    }

    set item(item) {
        this._item = item;
    }

    // Définition des accesseurs get et set pour l'attribut checked
    get checked() {
        return this._checked;
    }

    set checked(checked) {
        this._checked = checked;
    }
}

/* NOTE 
L'accès contrôlé aux propriétés privées de la classe est réalisé grâce à l'utilisation de getters (accesseurs) et setters (mutateurs). Ces méthodes permettent de lire et d'écrire les valeurs des propriétés privées, respectivement.

Dans le code fourni :

    Les accesseurs (get) permettent de lire la valeur des propriétés privées (_id, _item, _checked).
    Les mutateurs (set) permettent de définir les valeurs des propriétés privées.

Voici comment cela fonctionne avec un exemple :

****************************************************
// Crée une instance de la classe ListItem
const listItem = new ListItem();

// Utilise l'accesseur pour lire la valeur de la propriété privée _id
const idValue = listItem.id;
console.log(idValue); // Affiche la valeur actuelle de _id (par défaut, une chaîne vide)

// Utilise le mutateur pour définir une nouvelle valeur pour la propriété privée _id
listItem.id = "newId";

// Utilise à nouveau l'accesseur pour lire la nouvelle valeur de la propriété privée _id
const newIdValue = listItem.id;
console.log(newIdValue); // Affiche la nouvelle valeur de _id, qui est maintenant "newId"
****************************************************

Dans cet exemple, l'accès à la propriété privée _id se fait à travers l'accesseur id et le mutateur id. Ces méthodes fournissent un moyen d'interagir avec les propriétés privées de la classe de manière contrôlée. L'utilisation de ces accesseurs et mutateurs permet à la classe de définir des règles et des logiques supplémentaires lors de l'accès ou de la modification des propriétés, ce qui peut être utile pour maintenir la cohérence et la validité des données à l'intérieur de la classe.

*/
