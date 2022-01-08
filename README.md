# React Tutorial by Vaibhav Karnwal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React
 
>React is a open source library for building rich User Interfaces. It does not focus on routing and http request but only focuses on building User Interface. It is created and maintained by facebook.
>
>* React has a component based architechture which lets breakdown application into small encapsulated part which then be composed to make complex user interfaces like a website can be breakdown into
`header`
`sidebar`
`main content`
`footer`
>* Each section represent a component which then composed in the right way can makeup a website.
>* Components also it possible to write reusable code.
>* React is declarative means we just have to tell react what we want and react with its react dom libarary will build the actual UI.
>* React handles efficiently updating and rendering the right component in the application whenever the data changes.
>* DOM updates are handles gracefully in react.

## Create-react-app

>* `npx create-react-app app-name`(npx is a npm package runner which is installed with the node.js which helps in creating app withput installing the package globally)
> or
>* `npm install create-react-app -g`(firstly we have to install the react-app package globally)
>* `create-react-app app-name`(then we are able to make the app)

## Folder Structure

>* ### Package.json
>
>This file contains the dependencies and scripts that are required for the project.
>
>* ### Node modules
>This is the folder in which all the dependencies are installed. It is generated when we run create-react-app command or npm install. 
>
>* ### src/index.js
>
>In index.js file we specify the root component which is App component and the DOM element. DOM element is the element with the id of root which is the id name given in the index.html file.
>
>* ### src/App.js
>
>This file is responsible for the html displayed in the browser.
>
>* ### src/App.test.js
>
>This file contains unit tests.

## Work flow

>public/index.html---> src/index.js---renders--> src/App.js

## Components

>In react, Components are the building blocks of every react application. Component describes a part of user interface. They are reusable and can be nested inside other components. 
>In React there are two components

* ### Stateless Functional Component

>Stateless Functional Components are literally the javascript Functions which return that html that describes the UI. They can optionaly receive the object of properties which is refers as a props and returns the html that describes the UI.

>import './App.css';
>import Geek from "./Components/Geek"
>function App() {
>  return (
>    <div className="App">
>      <Geek/>
>    </div>
>  );
>}
>export default App;

>import React from 'react'
>function Geek(){
>    return <h1>Hello vaibhav</h1>
>}
>export default Geek;`

* ### Stateful Class Component

>Stateful Class Components are the regular Es6 classes that extend the component class from the react library. They must contains render method which returns the html.
>
> class Fun React.Component{
>    render(){
>       return <h1>hello,{this.props.name}</h1>
>}
>}

## Learn More

>You can learn more in the [Create React App documentation](https://facebook.github.io/cr eate-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
