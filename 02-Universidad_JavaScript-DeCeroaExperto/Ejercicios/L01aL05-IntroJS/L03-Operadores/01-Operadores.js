let a = 3, b = 2, c=1, d= 4, e = '3';
let z = a + b;
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log('Resultado de la resta: ' + z);

z = a * b;
console.log('Resultado de la multiplicacion: ' + z);

z = a / b;
console.log('Resultado de la division: ' + z);

z = a % b;
console.log('Resultado del resto: ' + z);

z = a ** b;
console.log('Resultado de la potencia: ' + z);

// Incremento
// Pre-incremento
z = ++a;
console.log(a);
console.log('Resultado del pre-incremento: ' + z);

// Post-incremento
z = b++;
console.log(b);
console.log('Resultado del post-incremento: ' + z);

// Decremento
// Pre-decremento
z = --a;
console.log(a);
console.log('Resultado del pre-decremento: ' + z);

// Post-decremento
z = b--;
console.log(b);
console.log('Resultado del post-decremento: ' + z);

// Presedencia
z = a * b + c;
console.log('Resultado de la operacion: ' + z);

z = c + a * b;
console.log('Resultado de la operacion: ' + z);


z = a * b + c / d;
console.log('Resultado de la operacion: ' + z);

z = c + a * b / d;
console.log('Resultado de la operacion: ' + z);

z = (c + a) * b / c;
console.log('Resultado de la operacion: ' + z);

// Asignacion
z *= d;
console.log('Resultado de la operacion: ' + z);

z /= d;
console.log('Resultado de la operacion: ' + z);

z %= a;
console.log('Resultado de la operacion: ' + z);

z **= d;
console.log('Resultado de la operacion: ' + z);

// Comparacion Igualdad
z = a == b;
console.log('Resultado de la comparacion: ' + z);

z = a == e;
console.log('Resultado de la comparacion: ' + z);

z = a === e; // Evalua no solo el valor si no tambien el tipo de dato (comparador estricto)
console.log('Resultado de la comparacion: ' + z);

// Comparacion Desigualdad
z = a != b;
console.log('Resultado de la comparacion: ' + z);

z = a != e;
console.log('Resultado de la comparacion: ' + z);

z = a !== e; // Evalua no solo el valor si no tambien el tipo de dato (comparador estricto)
console.log('Resultado de la comparacion: ' + z);

// Comparacion <=>
z = a < e;
console.log('Resultado de la comparacion: ' + z);

z = a <= e;
console.log('Resultado de la comparacion: ' + z);

z = a > e; // Evalua no solo el valor si no tambien el tipo de dato (comparador estricto)
console.log('Resultado de la comparacion: ' + z);

z = a >= e; // Evalua no solo el valor si no tambien el tipo de dato (comparador estricto)
console.log('Resultado de la comparacion: ' + z);
