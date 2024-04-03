//test
// alert("ciao");


// Creo la lista
const list = ['pane', 'pasta', 'verdure', 'carne', 'pesce'];

// Trovo l'elemento lista in pagina e lo salvo in variabile
const shoppingListElem = document.querySelector('.shopping-list');
console.log(shoppingListElem);


// Creo variabile indice
let i = 0;

// Creo ciclo while per leggere la lista
while (i < list.length) {

    // Salvo l'elemento corrente dell'array in una variabile
    const currentListItem = list[i];

    // Creo li
    const listItemElem = document.createElement('li');

    // Inserisco l'elemento corrente dentro l'li
    listItemElem.innerHTML = currentListItem;
    console.log(listItemElem);

    // Aggiuno l'li con dentro l'elemento corrente dell'array nel tag ul in pagina
    shoppingListElem.append(listItemElem);

    // Incremento l'indice
    i++;
}
