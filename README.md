# Online Shop Angular
<img width="1679" alt="Снимок экрана 2023-01-30 в 09 55 59" src="https://user-images.githubusercontent.com/91071613/215432060-b79493b9-fd0a-46ef-b4a5-84b87960adba.png">


 - Goal of the project is to create a list of products using the storage of data with RxJS. 
 - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.
 - Before starting of development server on your local machine - Run `npm run json` for a server with database of application
 
## Functionality
 - List of product's cards which contains info about product (name, price, etc) and panel of buttons
 - Evere card has buttons:
   - Information about product;
   - Edit Product;
   - Add product to basket;
   - Delete Product;
 - Quantity can be changed by clicking on the +/- buttons in Basket component, if it 0 - product removes from basket
 - Each product can be deleted by clicking on the delete icon button in list page and also in Information page
 - By click on '+' button in header displays a form that you need to fill with data to create new product
 - In case all the products are deleted, appears a 'No Products' template
 - Search and filter functionality not available now, in development  progress

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
