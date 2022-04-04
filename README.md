Steps to run in local
1. Clone the repo
2. Inside repo, run npm install
3. Run ng serve
4. In browser, access via http://localhost:4200/
5. Change language via select dropdown.

# Frontend Take Home Challenge

Please create an new angular application, and add:
- this translation library: https://github.com/ngx-translate/core
- a UI framework of your choice
- a README containing instructions how we can run your application locally, or deploy it to a service of your choice


# Basic Requirements
Let the app contain a single route and a single page with some minimal styling. On it, we work with the following data:

```
user = {
    name: 'Berry’
    language: 'en'
    cart: ['flower’, 'bottle’, 'towel']
}
```


The following 2 files are also provided to you.

en.json
```
{ 
   "WELCOME": "Hello {{ name }}, welcome back!",
   "CART_CONTENT": "You have {{ cartItemCount }} in your cart.",
}
```

de.json
```
{
   "WELCOME": "Guten Tag {{ name }}, wilkommen!",
   "CART_CONTENT": "Du hast {{ cartItemCount }} Dinge in deinem Wagen.",
}
```


On the page, it should read.

```
Hello Berry, welcome back!

You have 3 items in your cart.
```

# The feature (localization)

On the same page, please add a way for the user to switch languages. The only 2 available languages are english and german.

When the user switches to german, the content on the page should now read:

```
Guten Tag Berry, wilkommen!

Du hast 3 Dinge in deinem Wagen.
```


## Bonus 1:

Persist Preference: When the user switches to german and then reloads the app, the app should still be in german.

## Bonus 2:

Make this translation feature testable.

P.S.: Please make sure to create a separate branch and raise a PR against the main/master branch

# FrontendVinay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

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
