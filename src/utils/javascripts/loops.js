// Différents exemples de loops en JavaScript
// ------------------------------------------------------------------

// 1. For loop
// initialisation: une expression (généralement une variable) qui est initialisée une seule fois avant le début de la boucle.

// condition: une expression évaluée avant chaque itération. Si cette expression est vraie, les instructions de la boucle sont exécutées.
// Si l'expression est fausse, la boucle est terminée.

// incrémentation: une expression exécutée à la fin de chaque itération. Elle est utilisée pour modifier la valeur de la variable de contrôle.
for (initialisation; condition; incrémentation) {
  // instructions à exécuter
}

// Exemple
for (let i = 0; i < 5; i++) {
  console.log(i); // affiche 0, 1, 2, 3, 4
}

// 2. While loop
// Exécute des instructions tant qu'une condition est vraie.
while (condition) {
  // instructions à exécuter
}

// Exemple
let i = 0;
while (i < 5) {
  console.log(i); // affiche 0, 1, 2, 3, 4
  i++;
}

// 3. Do...While loop
// Exécute des instructions une fois, puis répète l'exécution tant qu'une condition est vraie.
do {
  // instructions à exécuter
} while (condition);

// Exemple
do {
  console.log(i); // affiche 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// Ici on a un exemple de loop qui utilise un objet une façon de boucler sur les propriétés d'un objet)
// 4. For...In loop
// Boucle sur les propriétés d'un objet.
for (variable in object) {
  // instructions à exécuter
}

// Exemple
let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`); //affiche "obj.a = 1", "obj.b = 2", "obj.c = 3"
}

// 5. For...Of loop
// Boucle sur les éléments d'un objet itérable (comme un tableau).
for (variable of object) {
  // instructions à exécuter
}

// Exemple
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); // affiche 1, 2, 3
}
