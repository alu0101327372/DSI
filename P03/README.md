# Tipos de datos estáticos y funciones
Los objetivos en esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad, tanto los tipos de datos estáticos en TypeScript, como las funciones, empleando también expresiones regulares. Además de configurar la documentación en typedoc.


## Estructura del proyecto
Para generar la estructura incial del proyecto nos dirigimos al directorio donde vamos a empezar y ejecutamos `npm init --yes`.
```
.
├── .eslintrc.json
├── .git
├── .gitignore
├── .mocharc.json
├── _config.yml
├── dist
├── docs
├── index.md
├── node_modules
├── package-lock.json
├── package.json
├── src
├── test
├── tsconfig.json
└── typedoc.json
```

## Ejercicios
### Ejercicio 1
Se define una función [isLeapYear](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-1.ts) que devuelva si un año concreto es bisiesto o no. La función deberá recibir como parámetro el año a evaluar y devolverá verdadero o falso según corresponda.

#### Detalles de la implementación
Para comprobar si un año es bisiesto, desde un enfoque algorítmico, se consideran las proposiciones o enunciados lógicos siguientes:
- p: Es divisible entre 4
- q: Es divisible entre 100 (¬q entonces significa no divisible entre 100)
- r: Es divisible entre 400

Entonces la formula lógica `p ^ (¬q v r)` para establecer si un año dado es bisiesto: es bisiesto si es divisible entre cuatro y (no es divisible entre 100 o es divisible entre 400).

El método comprueba que esto se cumpla haciendo uso de una sentencia condicional if. En otro caso devuelve false.
```
if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
  return true;  
}
```

### Ejercicio 2
Se definen dos funciones la primera, recibirá un entero positivo y devolverá como resultado una cadena de texto con la representación factorial del número recibido. Por el contrario, la función factorialToDecimal realizará la operación opuesta. Esto es, recibirá como paŕametro una cadena de texto en notación factorial y devolverá el número entero que representa.

### Ejercicio 3
Se definen dos funciones [fromSnakeToCamelCase y fromCamelToSnakeCase](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-3.ts) que recibirán como parámetro una cadena de texto y devolverán otra cadena con el nuevo formato. La primera función recibirá una cadena de texto en formato Snake Case y la convertirá a formato Camel Case. La segunda función realizará la operación contraria.

#### fromSnakeToCamelCase()
Separamos la cadena y la guardamos en un vector de strings usando el método `split()`. A continuación recorremos cada elementos de ese vector. Y hacemos lo siguiente:
1. En el primer elemento guardamos lo que haya en el vector, en el resultado.
2. A partir del segundo elemento, necesitamos pasar a UpperCase el primer carácter. Para ello, utilizamos la función `charAt()` para elegir el carácter y `toUppercase()` para convertirlo en una mayúscula.
3. Devolvemos el resultado uniendo el vector con el método `join()`.

El código es el siguiente:
```
for (let element = 0; element < str_vector.length; element++) {
  if (element === 0) {
    result.push(str_vector[element]);
  } else {
    result.push(str_vector[element].charAt(0).toUpperCase() + str_vector[element].slice(1));
  }
}
```
<br>

#### fromCamelToSnakeCase()
En esta función definimos una cadena que busca un valor o una expresión regular. Para ello utilizamos el método `replace()` al que le pasaremos como parámetro la expresion regular `/([A-Z])/g` que cogera las letra en mayúscula de cada palabra en la cadena. Y guarda el resultado en la variable **$1**. Finalmente, cambiamos los espacios por guiones bajos y lo cambiamos todo a minúscula usando el método `toLowerCase()`.

El código es el siguiente:
```
  var result: string = str.replace(/([A-Z])/g, " $1" );
  return result.split(' ').join('_').toLowerCase();
```

### Ejercicio 4
Se define una función [isValidISBN](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-4.ts) que compruebe la validez de un código ISBN-10. La función recibirá como parámetro una cadena de caracteres compuesta por un posible código ISBN-10 separado o no por guiones. Como resultado, la función devolverá verdadero o falso según corresponda con la validez del código ISBN-10.

#### Detalles de la implementación
La primera línea de código nos sirve para quitar los guiones del código, utilizando para ello una expresión regular:
```
let str = isbn.replace(/[^0-9X]/gi, '');
```

A continuación comprobaremos si el código cumple con el primer requisito, es decir, ser de tamaño 10:
```
if (str.length !== 10) {
  return result;
}
```

El siguiente paso es recorrer el código cambiando los valores de strings a number en base 10, para ello utilizamos el método `parseInt()`. Los primeros 9 dígitos del mismo, pueden tomar cualquier valor entre 0 y 9, pero los últimos dígitos, a veces, pueden tomar un valor igual a 10; esto se hace escribiéndolo como 'X'. Por ello para verificar un ISBN, se calcula 10 veces el primer dígito, más 9 veces el segundo dígito, más 8 veces el tercer dígito y así sucesivamente hasta sumar 1 vez el último dígito. Si el número final no deja resto cuando se divide por 11, el código es un ISBN válido. Esto es lo que se hace en la sentencia else:
```
else {
  for (let i = 0; i < 9; i++) {
    digit = parseInt(str[i], 10);
    sum += weight * digit;
    weight--;
  }
  check = 11 - sum % 11;
  if (check === 10) {
    checkStr = 'X';
  } else {
    checkStr = check.toString();
}
```

### Ejercicio 5
Se define una función [sortDecreasing](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-5.ts) que recibe un entero no negativo como argumento y devuelva otro entero construido a partir de los dígitos ordenados de manera descendente.

#### Detalles de la implementación
Se guarda el número en un array de tipo number, para ello debemos separar cada carácter con el método `split()` y luego creamos un nuevo array con los resultados de la llamada a la función [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) a cada uno de sus elementos. El código es el siguiente:
```
let numArray: number[] = String(num).split("").map(Number);
```

Finalmente, ordenamos los valores del array y los devolvemos ordenados formando un solo número utilizando el método `join()`.

### Ejercicio 6
Se define una función [ipsInRange](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-6.ts) que reciba como parámetros dos cadenas y devuelva un valor numérico que represente el número de IPs disponibles en el rango correspondiente.

#### Detalles de la implementación
Cada IP se guarda en un array de string donde cada elemento es un número de la IP, lo hacemos de esta forma:
```
let ip1Array: string[] = ip1.split('.');
let ip2Array: string[] = ip2.split('.');
```

A continuación recorremos cada uno de esos arrays y guardamos en el array de resultados cada elemento,  usando el método `push()`. Esos elementos los convertiremos antes a enteros usando la función `parseInt()` y los volveremos a convertir en strings utilizando la base decimal usando `toString(2)`, además usaremos sobre estas cadenas el método `padStart()` que rellena la cadena actual con **0's** de modo que la cadena resultante alcance una longitud de 8 carácteres. El código sería el siguiente:
```
let result1: string[] = [];
let result2: string[] = [];
ip1Array.forEach(element => {
  result1.push(parseInt(element).toString(2).padStart(8, '0'));
});

ip2Array.forEach(element => {
  result2.push(parseInt(element).toString(2).padStart(8, '0'));
});
```

Finalmente, unimos las cadenas de cada array en una sola utilizando el método `join()` y devolvemos el valor absoluto convertido a entero usando de nuevo la función `parseInt()`:
```
let str1: string = result1.join('');
let str2: string = result2.join('');

return Math.abs(parseInt(str1, 2) - parseInt(str2, 2));
```

### Ejercicio 7
Se define una función [cabezasCerberus](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-7.ts) que dado el número inicial de cabezas que tiene el Cerberus, el valor de n, así como la cantidad de ataques que Diana va a realizar, devuelva el número de cabezas que el Cerberus tendrá al final de los ataques.

#### Detalles de la implementación
Se declara factorial que es una variable que guarda el resultado de una llamada a la función que realiza el factorial de un número:
```
var factorial = (num: number): number => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1); 
}
```

La función itera sobre el número de ataques, dentro del bucle se realiza la formula siguiente:
```
cabezas = cabezas - 1 + factorial(i) * n;
i++;
```

Finalmente, se devuelve el número de cabezas que se ha calculado.

### Ejercicio 8
Se define una función [pokemon](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-8.ts) que reciba como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente. La función devolverá como resultado el daño causado.

Los ataques pueden ser super efectivos, neutrales o no muy efectivos. Esto depende del tipo de Pokemons que estén combatiendo.

- Super efectivo = x2 de daño
- Neutral = x1 de daño
- No muy efectivo = x0.5 de daño

#### Detalles de la implementación
Primero, se define un tipo de datos personalizado para los tipos de pokemon aceptados:
```
type tiposPokemon = "fuego" | "agua" | "hierba" | "electrico";
```

Para el cálculo de la efectividad se utilizan varios condicionales, que se resumen en el establecimiento de estos emparajamientos:
- fuego > hierba
- fuego < agua
- fuego = electrico
- fuego = fuego

***

- agua < hierba
- agua = agua
- agua < electrico
- agua > fuego

***

- hierba = hierba
- hierba > agua
- hierba = electrico
- hierba < fuego

***

- electrico = hierba
- electrico > agua
- electrico = electrico
- electrico = fuego

Finalmente, se devuelve el daño que es calculado de la siguiente forma:
```
return 50 * (ataque / defensa) * efectividad;
```

### Ejercicio 9
Se definen dos funciones [romanToDecimal y decimalToRoman](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-9.ts) que ayude a Astérix a convertir un número romano pasado como argumento al número entero en base decimal correspondiente y viceversa, el cual tiene que retornar la función.

#### Constantes
Se definen dos constantes, una que contiene los numeros decimales y otra sus respectivos en romano:
```
const DECIMAL: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const ROMAN: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
```
<br>

#### Romano a decimal
Se itera el sobre el tamaño del numero que se pasa por argumento, se escoge dos números:
- Si no se ha llegado al final:
    1. El primer número que coincide con el iterador
    2. El número siguiente

    Si el primer número es mayor que el segundo se añade al resultado, en caso contrario se añade al resultado la resta del segundo menos el primero.

- En caso contrario, se añade a la solución el primer número.
```
while (i < num.length) {
  let roman1: number = DECIMAL[ROMAN.indexOf(num[i])];
  if (i + 1 < num.length) {
    let roman2: number = DECIMAL[ROMAN.indexOf(num[i + 1])];
    if (roman1 >= roman2) {
      sum += roman1;
      i++;
    } else {
      sum += roman2 - roman1;
      i += 2;
    }
  } else {
    sum += roman1;
    i++;
  }
}
```

Finalmente, se devuelve la solución.

#### Decimal a romano
Se itera sobre la constante DECIMAL, y dentro de ese bucle se itera sobre el modulo del número decimal que se pasa por argumento y el número decimal sobre el que se esta iterando. Se añade al resultado el número romano que corresponde con el decimal que sobre el que se itera, y se descuenta una vez añadido al resultado:
```
for (let i = 0; i < DECIMAL.length; i++) {
  while (num % DECIMAL[i] < num) {
    result += ROMAN[i];
    num -= DECIMAL[i];
  }
}
```

Finalmente, se devuelve la solución.

### Ejercicio 10
Se define una función [manhattanDistance](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/src/ejercicio-10.ts) que recibe dos puntos como argumentos, que tengan el mismo número de coordenadas (n números enteros) y que devuelva la distancia de Manhattan entre ambos puntos.

#### Detalles de la implementación
Se reciben dos arrays como parámetros que corresponden con los dos puntos sobre el que se calculará la distancia de Manhattan. A continuación, se comprueba que los puntos sean del mismo tamaño:
```
if (p1.length != p2.length) {
  return 0;
}
```
   
Luego se itera sobre un punto y se añade al resultado el valor absoluto de la resta de los puntos:
```
for (let i = 0; i < p1.length; i++) {
  result += Math.abs(p1[i] - p2[i])
}
```

Finalmente, se devuelve el resultado.

## Pruebas
Para la generación de pruebas utilizaremos Mocha junto con la librería Chai. 

Mocha es un marco de prueba de JavaScript rico en funciones que se ejecuta en Node.js y en el navegador, lo que hace que las pruebas asincrónicas sean simples y divertidas. Las pruebas de Mocha se ejecutan en serie, lo que permite informes flexibles y precisos, al tiempo que asigna excepciones no detectadas a los casos de prueba correctos. Para instalarlo ejecutamos `npm install --save-dev mocha`.

Chai es una biblioteca de aserciones BDD/TDD para Node.js y el navegador que se puede combinar maravillosamente con cualquier marco de prueba de JavaScript. Para instalarlo ejecutamos `npm install --save-dev chai`. 

También necesitaremos instalar `npm install --save-dev @types/mocha` y `npm install --save-dev @types/chai`, que nos ayudarán a utilizar definiciones de TypeScript para mocha y chai.

A continuación, creammos el directorio [test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/tree/master/test). Y añadimos al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/package.json) las siguientes líneas de código:
```
"scripts": {
  "test": "mocha"
},
```

Ahora para ejecutar cada una de las pruebas sólo tenemos que ejecutar `npm run test`.

## Documentación
Para generar la documentación utilizaremos la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, ejecutamos `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/package.json) la siguiente línea de código:
```
"scripts": {
  "doc": "typedoc"
},
```

Ahora para generar la documentación sólo tenemos que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/tree/master/docs).
