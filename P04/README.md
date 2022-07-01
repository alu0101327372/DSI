# Práctica 4 - Arrays, tuplas y enumerados
En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los arrays, tuplas y enumerados de TypeScript.

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
Se define una función [productTable](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-1.ts) que recibe como parámetro un número N >= 1 y que devuelve un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos.

#### Detalles de la implementación
Lo primero que haremos será comprobar que N >= 1:
- Si se cumple, declaramos un array de dos dimensiones que guardará el resultado, luego iteramos sobre N, y en cada iteración creamos un array que contiene cada tabla de multplicar, volvemos a iterar sobre N y añadimos mediante el método `push()`, la multiplicación de i * j, donde i es el valor de cada tabla y j el valor del producto que contiene cada tabla:
    ```
    if (N >= 1) {
      const array: number[][] = [];
      for (let i = 1; i <= N; i++) {
        const tabla: number[] = [];
        for (let j = 1; j <= N; j++) {
          tabla.push(i * j);
        }
        array.push(tabla);
      }
      return array;
    }
    ```

- Si no se cumple, devolvemos undefined:
    ```
    else {
      return undefined;
    }
    ```


#### Prueba
Para probar este ejercicio, describimos dos conjuntos de pruebas:
1. Verficación de funcionamiento, en el que probamos el funcionamiento general.
    ```
    it('N = 2; Resultado: [[1, 2], [2, 4]', () => {
      expect(productTable(2)).to.be.eql([[1, 2], [2, 4]]);
    });
    it('N = 3; Resultado: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
      expect(productTable(3)).to.be.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    });
    it('N = 4; Resultado: [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
      expect(productTable(4)).to.be.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
    });
    ```

2. Sólo permite valores N >= 1, para cubrir todos los casos posibles.
    ```
    it('N = 0; Resultado: undefined', () => {
      expect(productTable(0)).to.be.equal(undefined);
    });
    ```

### Ejercicio 2
Se definen dos [funciones](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-2.ts):
1. Una función `fromArrayToRanges()` que recibe un array o lista de números enteros y los comprima en rangos.
2. Una función `fromRangesToArray()` que lleve a cabo la operación inversa, es decir, que reciba como argumento una cadena de caracteres representando una serie de rangos y devuelva el array de números correspondiente.

#### Detalles de la implementación `fromArrayToRanges()`
Primero comprobamos que el array que recibimos esté vacío:
- Si lo está, devolvemos undefined:
    ```
    if (array.length === 0) {
      return undefined;
    }
    ```

- Si no lo está, iteramos mediante un bucle for sobre el array utilizando dos variables que corresponden con el inicio y el final del rango que queremos comprobar, teniendo siempre en cada iteración i = j, esto nos va a permitir que en cada iteración el rango comience en el mismo número.

    A continuación, mientras que el valor actual del array sea igual al consecutivo - 1 aumentaremos el valor de j, es decir, estamos aumentando el rango.
    ```
    while (array[j] === array[j + 1] - 1) {
      j++;
    }
    ```

    En cada iteración del bucle for pueden ocurrir dos cosas:

    - El valor de i es distinto de j; añadiremos el valor del inicio del rango, es decir, el de i, y el del final j separados por un guión bajo:
        ```
        if (i !== j) {
          result.push(array[i] + "_" + array[j])
        }
        ```

    - El valor de i y j es el mismo por lo que no estaríamos contemplando un rango, así que añadimos j al resultado:
        ```
        else {
          result.push(array[j].toString())
        }
        ```

Finalmente devolvemos una cadena con el resultado usando la función `join()`.

#### Detalles de la implementación `fromRangesToArray()`
Primero comprobamos que la cadena que recibimos está vacío:
- Si lo está, devolvemos undefined:
    ```
    if (array.length === 0) {
      return undefined;
    }
    ```

- Si no lo está, guardamos la cadena en un array que contenga cada uno de los elementos:
    ```
    const range: string[] = str.split(", ");
    ```

    Declaramos dos variables de tipo number start y end, que corresponden con el inicio y el final de cada rango. E itermos sobre las dos dimensiones del array que contenía cada rango para operar. Pueden darse dos casos:
    - El string que observamos en cada iteración, contiene guión bajo:
        En este caso, asignamos las variables start y end, como el inicio del rango y el final del rango
        ```
        start = parseInt(range[i]);
        end = parseInt(range[i].substring(j + 1));
        ```

        Y añadimos todos los números que se encuentran dentro del rango al resultado:
        ```
        for (let k = start; k <= end; k++) {
          result.push(k);
        }
        ```

    - En caso contrario, añadimos el número al resultado

Finalmente devolvemos el array de resultados.

#### Prueba
Describimos dos conjuntos de pruebas:
1. Pruebas generales de funcionamiento, donde simplimente nos limitamos a comprobar el comportamiento de la función a diferentes entradas de caso general:
    ```
    describe('fromArrayToRanges y fromRangesToArray', () => {
      it('[5, 6, 7, 9, 12, 13, 14] <=> 5_7, 9, 12_14', () => {
        expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.be.eql("5_7,9,12_14");
        expect(fromRangesToArray("5_7, 9, 12_14")).to.be.eql([5, 6, 7, 9, 12, 13, 14]);
      });
      it('[-3, -2, -1, 3, 5, 6, 7] <=> -3_-1, 3, 5_7', () => {
        expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.be.eql("-3_-1,3,5_7");
        expect(fromRangesToArray("1_3, 5_7")).to.be.eql([1, 2, 3, 5, 6, 7]);
      });
    });
    ```

2. Pruebas frente a casos de undefined:
    ```
    describe('Si no se le pasa vacío devuelve undefined', () => {
      it(' = undefined', () => {
        expect(fromArrayToRanges([])).to.be.equal(undefined);
      });
      it(' = undefined', () => {
        expect(fromRangesToArray('')).to.be.equal(undefined);
      });
    ```

### Ejercicio 3
El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener que memorizar los valores de las bandas.

La función [decodeResistor](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-3.ts) recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia. La función devuelve un número de dos dígitos incluso si recibe más de dos colores como parámetros.

#### Detalles de la implementación
Previa a la implementación de la función, declaramos un tipo de dato codigoColores que corresponde a un array de tamaño 2 con una cadena y un número, que corresponde con el color y el valor que llevará asignado.
```
export type codigoColores = [string, number];
```

A continuación creamos un array del tipo creado, llamada resistencia, que contiene todos las resistencias posibles.
```
const resistencia: codigoColores[] = [
  ['negro', 0],
  ['marron', 1],
  ['rojo', 2],
  ['naranja', 3],
  ['amarillo', 4],
  ['verde', 5],
  ['azul', 6],
  ['violeta', 7],
  ['gris', 8],
  ['blanco', 9]
];
```

En la función, se recibe un parámetro Rest, que contiene los colores, pueden ocurrir dos cosas:
- No se le pasa ningún color, por lo que devuelve undefined.
- Se le pasa uno o mas colores:
    En este caso, iteramos por el tamaño del array de colores y lo convertimos todo a minúscula, para poder realizar comprobaciones con cadenas sin problema.

    Seguidamente realizaremos dos bucles anidados, uno para establecer dos dígitos, que es lo que pide el ejercicio, y el segundo comprobará que el valor que tiene el color que estamos comprobando, y lo añadimos a una cadena de resultado:
    ```
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < resistencia.length; j++) {
        if (colorCheck[i] === resistencia[j][0]) {
          result += resistencia[j][1];
        }
      }
    }
    ```

Finalmente, devolvemos como número entero los dos dígitos obtenidos.

#### Prueba
Describiremos cuatro conjuntos de pruebas:
1. Pruebas generales de funcionamiento, donde simplimente nos limitamos a comprobar el comportamiento de la función a diferentes entradas de caso general:
    ```
    describe('Verficación de funcionamiento', () => {
      it('Marrón-Verde = 15', () => {
        expect(decodeResistor('marron', 'verde')).to.be.eql(15);
      });
      it('Naranja-Verde = 15', () => {
          expect(decodeResistor('Naranja', 'verde')).to.be.eql(35);
      });
    });
    ```

2. La función devuelve siempre dos dígitos aunque se le pasen 3 parámetros:
    ```
    describe('Devuelve un valor de dos dígitos', () => {
      it('azUl-ROJO-amarillo = 62', () => {
        expect(decodeResistor('azUl', 'ROJO', 'amarillo')).to.be.equal(62);
      });
    });
    ```

3. La función permite tanto mayusculas como minusculas:
    ```
    describe('Permite tanto mayusculas como minusculas', () => {
      it('azUl-ROJO = 62', () => {
        expect(decodeResistor('azUl', 'ROJO')).to.be.equal(62);
      });
    });
    ```

4. Si no se le pasa ningun parámetro a la función devuelve undefined:
    ```
    describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
      it(' = undefined', () => {
        expect(decodeResistor()).to.be.equal(undefined);
      });
    });
    ```

### Ejercicio 5
Se define una función [meanAndConcatenate](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-5.ts) que recibe como parámetro un array que incluye caracteres de texto y números. La función devuelve como resultado un array con dos valores:
- La media de los valores numéricos.
- Una cadena resultado de la concatenación de caracteres del array recibido.

#### Detalles de la implementación
La función recibe un array de unión de tipos (number | string). Y pueden pasar dos cosas:
1. El array es vació, entonces devuelve undefined.
2. El array no está vació, entonces:
    Se declarán dos arrays vacíos, que contendrán los números y las cadenas. Lo primero que haremos será separar los números y las cadenas del array inicial y guardarlo en estos dos arrays. Para ello comprobamos el tipo de datos que tiene cada valor del array inicial:
    ```
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        numbers.push(array[i] as number);
      } else {
        strings.push(array[i] as string);
      }
    }
    ```

    A continuación calcularemos la media de los valores númericos. Para calcular la media tenemos que realizar el sumatorio de cada valor del array. Y dividirlo entren el tamaño de ese array. Siempre que el array no esté vacío:
    ```
    if (numbers.length !== 0) {
      for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j];
      }
      mean = sum / numbers.length;
    }
    ```

    Luego, tendremos que realiar la concatenación de las cadenas que habíamos guardado en el array de sólo cadenas. Para ello, sumamos en una string vacía, todas las cadenas del array. Siempre que no esté vacío:
    ```
    if (strings.length !== 0) {
      for (let k = 0; k < strings.length; k++) {
        concat += strings[k];
      }
    }
    ```

    Finalmente, debemos volver a unir en un array la media y la concatenación. Pero primero comprobamos que niguno de estos dos sea 0 o vacío, y en caso de que alguno lo fuera añadiremos al resultado el otro:
    ```
    if (mean !== 0 && concat !== '') {
      result.push(mean, concat);
    } else if (mean === 0) {
      result.push(concat);
    } else {
      result.push(mean);
    }
    ```

#### Prueba
Describiremos cuatro conjuntos de pruebas:
1. Pruebas generales de funcionamiento, donde simplimente nos limitamos a comprobar el comportamiento de la función a diferentes entradas de caso general:
    ```
    describe('Verficación de funcionamiento', () => {
      it('[u, 6, d, 1, i, w, 6, s, t, 4, a, 6, g, 1, 2, w, 8, o, 2, 0] => [3.6, "udiwstagwo"]', () => {
        expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.eql([3.6, "udiwstagwo"]);
      });
      it('[h, o, l, a, 1, 2, 3, 4] => [2.5, "hola"]', () => {
          expect(meanAndConcatenate(['h', 'o', 'l', 'a', 1, 2, 3, 4])).to.be.eql([2.5, "hola"]);
      });
    });
    ```

2. Prueba con la entrada de sólo números
    ```
    describe('Si no tiene cadenas solo devuelve la media', () => {
      it('[2, 4, 6, 8, 10] => 7.5', () => {
        expect(meanAndConcatenate([2, 4, 6, 8, 10])).to.be.eql([6]);
      });
    });
    ```

3. Prueba con la entrada de sólo cadenas
    ```
    describe('Si no tiene numeros solo devuelve la concatenación', () => {
      it('[h, o, l, a, c, a, r, a, c, o, l, a]', () => {
        expect(meanAndConcatenate(['h', 'o', 'l', 'a', 'c','a', 'r', 'a', 'c', 'o', 'l', 'a'])).to.be.eql(["holacaracola"]);
      });
    });
    ```

4. Prueba si no se le pasan parámetros
    ```
    describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
      it(' = undefined', () => {
        expect(meanAndConcatenate([])).to.be.equal(undefined);
      });
    });
    ```

### Ejercicio 6
Dado un array de números, se define una función [moveZeros](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-6.ts) que recibe como parámetro dicho array y mueve todos los ceros presentes en el array al final del mismo. El array debe mantener el mismo orden respecto al resto de elementos.

#### Detalles de la implementación
El array inicial puede tener cualquier tamaño por lo que tenemos dos caminos:
1. El tamaño es 0, entonces devolvemos undefined.
2. El tamaño >= 1, entonces:
    Declaramos un array vacío que contendrá los zeros que encontremos en el array inicial:
    ```
    let zeros: number[] = [];
    ```
    Luego, recorremos el array, si encontramos un cero, lo borramos utilizando el método `splice()`, y añadimos ese cero al vector de resultados. Así por cada cero que quitemos añadimos uno al otro array.
    ```
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        array.splice(i, 1);
        zeros.push(0);
      }
    }
    ```

    Finalmente devolvemos la concatenación del array inicial con el de zeros, usando el método `concat()`:
    ```
    return array.concat(zeros);
    ```

#### Prueba
Describimos dos conjuntos de pruebas:
1. Pruebas generales de funcionamiento, donde simplimente nos limitamos a comprobar el comportamiento de la función a diferentes entradas de caso general:
    ```
    describe('Verficación de funcionamiento', () => {
      it('[2, 6, 8](3) => [6, 18, 24]', () => {
        expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24]);
      });
      it('[3, 5, 7, 9](2) => [6, 18, 24]', () => {
        expect(multiplyAll([3, 5, 7, 9])(2)).to.be.eql([6, 10, 14, 18]);
      });
      it('[1, 2, 3, 4](5) => [6, 18, 24]', () => {
        expect(multiplyAll([1, 2, 3, 4])(5)).to.be.eql([5, 10, 15, 20]);
      });
    });
    ```

2. Prueba si no se le pasan parámetros
    ```
    describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
      it(' = undefined', () => {
        expect(multiplyAll([])(3)).to.be.equal(undefined);
      });
    });
    ```

### Ejercicio 7
Se define una función [multiplyAll](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-7.ts) que toma como parámetro un array de números. Esta función devuelve como resultado otra función que toma como argumento un único valor numérico y devuelve un nuevo array. El array devuelto por la segunda función debe ser el resultado de la multiplicación de los números del array por el valor numérico que recibe la segunda función. Además, no se debe modificar el primer array.

#### Detalles de la implementación
Se devuelve otra función al que le pasamos un parametro que corresponde con el número por el que queremos multiplicar cada valor del array. Esta función devuelve una unión de tipos:
```
return function(num: number): number[] | undefined
```

- Si el array esta vacío, entonces devuelve undefined.
- Si no lo está devuelve un nuevo array generado con la función `map()` que tiene multiplicado cada elemento por el número que tiene la segunda función como parámetro:
    ```
    if (array.length === 0) {
      return undefined;
    } else {
      return array.map((element) => element * num);
    }
    ```

#### Pruebas
Describimos dos conjuntos de pruebas:
1. Pruebas generales de funcionamiento, donde simplimente nos limitamos a comprobar el comportamiento de la función a diferentes entradas de caso general:
    ```
    describe('Verficación de funcionamiento', () => {
      it('[2, 6, 8](3) => [6, 18, 24]', () => {
        expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24]);
      });
      it('[3, 5, 7, 9](2) => [6, 18, 24]', () => {
        expect(multiplyAll([3, 5, 7, 9])(2)).to.be.eql([6, 10, 14, 18]);
      });
      it('[1, 2, 3, 4](5) => [6, 18, 24]', () => {
        expect(multiplyAll([1, 2, 3, 4])(5)).to.be.eql([5, 10, 15, 20]);
      });
    });
    ```

2. Prueba si no se le pasan parámetros
    ```
    describe('Si no se le pasa ningun parámetro devuelve undefined', () => {
      it(' = undefined', () => {
        expect(multiplyAll([])(3)).to.be.equal(undefined);
      });
    });
    ```

### Ejercicio 8
Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y). Se definen las [funciones](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-8.ts) necesarias para:
1. Sumar y restar dos puntos coordenada a coordenada.
2. Calcular el producto de un punto por un número.
3. Calcular la distancia euclídea entre dos puntos.

#### Detalles de la implementación
Se define un tipo de datos Point, que corresponde con un array de tamaño 2, donde cada item es un número.
```
export type Point = [number, number];
```

1. Función suma y resta:
    Estas dos funciones reciben dos parámetros de tipo Point y devuelve un array nuevo generado con la función `map()`. Esta función recibe dos parámetros el elemento en sí y su índice. Lo que haremos será sumar o restar el elemento con el correspondiente al elemeneto del otro punto, es decir, el del mismo índice. Para seguir operando con puntos, lo devolvemos como un Point usando **as**.
    ```
    // Suma
    return point1.map((element, index) => element + point2[index]) as Point;
    // Resta
    return point1.map((element, index) => element - point2[index]) as Point;
    ```

2. Función de producto por un escalar:
    Esta función recibe un Punto, y un número y devuelve un nuevo array generado con la función `map()`. Esta función recibe el elemento y lo multiplica por el         número. Para seguir operando con puntos, lo devolvemos como un Point usando **as**.
    ```
    return point.map((element => element * num)) as Point;
    ```

3. Función que calcula la distancia euclídea entre dos puntos:
    Esta función recibe dos parámetros de tipo Point, y calcula la distanica euclídea. En el mundo de las matemáticas, la distancia más corta entre dos puntos en       cualquier dimensión se denomina distancia euclidiana. Es la raíz cuadrada de la suma de cuadrados de la diferencia entre dos puntos.

    <p align="center">
        <img src= "https://user-images.githubusercontent.com/52000890/157913517-12f8da2f-11e1-4df3-b3d7-c3e968d58cb3.jpg">
    </p>

    Para calcularlo, debemos utilizar la librería [Math](https://www.w3schools.com/js/js_math.asp) que permite realizar tareas matemáticas sobre números. Entonces siguiendo la fórmula debemos calcular la raíz cuadradada de la resta de los números al cuadrado.
    1. Para calcular la raíz cuadrada usamos `Math.sqrt()`, al que le pasamos el valor de la resta al cuadrado. 
    2. Para elevar un número al cuadrado usaremos la función Math.pow() usando un 2 parámetros el número y a lo que lo queremos elevar, en este caso 2.
    3. La resta la haremos usando la función `map()`como hemos hecho en la función de resta.
    4. Como la raíz cuadrada solo se puede realizar sobre un número, debemos reducir el array generado con `map()` mediante el método `reduce()`.
        ```
        return Math.sqrt(point1.map((element, index) => Math.pow(element - point2[index], 2)).reduce((total, element) => total + element));
        ```

#### Prueba
Se describen cuatro conjuntos de pruebas:
1. Pruebas de la función que suma dos puntos:
    ```
    describe('Función suma', () => {
      it('[1, 2], [2, 3] => [3, 5]', () => {
        expect(addPoint2D([1, 2], [2, 3])).to.be.eql([3, 5]);
      });
      it('[4, 2], [1, 3] => [5, 5]', () => {
        expect(addPoint2D([4, 2], [1, 3])).to.be.eql([5, 5]);
      });
      it('[0, 5], [2, 3] => [2, 8]', () => {
        expect(addPoint2D([0, 5], [2, 3])).to.be.eql([2, 8]);
      });
    });
    ```

2. Pruebas de la función que resta dos puntos:
    ```
    describe('Función resta', () => {
      it('[1, 2], [2, 3] => [-1, -1]', () => {
        expect(substractPoint2D([1, 2], [2, 3])).to.be.eql([-1, -1]);
      });
      it('[4, 2], [1, 3] => [3, -1]', () => {
        expect(substractPoint2D([4, 2], [1, 3])).to.be.eql([3, -1]);
      });
      it('[0, 5], [2, 3] => [-2, 2]', () => {
        expect(substractPoint2D([0, 5], [2, 3])).to.be.eql([-2, 2]);
      });
    });
    ```

3. Pruebas de la función que calcula el producto por un escalar:
    ```
    describe('Función producto por un escalar', () => {
      it('[1, 2] * 3 => [3, 6]]', () => {
        expect(productPoint2D([1, 2], 3)).to.be.eql([3, 6]);
      });
      it('[4, 2] * 7 => [0, 0]', () => {
        expect(productPoint2D([4, 2], 0)).to.be.eql([0, 0]);
      });
      it('[3, 5] * -1 => [-3, -5]', () => {
        expect(productPoint2D([3, 5], -1)).to.be.eql([-3, -5]);
      });
    });
    ```

4. Pruebas de la función que calcula la distancia euclídea entre dos puntos:
    ```
    describe('Función distancia euclídea', () => {
      it('[1, 2], [2, 3] => ', () => {
        expect(euclideanDistancePoint2D([1, 2], [2, 3])).to.be.eql(1.4142135623730951);
      });
      it('[4, 2], [1, 3] => ', () => {
        expect(euclideanDistancePoint2D([4, 2], [1, 3])).to.be.eql(3.1622776601683795);
      });
      it('[0, 5], [2, 3] => ', () => {
        expect(euclideanDistancePoint2D([0, 5], [2, 3])).to.be.eql(2.8284271247461903);
      });
    });
    ```

### Ejercicio 9
Suponiendo un sistema de N coordenadas, un punto en el espacio se denotaría de la forma Point(N), donde N >= 3. Esto es, un punto debe tener, como mínimo, tres dimensiones y, como máximo, las que el usuario desee. Se definen las [funciones](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/blob/main/src/ejercicio-9.ts) necesarias para:
1. Sumar y restar dos puntos coordenada a coordenada.
2. Calcular el producto de un punto por un número.
3. Calcular la distancia euclídea entre dos puntos.

#### Detalles de la implementación
Se define un tipo de datos Point, que corresponde con un array de tamaño 3, y teniendo un parámetro rest opcional, donde cada item es un número.
```
export type Point = [number, number, number, ...number[]];
```

1. Función suma y resta:
    Estas dos funciones reciben dos parámetros de tipo Point y pueden ocurrir dos cosas:
    1. Los puntos son de la misma dimensión, entonces devuelve un array nuevo generado con la función `map()`. Esta función recibe dos parámetros el elemento en sí y su índice. Lo que haremos será sumar o restar el elemento con el correspondiente al elemeneto del otro punto, es decir, el del mismo índice. Para seguir operando con puntos, lo devolvemos como un Point usando **as**.
        ```
        // Suma
        if (point1.length === point2.length) {
          return point1.map((element, index) => element + point2[index]) as Point;
        }
        // Resta
        if (point1.length === point2.length) {
          return point1.map((element, index) => element - point2[index]) as Point;
        }
        ```

    2. Los puntos son de distinta dimensión, entonces devuelve undefined.

2. Función de producto por un escalar:
    Esta función recibe un Punto, y un número y devuelve un nuevo array generado con la función `map()`. Esta función recibe el elemento y lo multiplica por el número. Para seguir operando con puntos, lo devolvemos como un Point usando **as**.
    ```
    return point.map((element => element * num)) as Point;
    ```

3. Función que calcula la distancia euclídea entre dos puntos:
    Esta función recibe dos parámetros de tipo Point, y calcula la distanica euclídea. En el mundo de las matemáticas, la distancia más corta entre dos puntos en       cualquier dimensión se denomina distancia euclidiana. Es la raíz cuadrada de la suma de cuadrados de la diferencia entre dos puntos.

    <p align="center">
        <img src= "https://user-images.githubusercontent.com/52000890/157913517-12f8da2f-11e1-4df3-b3d7-c3e968d58cb3.jpg">
    </p>

    Pueden pasar dos cosas:
    1. Los dos puntos tienen la misma dimensión, entonces:
        Para calcularlo, debemos utilizar la librería [Math](https://www.w3schools.com/js/js_math.asp) que permite realizar tareas matemáticas sobre números. Entonces siguiendo la fórmula debemos calcular la raíz cuadradada de la resta de los números al cuadrado.
        1. Para calcular la raíz cuadrada usamos `Math.sqrt()`, al que le pasamos el valor de la resta al cuadrado.
        2. Para elevar un número al cuadrado usaremos la función Math.pow() usando un 2 parámetros el número y a lo que lo queremos elevar, en este caso 2.
        3. La resta la haremos usando la función `map()`como hemos hecho en la función de resta.
        4. Como la raíz cuadrada solo se puede realizar sobre un número, debemos reducir el array generado con `map()` mediante el método `reduce()`.
          ```
          return Math.sqrt(point1.map((element, index) => Math.pow(element - point2[index], 2)).reduce((total, element) => total + element));
          ```

    2. Los dos puntos tienen distinta dimensión, entonces devuelve undefined.

#### Prueba
Se describen cuatro conjuntos de pruebas:
1. Pruebas de la función que suma dos puntos de N dimensiones:
    ```
    describe('Función suma', () => {
      it('[1, 2, 4], [2, 3, 5] => [3, 5, 9]', () => {
        expect(addPoint3D([1, 2, 4], [2, 3, 5])).to.be.eql([3, 5, 9]);
      });
      it('[4, 2, 1, 0], [1, 3, 4, 2] => [5, 5, 5, 2]', () => {
        expect(addPoint3D([4, 2, 1, 0], [1, 3, 4, 2])).to.be.eql([5, 5, 5, 2]);
      });
      it('No se pueden sumar puntos de distintas dimensiones', () => {
        expect(addPoint3D([0, 5, 3], [2, 3, 4, 4])).to.be.equal(undefined);
      });
    });
    ```

2. Pruebas de la función que resta dos puntos de N dimensiones:
    ```
    describe('Función resta', () => {
      it('[1, 2, 3], [2, 3, 5] => [-1, -1, -2]', () => {
        expect(substractPoint3D([1, 2, 3], [2, 3, 5])).to.be.eql([-1, -1, -2]);
      });
      it('[4, 2, 5, 8], [1, 3, 8, 9] => [3, -1, -3, -1]', () => {
        expect(substractPoint3D([4, 2, 5, 8], [1, 3, 8, 9])).to.be.eql([3, -1, -3, -1]);
      });
      it('No se pueden restar puntos de distintas dimensiones', () => {
        expect(substractPoint3D([0, 5, 4], [2, 3, 9, 9])).to.be.equal(undefined);
      });
    });
    ```

3. Pruebas de la función que calcula el producto por un escalar:
    ```
    describe('Función producto por un escalar', () => {
      it('[1, 2] * 3 => [3, 6]]', () => {
        expect(productPoint3D([1, 2, 8], 3)).to.be.eql([3, 6, 24]);
      });
      it('[4, 2] * 7 => [0, 0]', () => {
        expect(productPoint3D([4, 2, 1, 0], 0)).to.be.eql([0, 0, 0, 0]);
      });
      it('[3, 5] * -1 => [-3, -5]', () => {
        expect(productPoint3D([3, 5, 1, 3, 8], -1)).to.be.eql([-3, -5, -1, -3, -8]);
      });
    });
    ```

4. Pruebas de la función que calcula la distancia euclídea entre dos puntos de N dimensiones:
    ```
    describe('Función distancia euclídea', () => {
      it('[1, 2], [2, 3] => ', () => {
        expect(euclideanDistancePoint3D([1, 2, 3], [2, 3, 1])).to.be.eql(2.449489742783178);
      });
      it('[4, 2], [1, 3] => ', () => {
        expect(euclideanDistancePoint3D([4, 2, 5, 8], [1, 3, 1, 2])).to.be.eql(7.874007874011811);
      });
      it('[0, 5], [2, 3] => ', () => {
        expect(euclideanDistancePoint3D([0, 5, 1, 3], [2, 3, 3])).to.be.equal(undefined);
      });
    });
    ```

## Documentación
Para generar la documentación utilizaremos la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, ejecutamos `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101327372/blob/master/package.json) la siguiente línea de código:
```
"scripts": {
  "doc": "typedoc"
},
```

Ahora para generar la documentación sólo tenemos que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct04-arrays-tuples-enums-alu0101327372/tree/main/docs).
