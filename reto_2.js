// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const character = "*";
  let top = "";
  let middle = "";
  let result;

  const largestName = Math.max(...(names.map(el => el.length)));;
  top += character.repeat(largestName + 4) + "\n"
    let bottom = top.slice(0, -1);

    for (let name of names) {
      middle += character + " " + name + " ".repeat(largestName - name.length) + " " + character + "\n";
    }

  result = top + middle + bottom;

  return result;
}

const example1 = createFrame(["midu", "madeval", "educalvolpz"]);

// Resultado esperado:
//   ***************
//   * midu        *
//   * madeval     *
//   * educalvolpz *
//   ***************

console.log(example1);

const example2 = createFrame(["midu"]);
console.log(example2);

// Resultado esperado:
//   ********
//   * midu *
//   ********

const example3 = createFrame(["a", "bb", "ccc"]);
console.log(example3);

// Resultado esperado:
//   *******
//   * a   *
//   * bb  *
//   * ccc *
//   *******

const example4 = createFrame(["a", "bb", "ccc", "dddd"]);
console.log(example4);

// Resultado esperado:
//   ********
//   * a    *
//   * bb   *
//   * ccc  *
//   * dddd *
//   ********
