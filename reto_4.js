// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
// Ejemplos:

function createXmasTree(height, ornament) {
  let tree = "";
  let width = height * 2 - 1;

  for(let i = 0; i < height; i++) {
    if(i < height) {
      const spaces = '_'.repeat(height - i - 1);
      const ornaments = ornament.repeat(width - spaces.length * 2);
      tree += `${spaces}${ornaments}${spaces}\n`;
    }
  }

  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  tree += `${trunk}\n${trunk}`;

  return tree;
}

const tree1 = createXmasTree(5, "*");
console.log(tree1, '\n');
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2, '\n');
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3, '\n');
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
// Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.
