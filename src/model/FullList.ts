// Importer la classe ListItem depuis le fichier ListItem.ts
import ListItem from "./ListItem.ts";

// Définir une interface List qui décrit les propriétés et les méthodes d'une liste d'éléments
interface List {
    list: ListItem[]; // Un tableau d'objets ListItem
    load(): void; // Une méthode pour charger la liste depuis le stockage local
    save(): void; // Une méthode pour sauvegarder la liste dans le stockage local
    clearList(): void; // Une méthode pour vider la liste

    addItem(itemObj: ListItem): void; // Une méthode pour ajouter un élément à la liste
    removeItem(id: string): void; // Une méthode pour supprimer un élément de la liste
}

// Définir une classe FullList qui implémente l'interface List
export default class FullList implements List {
    // Définir une propriété statique instance qui contient une instance unique de la classe FullList
    static instance: FullList = new FullList();

    // Définir un constructeur qui prend un paramètre privé _list qui est un tableau d'objets ListItem, marqué comme private, ce qui signifie qu’il ne peut être accédé qu’à l’intérieur de la classe.
    constructor(private _list: ListItem[] = []) {}

    // Définir un accesseur get pour la propriété list, qui renvoie la valeur de la propriété _list
    get list(): ListItem[] {
        return this._list;
    }

    // Définir une méthode load qui charge la liste depuis le stockage local

    /* LA MÉTHODE LOAD
     utilise la méthode getItem de l’objet localStorage pour récupérer une chaîne de caractères stockée sous la clé "myList". L’objet localStorage permet de stocker des données localement dans le navigateur web. La méthode getItem renvoie soit une chaîne de caractères, soit null si la clé n’existe pas. La méthode load vérifie si le type de la valeur renvoyée est une chaîne de caractères, et si oui, elle utilise la fonction JSON.parse pour la convertir en un tableau d’objets JavaScript. La fonction JSON.parse prend une chaîne de caractères au format JSON et la transforme en une valeur JavaScript. La méthode load parcourt ensuite le tableau d’objets et crée un nouvel objet ListItem pour chaque objet, en utilisant le constructeur de la classe ListItem. La méthode load ajoute ensuite chaque objet ListItem à la propriété _list en utilisant la méthode addItem de la classe FullList. */

    load(): void {
        // Récupérer la chaîne de caractères stockée sous la clé "myList" dans le stockage local
        const storedList: string | null = localStorage.getItem("myList");

        // Vérifier si le type de la valeur renvoyée est une chaîne de caractères
        if (typeof storedList !== "string") {
            // Si ce n'est pas le cas, sortir de la méthode
            return;
        }

        // Convertir la chaîne de caractères en un tableau d'objets JavaScript
        const parsedList: { _id: string; _item: string; _checked: boolean }[] = JSON.parse(storedList);

        // Parcourir le tableau d'objets
        parsedList.forEach((itemObj) => {
            // Créer un nouvel objet ListItem pour chaque objet, en utilisant le constructeur de la classe ListItem
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);

            // Ajouter l'objet ListItem à la propriété _list en utilisant la méthode addItem de la classe FullList
            FullList.instance.addItem(newListItem);
        });
    }

    // Définir une méthode save qui sauvegarde la liste dans le stockage local

    /* LA MÉTHODE SAVE
     utilise la méthode setItem de l’objet localStorage pour stocker la propriété _list sous la clé "myList". La méthode save utilise la fonction JSON.stringify pour convertir la propriété _list en une chaîne de caractères au format JSON. La fonction JSON.stringify prend une valeur JavaScript et la transforme en une chaîne de caractères JSON. */

    save(): void {
        // Convertir la propriété _list en une chaîne de caractères au format JSON
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    // Définir une méthode clearList qui vide la liste

    /* LA MÉTHODE clearList affecte la propriété _list à un tableau vide, puis appelle la méthode save pour mettre à jour le stockage local. */

    clearList(): void {
        // Affecter la propriété _list à un tableau vide
        this._list = [];
        // Appeler la méthode save pour mettre à jour le stockage local
        this.save();
    }

    // Définir une méthode addItem qui ajoute un élément à la liste

    /* LA MÉTHODE addItem prend un paramètre itemObj qui est un objet ListItem, et l’ajoute à la fin du tableau _list en utilisant la méthode push. La méthode addItem appelle ensuite la méthode save pour mettre à jour le stockage local. */

    addItem(itemObj: ListItem): void {
        // Ajouter l'objet itemObj à la fin du tableau _list en utilisant la méthode push
        this._list.push(itemObj);
        // Appeler la méthode save pour mettre à jour le stockage local
        this.save();
    }

    // Définir une méthode removeItem qui supprime un élément de la liste

    /* LA MÉTHODE removeItem prend un paramètre id qui est une chaîne de caractères, et filtre le tableau _list en utilisant la méthode filter. La méthode filter crée un nouveau tableau avec les éléments qui satisfont une condition donnée. La condition est une fonction fléchée qui compare l’identifiant de chaque élément avec le paramètre id. Une fonction fléchée est une façon concise d’écrire une fonction anonyme. La méthode removeItem affecte le nouveau tableau filtré à la propriété _list, puis appelle la méthode save pour mettre à jour le stockage local. */

    removeItem(id: string): void {
        // Filtrer le tableau _list en utilisant la méthode filter
        this._list = this._list.filter((item) => item.id !== id); // La condition est une fonction fléchée qui compare l'identifiant de chaque élément avec le paramètre id
        // Appeler la méthode save pour mettre à jour le stockage local
        this.save();
    }
}
