# AngularApprentice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## The Task

The task is to create a basic search application with 3 seperate routes.

### The defaullt route

The default route is a search page with an auto complete search bar. when the user performs a search the response should render in a card format with details about the user listed.

The card should render:

Name, Address, Email Address, and have a button for editting a user.

There should be a button for adding a new user.

### The add user route

The add user route should be a form for creating new users.

It should validate Email address and prevent duplicate users based on email address.

### The edit user route

The edit user route should work similar to the add route, but should only update existing users.

Email should be readonly, but everything else should be modifiable.

There should be a button to delete the user

### Extras

Try to use the angular cli as much as possible to create boiler plate files
Feel free to use component libraries like angular material, bootstrap, primeng etc.

can you use any ng add schematics when importing the libraries?

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
