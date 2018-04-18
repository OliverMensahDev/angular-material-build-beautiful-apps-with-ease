# Working With Angular Material to Create Beautiful Apps
Angular is an amazing frontend framework with which you can build powerful web applications. 
In this article, we will explore Angular Material and use it to build an entire, fast, realistic app 
which looks absolutely beautiful. 
By then end of the article, you will have a brief refresher on Angular, detailed introduction into Angular Material, 
its docs and its usage as well as building a realistic app that uses many Angular Material components. 
What are you waiting for? let's get started.

## So Exactly is Angular Material?
A is a third party package used in Angular project. 
At its core is an Angular Component Suite which is made pre-built styled angular components.
With angular the entire app is composition of components and instead of building and styling components from group up, 
you can leverage with Angular Material which provide out of the box styled components 
that follow the Material Design Spec. 
This is the Spec used by Google in the android operating system and also very popular on web due to it beautiful UI utilities.

## Get Setup 
Lets start building a prototype app with Angular and Angular Material. We need to make sure we have the following in place

### Setting up our project environment
For that we need `Node.js` and `Angular CLI` installed. `Node.js` will help to provide the packages needed by the `CLI` to work. 
For example the development server package.  
`Angular Command Line Interface (CLI)` is a tool that create  a new angular project for us. We need it because angular project is more than `js html and script` files.
Angular project uses `TypeScript` which needs to be optimized and run on some server, so we need a setup with more complex build workflow 
that uses third party packages for optimisation and build stuff, the `CLI` just give us the workflow out of the box. 

After installing nodejs, you can now install the cli with `npm install -g @angular/cli `.  
Depending on the setup of your commputer, you might need to install as an admin, unix users should start with `sudo`. 

### Create a project.
Once installation is finish, lets create angular project with `ng new  name _of_poject`. Open the project with your favourite IDE or editor.  
The folder structure has a lot of config files and you dont need to touch often. Where we will touch most is the src folder. 

### Install Angular Material and Angular CDK.
Navigate to your root of the project in your terminal or command line and run 
`npm install --save @angular/material @angular/cdk`. 

### Install Animations Module.
Next step is to install the angular animation package which is used by the some Material components to do more advanced transitions. 
**NB** : Before installing this package, check in `package.json` file. Sometimes, install angular material adds this package by default. 
If not then go ahead to install that with ` npm install --save @angular/animations`
In order to use the animation after installing it, we need to explicitly add it to our project. 
In angular we have to explicitly add what you what you want to use so your code can be optimize. Having said that , let’s add 
```js
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' 
```
to our` app.module.ts `file. And we simply need to add the BrowserAnimationsModule to our import array in the same file as 
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
Now, we are good to go to make use of the angular material module we need in our project. I personally like to create a file where I import all the angular material components I will need in my project. So lets do that by creating `src/app/material.module.ts` 
```ts
import {NgModule} from '@angular/core'
@NgModule({
	imports: [],
    exports: []
})
export class MaterialModule {}
```
@NgModule will turn this file into angular module.  We will need to import that from angular core. It has import array to import all the modules needed and also export them with the export array. From here we can outsource these modules by importing the MaterialModule in the root definition file(` app.module.ts `) as
```js 
    import {MaterialModule} from './material.module.ts';
```
This helps to access to all those material components anywhere in our project. 
  
### Angular Material Theme
We have to include a theme. Angular material use a theme which by default is just a color combination of 
* accent - pink
* warn - red
* background - grey
* primary - indigo
Just copy and paste into the style.css file the following contetn
```css
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
### Angular Material Gesture for Some components
Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures.  
So we need to install HammerJS  and load it into our application.  
From the command line/terminal in the root of your project, run `npm install --save hammerjs`. After installing,   
add to the project's entry point (`src/main.ts`) as
```js
    import 'hammerjs'; 
``` 
### Making use of Material Icons
With the angular material, we can also make use of the awesome icons that comes with it. 
To add that to angular project, just include the following in the in the `src/index.html` file. 
 ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
## What App We Will Build With Angular Material
We will be focusing on building a sample application that makes us of the default theme that comes with Angular Material.
We will build an an that serves like a content management system for blog posts. It will not use permanent data storage so will
make use of JavaScript arrays. 
Enough of the talking, let's get started!!!
### Working with Angular Material Components


## Securing App  with Auth0


### Registering the App at Auth0

## Adding Data to App 

### Creating Data Interface

### Working with Services

### Dynamic Data Control with Observables


## Conclusion


### Adding Navigation 
Control the Layout of the application. 
Grid is not part of the Angular Material, we can use Flex Layout package to control that. It uses css flexbox. It positions these html elements nicely by passing the flexbox components as directives. 
Install it with `npm install @angular/flex-layout` and import into `src/app.module.ts` as `import {FlexLayoutModule} from '@angular/flex-layout';`  and as always add the imported module to the imports array in `@NgModule`

### Making App Responsive
Hide menu on small devices and show menu icon on small devices


# Running the project on your local machine
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
## install packages with 
npm i
## Run application
ng serve
