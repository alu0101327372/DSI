# Informe - Práctica 9: Aplicación de procesamiento de notas de texto

En esta práctica, se ha implementado una aplicación de procesamiento de notas de texto.

## Estructura del proyecto

```bash
.
├── README.md
├── _config.yml
├── coverage
├── data
├── dist
├── doc
├── index.md
├── node_modules
├── package-lock.json
├── package.json
├── sonar-project.properties
├── src
├── tests
├── tsconfig.json
└── typedoc.json
```

## La clase Nota

Esta clase es la encargada de representar una nota de la aplicación de procesamiento y estará formada, como mínimo, por un título, un cuerpo y un color.

El título es una especie de nombre que serviría para identificar y diferenciar una nota del resto, por ello se representa como un atributo privado string. El cuerpo de la nota desarrolla, a partir de lo anticipado en el título, el resto de datos informativos y, al igual que el título, es un atributo privado string. El color es la impresión producida por un tono de luz en los órganos visuales, en este caso, se ha optado por definir un tipo de dato Color, que contiene las cadenas (strings) con los colores permitidos:

```typescript
export type Color = 'rojo' | 'verde' | 'azul' | 'amarillo';
```

El constructor de la clase recibe los atributos de la clase se han declarado como readonly, es decir, su valor es solo de lectura, pues no cambiarán nunca durante la ejecución. A raíz de esto, solo se necesitan métodos getter en la clase nota para cada uno de los atributos:

```typescript
public getTitulo(): string {
  return this.titulo;
}

public getColor(): Color {
  return this.color;
}

public getCuerpo(): string {
  return this.cuerpo;
}
```

Además, se ha definido un método `write()` que convierte un objeto de la clase en formato JSON, ya que es un requisito guardar las notas en este formato. Este método invoca a la función `stringify()` que convierte un objeto en una cadena de texto JSON.

```typescript
public write(): string {
  return JSON.stringify(this, null, 2);
}
```

## La clase AppNotas

Esta clase se encarga de definir el comportamiento de la aplicación de las notas de texto. Para ello, define los métodos requeridos utilizando el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros.

### Añadir una nota al sistema

Para añadir una nota, se debe comprobar si ya existe el directorio donde se guardan las notas de cada usuario. Para ello, se utiliza la función `existsSync()` que se encarga de comprobar de forma síncrona si un archivo ya existe en la ruta dada o no.

- En caso de que no exista se crea la ruta. En esta práctica se ha definido una ruta que inicia en el directorio /data.
- En otro caso, se crea un objeto Nota con los parámetros recibidos. Luego, se debe comprobar si ya existe una nota con el mismo título.
  - En caso de que así fuera, deberá mostrarse un mensaje de error por la consola.
  - En caso contrario, se añadirá la nueva nota a la lista, utilizando la función `writeFileSync()` y se muestra un mensaje informativo por la consola.

```typescript
public addNota(usuario: string, titulo: string, cuerpo: string, color: Color): string {
  if (!fs.existsSync(`data/${usuario}`)) {
    fs.mkdirSync(`data/${usuario}`, { recursive: true});
  }
  const nota = new Nota(titulo, cuerpo, color);
  if (!fs.existsSync(`data/${usuario}/${titulo}.json`)) {
    fs.writeFileSync(`data/${usuario}/${titulo}.json`, nota.write());
    console.log(chalk.green('Nueva nota añadida'));
    return chalk.green('Nueva nota añadida');
  } else {
    console.log(chalk.red('Ya existe una nota con ese título'));
    return chalk.red('Ya existe una nota con ese título');
  }
}
```

### Modificar una nota del sistema

Para modificar una nota se debe comprobar que exista una nota con el título de la nota a modificar en la lista. Para ello, al igual que en la función `addNota()` se utiliza la función `existsSync()` con la ruta de la nota a buscar.

- Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. Para lograr esto, se debe crear un objeto nota, y escribirla en el fichero con la función `writeFileSync()`.
- En caso contrario, debe mostrarse un mensaje de error por la consola.

```typescript
public removeNota(usuario: string, titulo: string): string {
  if (fs.existsSync(`data/${usuario}/${titulo}.json`)) {
    fs.rmSync(`data/${usuario}/${titulo}.json`);
    console.log(chalk.green('Nota eliminada correctamente'));
    return chalk.green('Nota eliminada correctamente');
  } else {
    console.log(NOEXISTNOTA);
    return NOEXISTNOTA;
  }
}
```

### Borrar una nota del sistema

Para borrar una nota del sistema se debe comprobar que exista una nota con el título de la nota a eliminar en la lista. Esto se hace de la misma manera que en los apartados anteriores, es decir, se comprueba con la función `existsSync()` la ruta.

- Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. Para ello, se llama a la función `rmSync()` que se utiliza para eliminar de forma síncrona un archivo en la ruta dada.
- En caso contrario, debe mostrarse un mensaje de error por la consola.

```typescript
public removeNota(usuario: string, titulo: string): string {
  if (fs.existsSync(`data/${usuario}/${titulo}.json`)) {
    fs.rmSync(`data/${usuario}/${titulo}.json`);
    console.log(chalk.green('Nota eliminada correctamente'));
    return chalk.green('Nota eliminada correctamente');
  } else {
    console.log(NOEXISTNOTA);
    return NOEXISTNOTA;
  }
}
```

### Listar los títulos de las notas del sistema

Para listar se debe comprobar que exista el usuario. Para ello, se utiliza la función `existsSync()` donde se comprueba que exista el directorio donde se guardan las notas de ese usuario, que por requisito, viene definido por su nombre.

A continuación, se debe leer el contenido del directorio, pero primero se comprueba que no este vacío, lo que indicaría que el usuario no ha añadido ninguna nota. Para hacerlo, se utiliza la función `readdirSync()` que le el contenido del directorio pasado por parámetro.

Una vez hecho esto, se guarda en el array de string **allTitulo** todos los nombres de los fichero del directorio, es decir, de todos los títulos. Esta variable, se recorre cada uno de los elementos. La constante **data** guarda el contenido de ese fichero, utiliza la función `readFileSync()` que le el contenido del fichero y convierte el contenido a un objeto y se guarda en la variable **notaObject**, con la función parse() y crea una nueva a partir de este objeto.

Ahora que ya se tiene un objeto Nota se puede acceder a los métodos getters para mostrar el color y el titulo por pantalla.

```typescript
public listNotas(usuario: string): string {
  if (!fs.existsSync(`data/${usuario}`)) {
    console.log(chalk.red('No existe ese usuario'));
    return chalk.red('No existe ese usuario');
  } else if (fs.readdirSync(`data/${usuario}`).length === 0) {
    console.log(chalk.red('No tienes ninguna nota en tu lista'));
    return chalk.red('No tienes ninguna nota en tu lista');
  } else {
    const allTitulo: string[] = fs.readdirSync(`data/${usuario}`);
    const result: string[] = [];
    allTitulo.forEach((titulo) => {
      const data = fs.readFileSync(`data/${usuario}/${titulo}`);
      const notaObject = JSON.parse(data.toString());
      const nota: Nota = new Nota(notaObject.titulo, notaObject.cuerpo, notaObject.color);
      switch (nota.getColor()) {
        case 'azul':
          result.push(chalk.blue(nota.getTitulo()));
          break;
        case 'rojo':
          result.push(chalk.red(nota.getTitulo()));
          break;
        case 'verde':
          result.push(chalk.green(nota.getTitulo()));
          break;
        case 'amarillo':
          result.push(chalk.yellow(nota.getTitulo()));
          break;
      }
    });
    console.log(result.join('\n'));
    return result.join('\n');
  }
}
```

### Leer una nota concreta del sistema

Para leer una nota se debe comprobar que en la lista existe una nota cuyo título sea el de la nota a leer. Como se ha ido haciendo esto con la función `existsSync()`y al igual que en el apartado anterior se crea:

- Una variable **data** que contiene el contenido del fichero.
- Una variable **notaObject** que contiene el objeto con los datos del fichero JSON.
- Una variable **nota** que inicializa un objeto Nota a partir del objeto con los datos del fichero JSON.

Ahora solo se debe sacar por pantalla el título y el cuerpo de la nota según el color de esta o un mensaje de error si no existe la nota.

```typescript
public readNota(usuario: string, titulo: string): string {
  if (fs.existsSync(`data/${usuario}/${titulo}.json`)) {
    const data = fs.readFileSync(`data/${usuario}/${titulo}.json`);
    const notaObject = JSON.parse(data.toString());
    const nota: Nota = new Nota(notaObject.titulo, notaObject.cuerpo, notaObject.color);
    switch (nota.getColor()) {
      case 'azul':
        console.log(chalk.blue(nota.getTitulo(), '\n', nota.getCuerpo()));
        return chalk.blue(nota.getTitulo(), '\n', nota.getCuerpo());
      case 'rojo':
        console.log(chalk.red(nota.getTitulo(), '\n', nota.getCuerpo()));
        return chalk.red(nota.getTitulo(), '\n', nota.getCuerpo());
      case 'verde':
        console.log(chalk.green(nota.getTitulo(), '\n', nota.getCuerpo()));
        return chalk.green(nota.getTitulo(), '\n', nota.getCuerpo());
      case 'amarillo':
        console.log(chalk.yellow(nota.getTitulo(), '\n', nota.getCuerpo()));
        return chalk.yellow(nota.getTitulo(), '\n', nota.getCuerpo());
    }
  } else {
    console.log(NOEXISTNOTA);
    return NOEXISTNOTA;
  }
}
```

## Menú de linea de comandos

Se utilizará el paquete Yargs que permite parsear diferentes argumentos pasados a un programa desde la línea de comandos.

En el fichero [index.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101327372/blob/main/src/index.ts) se definen los comandos de tal forma que se pueda invocar a la aplicación con los argumentos. La estructura del paquete yargs para cada comando es muy parecida, solo cambia el método invocado y los argumentos que recibe cada comando.

En general, con **command** se da un nombre al comando, con **describe** se da una breve descripción del comando y con **builder** se definen los argumentos del comando en este caso seran: _usuario, titulo, cuerpo y color_. Cada argumento tendrá una breve descripción, el tipo del argumento y el **demandOption** se usa para especificar que el argumento es obligatorio.

Por último, para poder procesar los argumentos pasados desde línea de comandos a la aplicación es importante que el punto de entrada o programa principal incluya la siguiente sentencia:

```typescript
yargs.parse()
```

## El paquete Chalk

El módulo Chalk en Node.js es el módulo de terceros que se utiliza para diseñar el formato de texto y  permite crear nuestros propios temas en el proyecto Node.js. En esta práctica, se ha implementado en cada una de los mensajes de informativo. El código de colores es el siguiente:

- Verde: mensajes informativos / color de la nota.
- Rojo: mensajes de error / color de la nota:
- Amarillo: color de la nota.
- Azul: color de la nota.

## Documentación

Para generar la documentación se utilizará la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, se ejecuta `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101327372/blob/main/package.json) la siguiente línea de código:

```json
"scripts": {
  "doc": "typedoc"
}
```

Ahora para generar la documentación sólo se tiene que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/tree/master/docs).

## GitHub Actions

GitHub Actions es una plataforma de integración y despliegue continuos (IC/DC) que te permite automatizar tu mapa de compilación, pruebas y despliegue. En esta práctica se han definido 3 acciones, alojadas en el directorio [.github/workflows](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101327372/tree/main/.github/workflows):

- Actions de Coveralls, que es un servicio web que permite a los usuarios realizar un seguimiento de la cobertura de código de su aplicación a lo largo del tiempo para optimizar la eficacia de sus pruebas unitarias.
- Actions de Test: GitHub ejecuta las pruebas y proporciona los resultados de cada prueba en la solicitud de extracción, para que pueda ver si el cambio en su rama introduce un error.
- Actions de SonarCloud: que ayuda a evaluar el estado del código y crear aplicaciones con un código limpio y seguro. Además detecta errores y vulnerabilidades y obtiene comentarios instantáneos. Se integra con su plataforma DevOps.
