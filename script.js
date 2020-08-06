const lista = ['Practica de javascript', 'Ir al supermecado', 'Pasear a los perros', 'Lavar los trastos'];
const description = ['tarea1', 'tarea2', 'tarea3', 'tarea4'];
const menu = document.getElementById('menu');
const listMenu = document.createElement('ul');
menu.appendChild(listMenu);
for(let i = 0; i<lista.length; i++){
    let element = document.createElement('li');
    listMenu.appendChild(element);
    let input = document.createElement('input');
    element.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', description[i]);
    label= document.createElement('label');
    element.appendChild(label);
    label.setAttribute('for', description[i]);
    label.innerHTML = lista[i];
}