// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

function organizeShoes(shoes) {
  const count = {}; // Objeto para contar botas de cada tipo

  for (const { type, size } of shoes) {
    if (!count[size]) {
      count[size] = { I: 0, R: 0 };
    }
    count[size][type]++; // Aumentar el contador del tipo de bota
  }

  const result = [];

  for (const size in count) {
    const pairs = Math.min(count[size].I, count[size].R); // Se pueden hacer estos pares
    for (let i = 0; i < pairs; i++) {
      result.push(Number(size)); // Agregamos el número de pares al resultado
    }
  }

  return result;
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const example1 = organizeShoes(shoes) // [38, 42]
console.log(example1)
console.log('--------------------------------')
console.log("\n")

 const shoes2 = [
   { type: 'I', size: 38 },
   { type: 'R', size: 38 },
   { type: 'I', size: 38 },
   { type: 'I', size: 38 },
   { type: 'R', size: 38 }
 ]

 const example2 = organizeShoes(shoes2)  // [38, 38]
 console.log(example2)
 console.log('--------------------------------')
 console.log("\n")

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

const example3 = organizeShoes(shoes3) // []
console.log(example3)
console.log('--------------------------------')
console.log("\n")
