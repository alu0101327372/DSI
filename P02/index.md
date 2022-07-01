# Práctica 2 - Instalación y configuración de Visual Studio Code
En esta práctica llevaremos a cabo la instalación y configuración del entorno de desarrollo que utilizaremos durante toda la asignatura, esto es, Visual Studio Code.

## Instalación del VSCode
Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Para instalarlo utilizamos el comando:
```
sudo snap install code
```
El resultado esperado es el siguiente:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155314346-089b114f-a88c-4749-8a57-b7e18307eda9.png">
</p>

## Conexión a una máquina remota
Para conectarnos a una máquina remota utilizando el Visual Studio Code, lo haremos instalando la extensión [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh). Seguidamente, habrá que pulsar `Ctrl + Shift + P` para mostrar la paleta de comandos, teclear `ssh` y pulse sobre `Connect to Host...` e introducir el host al que queremos conectarnos. Si lo hemos hecho todo correctamente se abrirá un nuevo terminal.
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155386917-3cb93015-0d81-43b7-a2ff-bf43298a86e6.png">
</p>

## Visual Studio Live Share
Live Share le permite editar y depurar en colaboración con otros usuarios en tiempo real, con independencia de los lenguajes de programación que use o los tipos de aplicaciones que compile. Para utilizarlo solo debemos ir al apartado de extensiones, buscarla e instarla.

## Comienzos en TypeScript
TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.

Crearemos un pequeño programa Hola Mundo, pero antes debemos instalar el compilador de TypeScript.
```
npm install --global typescript
```
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155314410-ff0f3a15-62be-4af8-9cef-98158b6abee5.png">
</p>

## Hello World
Para crear un proyecto en TypeScript empezaremos por ejecutar `npm init --yes` que permite crear un fichero JSON que establece las dependencias de desarrollo y ejecución del proyecto a modo de paquetes de los que depende el proyecto. A continuación crearemos un nuevo fichero en el directorio hello-world denominado `tsconfig.json`. Y lo modificaremos de la siguiente forma:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155387069-73033ff5-76e7-4975-9d51-4e5cb95c9e23.png">
</p>
Se ha de saber que estas opciones de configuración le indican al compilador de TypeScript que:
1. Queremos generar código compatible con uno de los últimos estándares de JavaScript.
2. El directorio `dist` almacena el código JavaScript producto de la compilación.
3. El directorio `src` alcamcena el código fuente escrito en TypeScript.

Crearemos un fichero `index.ts` que contendra las siguientes líneas de código:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155387483-751ca4bd-e579-440a-9c76-38de0568431c.png">
</p>

## Compilación y ejecución
- Para compilar un programa TypeScript utilizaremos el comando `tsc`.
- Para ejecutar el código JavaScript generado a partir del código TypeScript mediante el siguiente comando `node dist/index.js`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/155387715-8d659976-40df-4985-bc63-30250c4023b4.png">
</p>
