# Angular Material:  Build Beautiful Apps With Ease

Angular is an amazing frontend framework with which you can build powerful web applications. In this article, we will explore Angular Material and use it to build an entire, fast, realistic app which looks absolutely beautiful. By then end of the article, you will have a brief refresher on Angular,  detailed introduction into Angular Material, its docs and its usage as well as  building a realistic app that uses many Angular Material components. What are you waiting for,  let get started. 
## So what is angular material?
A is a third party  package used in Angular project. At its core is an Angular Component Suite which is made  pre-built styled  angular components. With angular the entire app is composition of components and instead of building and styling components from group up, you can leverage with Angular Material  which provide out of the box styled components that follow the Material Design Spec. This is the Spec used by Google in the android operating system and also very popular on web due to it beautiful UI utilities. 

## Setting up our project environment
Lets start building a demo app with Angular and Angular Material. For that we need `Angular CLI`,, the Command Line Interface, a tool that create  a new angular project for us. We need it because angular project is more than js html and script file. As far us we will need to create the project, the project uses typescript which needs to be optimized, needs development server to test it, we need a more complex setup with more complex build workflow that uses third party packages for optimisation and build stuff, the CLI just give us the workflow out of the box. Go  to install it which is installed via npm so we need nodejs too. Nodejs does not just help us to install with NPm but helps to provide the packages needed by the CLI to work like for the development server.  Check oout angular cli to learn more about it . 

After install nodejs, you can now instal the cli with `npm install -g @angular/cli `.  Depending on the setup of your commputer, you might need to install as an admin, unix users should start with `sudo`. 
Once installation is finish, lets create angular project with `ng new  name _of_poject`. Open the project with your favourite IDE or editor.  The folder structure has a lot of config files and you dont need to touch often. Where we will touch most is the src folder. 
 
Navigate to you project folder and  run the project with `ng serve`. This will spin up that development server which allows us to see  our application and test it by opening `http://localhost:4200 ` in the browser. 
How exactly is the flow of loading the angular app.  The `index.html` gets loaded first. The file has  an element which is not an html element but the element where angular app will be rendered and angular gets to know about this using the `main.ts ` bootstrap the `AppModule`. This `AppModule` which is like a root definition file that defines all the pieces our angular app is made up off. You can explore more about project structure.
 
When you visit the website of [angular material](https://material.angular.io), there are two important sections we have to explore. The first section is the package called `Component building Utitities` and the second pacakage that has a Concrete implementation of the Material Design Specs called `Concrete Component Implementation`.  The first package is bundled under `@angular/cd`k where cdk stands for Component Development Kit. This does not include Angular Material Styling or the Concrete @angular material,which is the one we usually import into angular project which gives you access to all Angular Material Component which are pr-styled and behind the scene are built with the cdk. 

Now lets us explore what the Angular Material comprises by visiting the website of the angular material project. (https://material.angular.io).  You can see both the CDK and the Components tab but we are focusing on the components not the raw cdk.  Under the components, we have a lot them, we won’t explore everything, we will build the foundation on how you learn how to it, use them in sample projects to see the bigger picture so you can also dive in the documentation to add components anything you need them. 

When you click on a component say Slider, we have an` OVERVIEW, API and EXAMPLES tabs`.  
* Overview documents more about the component, how to use it in different configurations. 
* API tabs provide a nicer format of the source of the component and provides how a component can be imported into your project as well which properties are bindable to the component.  
* EXAMPLE tab provides you with a sample project but to see only that component usage, under OVERVIEW tab, click on the source to see how it is used in html, typescript an stylesheet.
 
For now, we have dealt with the angular package,  we need to get started with to build a project with angular material. We can find the steps to execute on the the website. Lets add to the angular project with started earlier.  
Navigate to your root of the project in your terminal or command line and run 
`npm install --save @angular/material @angular/cdk`. 
Next step is to install the angular animation package which is used by the some Material components to do more advanced transitions. 
`**NB**`: Before installing this package, check in `package.json` file. Sometimes, install angular material adds this package by default. If not then go ahead to install that with ` npm install --save @angular/animations`
After installation, in order to use the animation,, we need to explicitly it to our project. In angular we have to explicitly add what you what you want to use so your code can be optimize. Having said that , let’s add 
```js
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' 
```
to our` app.module.ts `file. And we simply need to add the 
BrowserAnimationsModule to our import array in the same file as 
```ts
imports: [
   ...,
    BrowserAnimationsModule,
  ],
```
This is what your appModule needs to look like at the end. 
```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

    import { AppComponent } from './app.component';


    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }  
```
Now, we are good to go to make use of the angular material module we need in our project. I personally like to create a file where I import all the angular material components I will need in my project. So lets do that by creating `src/material.module.ts` 
```js
import {NgModule} from ‘@angular/core’
@NgModule({
	imports: [],
    exports: []
})
export class MaterialModule {}
```
@NgModule will turn this file into angular module.  We will need to import that from angular core. It has import array to import all the modules needed and also export them with the export array. From here we can outsource these modules by importing the MaterialModule in the root definition file. This helps to access to all those material components needed in our project. 
App.module  
Import {MaterialModule} from MaterialModule file(./material.module)
 
Now to the step 4: We have to include a theme. Angular material use a theme which by default is just a color combination of 
* accent - pink
* warn - red
* background - grey
* primary - indigo
Just copy and paste @import "~@angular/material/prebuilt-themes/indigo-pink.css"; into the style.css file. 
 Step 5: 
Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures.  So we need to install HammerJS  and load it into our application.  From the command line/terminal in the root of your project, run `npm install --save hammerjs`. After installing,   add 
```js
    import 'hammerjs'; 
```
to your  app's entry point (src/main.ts). 

Step 6:  With the angular material, we can also make use of the awesome icons that comes with it. To add that to angular project, just include 
 ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 ```
 in the `index.html` file. 

Now we have a nice setup and we are good to go to start working on our app.
 
 
 
# Running the project on your local machine
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
