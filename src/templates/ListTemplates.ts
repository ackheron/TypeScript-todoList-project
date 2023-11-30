// Importe la classe FullList depuis le fichier ../model/FullList.ts
import FullList from "../model/FullList.ts";

/* Explications :

    DOMList Interface : Définit une interface pour les éléments DOM qui affichent une liste. Elle spécifie une propriété ul de type HTMLUListElement ainsi que les méthodes clear et render.

    ListTemplate Class : Implémente l'interface DOMList. La classe est conçue pour rendre une liste (FullList) dans un élément HTML avec l'id "listItems".

        Le constructeur privé initialise la propriété ul avec l'élément HTMLUList ayant l'id "listItems".

        La méthode clear vide le contenu de l'élément ul.

        La méthode render prend une instance de FullList, efface le contenu existant, puis crée des éléments DOM pour chaque élément de la liste, y compris des cases à cocher, des labels et des boutons de suppression.

        CheckBox Handling : Chaque case à cocher est associée à un événement de changement, mettant à jour l'état de vérification de l'élément et sauvegardant la liste.

        Suppression d'élément : Chaque bouton de suppression est associé à un événement de clic, supprimant l'élément de la liste et rendant à nouveau la liste.

Le code de ce fichier sert à manipuler et afficher la liste dans l'interface utilisateur (DOM) en utilisant les fonctionnalités définies dans les fichiers précédents. */

// Définit une interface DOMList qui contient une propriété ul et deux méthodes clear et render
interface DOMList {
    ul: HTMLUListElement; // La propriété ul est de type HTMLUListElement
    clear(): void; // La méthode clear ne retourne rien (void)
    render(fullList: FullList): void; // La méthode render prend en paramètre un objet de type FullList et ne retourne rien
}

// Définit une classe ListTemplate qui implémente l'interface DOMList
export default class ListTemplate implements DOMList {
    ul: HTMLUListElement; // Déclare la propriété ul de type HTMLUListElement

    // Déclare le constructeur comme privé, ce qui empêche la création d'instances avec le mot-clé new
    private constructor() {
        // Initialise la propriété ul en sélectionnant l'élément HTML avec l'id "listItems"
        this.ul = document.querySelector("#listItems") as HTMLUListElement;
    }

    // Définit la méthode clear qui vide le contenu de l'élément ul
    clear(): void {
        this.ul.innerHTML = ""; // Affecte une chaîne vide à la propriété innerHTML de l'élément ul
    }

    /* -------------------------------------------------------------------------- */

    // Définit la méthode render qui remplit l'élément ul avec les éléments de l'objet FullList passé en paramètre
    render(fullList: FullList): void {
        this.clear(); // Appelle la méthode clear pour vider la liste

        // Parcourt la propriété list de l'objet FullList avec la méthode forEach
        fullList.list.forEach((item) => {
            // Crée un élément li de type HTMLLIElement
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item"; // Affecte la classe "item" à l'élément li

            /* -------------------------------------------------------------------------- */
            // Crée un élément input de type HTMLInputElement
            const check = document.createElement("input") as HTMLInputElement;
            check.type = "checkbox"; // Affecte le type "checkbox" à l'élément input
            check.id = item.id; // Affecte l'id de l'élément de la liste à l'élément input
            check.checked = item.checked; // Affecte l'état checked de l'élément de la liste à l'élément input

            li.append(check); // Ajoute l'élément input à l'élément li

            // Ajoute un écouteur d'événement sur l'élément input, qui se déclenche quand l'état checked change
            check.addEventListener("change", () => {
                item.checked = !item.checked; // Inverse l'état checked de l'élément de la liste
                fullList.save(); // Appelle la méthode save de l'objet FullList pour enregistrer l'état de la liste
            });

            /* -------------------------------------------------------------------------- */

            // Crée un élément label de type HTMLLabelElement
            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = item.id; // Affecte l'id de l'élément input à la propriété htmlFor de l'élément label
            li.append(label); // Ajoute l'élément label à l'élément li

            /* -------------------------------------------------------------------------- */

            // Crée un élément button de type HTMLButtonElement
            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "button"; // Affecte la classe "button" à l'élément button
            button.textContent = "X"; // Affecte le texte "X" à l'élément button

            li.append(button); // Ajoute l'élément button à l'élément li

            // Ajoute un écouteur d'événement sur l'élément button, qui se déclenche quand on clique dessus
            button.addEventListener("click", () => {
                fullList.removeItem(item.id); // Appelle la méthode removeItem de l'objet FullList pour supprimer l'élément de la liste
                this.render(fullList); // Appelle la méthode render pour mettre à jour l'affichage de la liste
            });

            this.ul.append(li); // Ajoute l'élément li à l'élément ul de la classe ListTemplate
        });
    }
}
