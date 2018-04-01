# Angular Material:  Build Beautiful Apps With Ease
## Sample Project With Angular Material Default Theme

From our previous tutorials, we had awesome time to explore the Angular Material Components. Today, we will be focusing on building a sample application that makes us of the default theme that comes with Angular Material. Enough of the talking, let's get started!!!

Just clear the contents in our `app.component.html` file and add an angular material componet.
```html 
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
```
So we have added a progress bar component. But we cannot see anything in our browser. What is the problem? 
If you could remember from the first article, we created a file that is supposed to hold all of the components from Angular Material that we will be using in our application. So we have to import the progress bar component. The question how do we know the actual of the component to be imported? Well, Angular Material makes it simple by just 

Now, when we check in our browser, we can see the progress bar. 
Awesome, so we now know how to import components and use them in angular material projects. Let's dig deeper. But before we continue make sure you remove this component from our import and also have empty `app.component.html` file

# Running the project on your local machine
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
## install packages with 
npm i
## Run application
ng serve
