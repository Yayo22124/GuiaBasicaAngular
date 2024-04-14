# Guía Básica Angular v17 y HighCharts

<div align="center">

  <img src="src/assets/shot.webp" style="width: 50%; border-radius: 12px;" />

</div>

## Contenido

- [Requisitos](#requisitos-previos)
- [Introducción a Angular](#introducción-a-angular)
- [Crear un Nuevo Proyecto](#crear-un-nuevo-proyecto)
- [Ejecutar Proyecto](#ejecutar-proyecto-de-angular)
- [Glosario](#glosario)

## Requisitos Previos

- [NodeJS (^v18, recomendado: v20 LTS)](https://nodejs.org/en/download/current).
- [Angular (v17)](./docs/InstalarAngular.md).
- [Proyecto iHome API](https://github.com/Yayo22124/api-utxj-home/tree/main).
- [Visual Studio Code](https://code.visualstudio.com/download).
  - Extensiones (Recomendado crear un perfil de vscode especial para Angular):
    - [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template).
    - [Angular 17 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode).
    - [Angular Material 2, Flex layout 1, Covalent 1 & Material icon snippets](https://marketplace.visualstudio.com/items?itemName=1tontech.angular-material).
    - [Angular Snippets (Version 16)](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2).
    - [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype).
    - [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials).
    - [angular2-inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline).
    - [vscode-angular-html](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html).
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
    - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

## Introducción a Angular

Angular es **full-framework** desarrollado y mantenido por **Google**, con el podemos crear aplicaciones web e interfaces web robustas de una forma más sencilla, ya que viene por defecto configurado y con varias librerías para todo tipo de fines y usos.

Sí lo comparamos con el famoso React, sabremos que Angular es un framework porque React viene mucho más limitado, siendo su objetivo ser flexible y poder ser usado con cuantas librerías externas necesites, en cambio, Angular ya trae muchas librerías propias y externas incluídas para que puedas desarrollar sin problemas.

`"La diferencia entre Framework y Libreria, es que un Framework es un conjunto de librerías."`

Angular cuenta con la gran ventaja/característica y muy valorada por las empresas, la cual es que 'obliga' a los desarrolladores a seguir una estructura escalable, robusta y una forma más estandarizada de programar, evitando problemas entre desarrolladores y código de Angular, lo que facilita entender otras aplicaciones y proyectos del mismo.

Una gran característica de Angular es que viene por defecto configurado con **TypeScript**[1] y haciendo mucho uso de conceptos de **POO** (Programación Orientada a Objetos), así como de patrones de diseño como el **Decorador**[2] o el **Singletone**[3], sobre todo los Decoradores sona algo muy común, con los que se les añade funcionalidad a Clases, Objetos, Propiedades y Métodos de nuestro código.

Aprender Angular puede parecer muy díficil de aprender, sobre todo porque su curva de aprendizaje es diferente a la de React, Vue o Svelte, las cuales suelen ser mucho más fáciles al inicio, pero incrementa con el tiempo, en cambio Angular, empieza muy extensa, pero rápidamente cae. Por lo que te recomiendo que no te abrumes con el framework y verás que al final sea React, Svelte, Qwik, Astro, Solid, Vue, todos comparten la lógica y sobre todo **JavaScript**.

#### Puntos a Considerar de Angular

Angular antes de la versión 17, venía configurado para ser usado con **módulos**, una forma muy estructurada de crear aplicaciones y de separar nuestros casos de uso, pero desde su versión 15, se implementó el concepto de **Componentes Standalone**[4], separándose de los módulos, y desde la versión 16, se añadió la opción de crear aplicaciones enteras en Standalone, es decir, sin módulos, en esta versión actual (17), es la forma por defecto en la que se crean los proyectos, pero aún se mantiene la compatibilidad con los módulos.

## Crear un Nuevo Proyecto

Los proyectos de Angular son creados por medio de su herramienta de **Angular CLI**[5], con esta se nos facilita todo el proceso de creación y configuración inicial de Angular, TypeScript y el editor de código.

Angular CLI cuenta con su comando el cual es `ng`, de esta forma accedemos a la funcionalidad y comandos del CLI.

Para crear un proyecto se usa el comando `ng new MiProyecto`, donde "MiProyecto" es el nombre del proyecto, sin embargo esta forma es muy básica y es probable que el CLI pregunte algunas cosas extra como:

> [!NOTE]  
> La primera vez que usamos **ng** (Angular CLI), se nos preguntará sí queremos enviar datos de forma anónima a Google para mejorar Angular, por defecto viene marcado que no y solo es pulsar **enter**.

- Elegir un Gestor de Estilos: SASS, SCSS, CSS o LESS (Usaremos **SCSS**[6]).
- Activar o no SSR (**Server Side Rendering**[7]).

Mi recomendación es usar el siguiente comando que ya configura los pasos anteriores y lo deja como será usado durante las clases:

```bash
ng n -S --style scss --no-ssr NombreProyecto
```

Sustituyendo "NombreProyecto" por el nombre que se asocie a sus necesidades.

## Ejecutar Proyecto de Angular

Una vez creado su proyecto, por defecto se instalan dependencias y se generan los archivos en un nuevo directorio/carpeta llamado igual que el nombre que se le indicó al CLI durante su ejecución.

Para ejecutar el proyecto solo hay que moverse a la carpeta generada:

```bash
cd NombreProyecto
```

Una vez dentro podemos ejecutar VScode en esa ruta o ejecutar directamente el proyecto usando el comando del CLI:

```bash
ng serve -o
```

El parámetro "-o" indica que se abrirá automáticamente en el navegador por defecto del sistema operativo.




## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Glosario

| Término                    | Definición                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.- TypeScript             | Es un **superconjunto** de JavaScript con el que se le añaden característica más estrictas como el **tipado** de datos y de **POO**, con lo que permite desarrollar código más seguro de JavaScript, mostrando errores en tiempo de ejecución.                                                                                                                                                                                             |
| 2.- Decorador              | Es un patrón de diseño el cual permite dar funcionalidad y cambiar las propiedades de nuestro código de una forma más sencilla y reutilizable, esto suele aplicarse con los "**@**", también llamadas **Anotaciones**.                                                                                                                                                                                                                     |
| 3.- Singletone             | Otro patrón de diseño enfocado en seguridad y control de la información de una aplicación, en Angular se usa en sus **Servicios**, con los que podemos compartir y mantener la misma información en toda nuestra aplicación porque consiste en crear una **única instancia** de nuestra clase a nivel global.                                                                                                                              |
| 3.- Componentes Standalone | Los componentes en general, son partes de nuestra aplicación que se suelen repetir en varias partes o sitios, por lo que es bueno generalizarlos en componentes, volviendo reutilizable su código cómo un Navbar, una Card, un Button, etc... En Angular con módulos, estos están ligados a su propio módulo, pero los Standalone, son componentes que son su propio módulo por debajo y por ello pueden ser globales e independientes. |
| 5.- Angular CLI            | Interfaz de línea de comandos de Angular para administrar, gestionar y manejar nuestros proyectos de Angular, con esta podemos crear proyectos nuevos, crear componentes, directivas, pipes y todo tipo de partes de Angular, así como levantar nuestros proyectos en local.                                                                             
| 6.- SCCS            | Pre-Procesador de estilos de CSS y una extensión del mismo con el que podemos realizar algunas operaciones más avanzadas como el **cálculo** de medidas, por ejemplo calc(100px - 150px).                                                              
| 6.- SSR            | Técnica moderna de crear aplicaciones de interfaz web, con las que podemos configurar un servidor el cual proporcione ciertos componentes o partes de nuestra aplicación ya renderizados o taspilados, quitando carga al cliente, mejorando la performance y la experiencia del usuario.                                              
