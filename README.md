# Problemas con ng2-charts
El modulo utiliza la libreria anterior para realizar los ejemplos. Por razons relacionadas a versiones de Angular nuevas no compatibles con la libreria, se siguieron los siguientes métodos para poder instalarla y hacer los ejemplos.
1. Primero utilizamos las versiones indicadas en la ayuda de Udemy aportada por un usuario/alumno del curso.
```
Miguel Sánchez
44 votos
hace 7 meses
@Pablo Yo lo he solucionado haciendo lo siguiente:

1- Primero desinstala las versiones que ya has instalado con:

npm uninstall --save chart.js

npm uninstall --save ng2-charts

2- Instala las siguientes versiones:

npm install chart.js@2.9.3 --save

npm install ng2-charts@2.3.0 --save
```
2. Como complemento utilizamos recomendaciones descriptas en el siguiente https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

# GraficasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
