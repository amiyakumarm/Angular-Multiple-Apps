# MultipleApps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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



## https://angular.io/guide/file-structure
## https://www.tektutorialshub.com/angular/how-to-check-angular-cli-version/

## https://dev.to/pkdev/create-angular-apps-with-shared-library-2dl6
## https://www.tektutorialshub.com/angular/angular-multiple-apps-in-one-project/

ng new MultipleApps --createApplication="false"
cd MultipleApps  
ng generate application gettingStarted 
ng generate application exampleApp

Add Another Project to the workspace
To create another app, run the ng generate application again.

ng generate application exampleApp
 
Run the App
And use the ng serve to run it
 
ng serve exampleApp
OR
ng serve --project="exampleApp"
 
Run the App
There are three ways in which you can run the app.

Use the ng serve gettingStarted
Use the --project flag ng serve --project="gettingStarted"
Open the angular.json and locate the defaultProject and change the name of the project to gettingStarted and run ng serve


Building the App for Production
Use ng build to build the app with --project option.
ng build --prod --project="gettingStarted"
ng build --prod --project="exampleApp"



Generate angular library
ng generate library my-library
Remember to run upcoming commands from your workspace folder.

This command creates an angular library and makes an entry in angular.json which is generated previously.

All the applications and library created will be placed under the projects folder in the workspace.


It creates entry for library under projects key. Important keys are

"projectType" is library
"root" is path to library folder
"sourceRoot" is src folder path in your library
"architect" property holds an configuration object for build, test and lint.

All this is for the library in the project.
Other important commands
ng build my-library --prod // build production version of the library 
ng build my-library --watch // watch for any changes in library and build after changes are saved 
