# React Tutorial by Vaibhav Karnwal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React
 
>React is a open source library for building rich User Interfaces. It does not focus on routing and http request but focuses on building User Interface. It is created and maintained by facebook. Angular & vue also work same like react. This is used to build Single Page Application[SAP] means Complete Website in Single Page.
## Why we used React? 
>React is Fast. Why is React Fas because React Use Virtual DOM. Virtual DOM update only required list. Real DOM update Complete List.
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
>This is the folder in which all the dependencies and packages are installed. It is generated when we run create-react-app command or npm install. 
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
>public[it contains html kinds of details. it is not related to react]
    |       |_favicon.ico
    |       |_index.html[index this react find root id which is wirtten in index.js render]
    |       |_logo192.png
    |       |_logo512.png
    |       |_manifest.json[it is a mata file,it conatins icons, display theme. it's used when we create progresive app.]
    |       |_robosts.txt[it is used to protect form google and it's not related to react.]
    |
    |---->src[all work is done here of react]
    |       |_App.css
    |       |_App.js
    |       |_App.test.js[here we write unique test cases]//developer run some test cases through CLI.
    |       |_index.css
    |       |_index.js[this is entry point of react]
    |       |_logo.svg
    |       |_reportWebVitals.js[it give us performance report & inbuild in index.js at bottom]
    |       |_setupTests.js[unique test cases setup start from here]
    |
    |---->gitignore[it is not related to react it used for git, those we don't want to commmit that write here.]
    |
    |---->package-lock.json[it is present in large details]
    |     [it contain details of package.json,and contains history of all package and control them]
    |
    |---->package.json[it is not in details]
         [it contain file name version,all commands and package[it contains details of application]]
## Work flow

>public/index.html---> src/index.js---renders--> src/App.js

## Components

>In react, Components are the building blocks of every react application. Component describes a part of user interface. They are reusable and can be nested inside other components. 
>In React there are two components

* ### Stateless Functional Component

>Stateless Functional Components are literally the javascript Functions which return that html that describes the UI. They can optionaly receive the object of properties which is refers as a props and returns the html that describes the UI.
```jsx harmony
import './App.css';
import Geek from "./Components/Geek"

function App() {
  return (
    <div className="App">
      <Geek/>
    </div>
  );
}

export default App;
```
```jsx harmony
import React from 'react'

function Geek(){
    return <h1>Hello vaibhav</h1>
}

export default Geek;`
```
* ### Stateful Class Component

>Stateful Class Components are the regular Es6 classes that extend the component class from the react library. They can optionaly receive the object of properties which is refers as a props and returns the html that describes the UI. They must contains render method which returns the html.
```jsx harmony
class Fun React.Component{
    render(){
       return <h1>hello,{this.props.name}</h1>
    }
}
```

## JSX

>Javascript XML (JSX) is the javascript extension to the javascript langauge syntax which describes the user interface. We do have to import React library for using Jsx. Jsx translate into React.CreateElement which in turn uses the react library.

```jsx harmony
In JSX

import React from 'react'
const Hello = () => {
    return (
        <div>
            <h1>vaibhav karnwal</h1>
        </div>
    )
}

export default Hello
```


```jsx harmony
Without JSX

import React from 'react'
const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello'}
        React.createElement('h1','vaibhav karnwal')
    )
}

export default Hello
```

## Props

>Props is the shortcut for properties, is the optional input that component can accept. It also allows the component to be dynamic.

```jsx harmony
import React from 'react'
import TextForm from './TextForm';

export default function Navbar(){
    return(
        <>
            <div className='container'>
                <TextForm heading = "Enter text in the textarea"/>
            </div>
        </>
    )
}
```

```jsx harmony
import React from 'react'

export default function TextForm(props) {
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
            </div>
        </>
    )
}

```

```jsx harmony
import React,{Component} from 'react'
import TextForm from './TextForm';

class Navbar extends React.Component{
    render(){
       return(
        <>
            <div className='container'>
                <TextForm heading = "Enter text in the textarea"/>
            </div>
        </>
       )
    }
}
```

```jsx harmony
import React,{Component} from 'react'

class TextForm extends React.Component{
    render(){
       return(
         <> 
            <div className="container">
                <h1>{this.props.heading}</h1>
            </div>
         </>
       )
    }
}

```
## Comparison between Props and State

>Props and State holds information that influences the UI in the browser.

* Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.
* As props are passed from parent to child so props are immutable whereas state are amanaged within the class component so state can be changed.
* In functional Components props are used as {props} whereas in class Component props are used as this.props.
* In functional Components state is managed by useState Hook whereas in class Component state is managed by using this.state.

## State

>
```jsx harmony
import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText]= useState("Enter text here");

    const handleUpClick=()=>{
        let up = text.toUpperCase();
        setText(up);
    }
    const handleLoClick=()=>{
        let up = text.toLowerCase();
        setText(up);
    }

    const changeInText=(event)=>{
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <label for="formGroupExampleInput">{props.heading}</label>
                <input type="text" className="form-control" value ={text} onChange={changeInText} id="formGroupExampleInput"/>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>change to uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>change to lowercase</button>
            <div className='container'>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
```

```jsx harmony
import React,{Component} from 'react'

class TextForm extends React.Component{
    render(){
       return(
         <> 
            <div className="container">
                <h1>{this.props.heading}</h1>
            </div>
         </>
       )
    }
}

```

>
## Learn More

>You can learn more in the [Create React App documentation](https://facebook.github.io/cr eate-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
