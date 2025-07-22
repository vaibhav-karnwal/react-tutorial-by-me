# React Tutorial by Vaibhav Karnwal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React
 
>React is a open source library for building rich User Interfaces. It does not focus on routing and http request but focuses on building User Interface. It is created and maintained by facebook. Angular & vue also work same like react. This is used to build Single Page Application[SAP] means Complete Website in Single Page.
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
>
## Why we used React? 
>React is Fast. Why is React Fas because React Use Virtual DOM. Virtual DOM update only required list. Real DOM update Complete List.

## Create-react-app

>* `npx create-react-app app-name`(npx is a npm package runner which is installed with the node.js which helps in creating app withput installing the package globally)
> or
>* `npm install create-react-app -g`(firstly we have to install the react-app package globally)
>* `create-react-app app-name`(then we are able to make the app)
## Folder Structure

>* ### Package.json
>
>package.json is used to store the metadata associated with the project as well as to store the list of dependency packages. In order to add dependency packages to your projects, this file makes it easy for others to manage and install the packages associated with the project. It contians all details about project like project name, react-version, which commands, library, dependency.
>
>* ### Node modules
>
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
>This file contains unique tests.
>
>* ### manifest.json
>
>It is a mata file, that conatins icons, display theme. It is used when we create progresive app.
    
>* ### gitignore
>It is not related to react, it used for git, those we don't want to commmit that write here.
>
>* ### package-lock.json
>
>It is present in large details.It contain details of package.json,and contains history of all package and control them.
### What is dependency?.

>A dependency is some third-party code that your application depends on. Just like a child depends on its parent, your application depends on other people's code. A piece of code becomes a true dependency when your own application cannot function without it.
## Work flow

>public/index.html---> src/index.js---renders--> src/App.js
## Components

>In react, Components are the building blocks of every react application. Component describes a part of user interface. They are reusable and can be nested inside other components. 
### Types of Components:

>Basicaly for creating components we can create function base and class base components and using this there are many types of components. There is no specific number of components.
                1. Fuctional Component
                2. Class Component
                3. HOC (Higher order component)
                4. Pure Conponent
                5. Controlled Component
                6. Uncontrolled Component

* ### Stateless Functional Component

>Stateless Functional Components are literally the javascript Functions which return that html that describes the UI. They can optionaly receive the object of properties which is refers as a props and returns the html that describes the UI.
```jsx harmony
import React from 'react'
function Geek(props){
    return <h1>Hello {props.name}</h1>
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
### Class Component over a Function Component?

>If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.

## React fragments

## Nested Components

>Yes, we can use nested component inside any component

```jsx harmony
import React from "react";

export default function Nested(){
    return(
        <>
            <Person/>
            <Message/>
        </>
    )
}

const Person=()=><h2>Vaibhav</h2>;

const Message=()=>{
    return(<p>this is my message</p>);
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

>Props is the shortcut for properties, is the optional input that component can accept. It also allows the component to be dynamic. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.
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

>State of a component is an object that holds some information that may change over the lifetime of the component. React only update its components when changes appearing in props and state.
>If there is change in state then react render jsx code only, otherwise it doesn't render.

```jsx harmony
import React,{Component} from 'react'
class TextForm extends Component {
    constructor(){
        super();
        this.state = {
            text:"vaibhav karnwal"
        }
    }
    handleUpClick=()=>{
        this.setState({text:"Welcome"});
    }
   
    render(){
    return (
        <>
            <div className="container my-3">
                <label for="formGroupExampleInput">{this.state.text}</label>
            </div>
            <button className='btn btn-primary mx-3' onClick={()=>this.handleUpClick()}>Click me</button>
        </>
    )}
}
export default TextForm;
```
        
* ### useState
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

* ### setState

```jsx harmony
import React,{Component} from 'react'

class TextForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            text:'vaibhav karnwal'
        }
    }

    handleUpClick=()=>{
        this.setState((event)=>({
            text:event.text.toUpperCase()
        }));
    }
    handleLoClick=()=>{
        this.setState((event)=>({
            text:event.text.toLowerCase()
        }));
    }

    changeInText=(event)=>{
        this.setState({
            text: event.target.value
        });
    }
   
    render(){
        return (
            <>
                <div className="container my-3">
                    <label htmlFor="formGroupExampleInput">{this.props.heading}</label>
                    <input type="text" className="form-control" value = {this.state.text} onChange={this.changeInText} id="formGroupExampleInput"/>
                </div>
                <button className='btn btn-primary mx-3' onClick={this.handleUpClick}>change to uppercase</button>
                <button className='btn btn-primary mx-3' onClick={this.handleLoClick}>change to lowercase</button>
                <div className='container'>
                    <p>{this.state.text.split(" ").length} words and {this.state.text.length} characters</p>
                </div>
            </>
        )
    }
}

export default TextForm;
```

## Hooks

>Hooks are functions that lets us “hook into” React features from function components. Their names always start with use. Hooks did not work in class and with the help of hooks, we did not have to convert the whole function into class to use state. 

### Declaring a State Variable

>In a class,we initialize the state of any variable in the constructor only. we initialize the count state to 0 by setting this.state to { count: 0 } in the constructor:

```jsx harmony
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  ```

>In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component. useState helps us to initialize the state variable.

```jsx harmony
import React, { useState } from 'react';

function State() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

```
### What does calling useState do? 

>It declares a “state variable”. Our variable is called count but we could call it anything else also. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class.

```jsx harmony 
const [fruit, setFruit] = useState('banana');
```

>This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

```jsx harmony
  var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair
```
>When we declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

### What does useState return? 

>It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair.

### Reading State

>When we want to display the current count in a class, we read this.state.count:

```jsx harmony  
    <p>You clicked {this.state.count} times</p> 
```
>In a function, we can use count directly:

 ```jsx harmony 
 <p>You clicked {count} times</p>
 ```

### Updating State

>In a class, we need to call this.setState() to update the count state:

```jsx harmony
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
```
>In a function, we already have setCount and count as variables so we don’t need this:

```jsx harmony
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```
>Full Code

```jsx harmony
import React,{useState} from "react";

export default function State(){
    const [count, setCount] = useState(0);

    return(
        <>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}
```

* Line 1: We import the useState Hook from React. It lets us keep local state in a function component.
* Line 4: Inside the State component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. It lets us update the count so we’ll name it setCount.
* Line 9: When the user clicks, we call setCount with a new value. React will then re-render the State component, passing the new count value to it.
This might seem like a lot to take in at first. Don’t rush it! If you’re lo

### useState in Objects

```jsx harmony
import React,{useState} from 'react'

export default function useStateInObjects(){
    const [person, setPerson] = useState({
        name:"vaibhav",
        age:26,
        message:"hello, how are you",
    })

    const ChangeDetail=()=>{
        setPerson({...person, message:"fine thankyou"})
    }

    return(
        <>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <h3>Message: {person.message}</h3>
            <button className='btn-primary' onClick={ChangeDetail}>Change</button>
        </>
    )
}
```
### useState in Array

```jsx harmony
import React,{useState} from "react";

export default function Cart(props){
    const [cartProduct, setCartProduct] = useState(props)
    
    const removeProduct=(id)=>{
        let newCartProduct = cartProduct.filter((product)=>product.id!==id)
        setCartProduct(newCartProduct);
    }

    return(
        <>
            {cartProduct.map(product=>{
                const {id,img,title,price} = product
                return (
                    <div className="d-flex flex-row">
                        <img src={img} alt="product"/>
                        <div className="d-flex flex-column">
                            <h6>{title}</h6>
                            <span>Price : Rs {price}</span>
                            <button onClick={()=>removeProduct(id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            <button onClick={()=>setCartProduct([])}>Clear Cart</button>
        </>
    )
}
```

### useEffect

>This hook perform operation that we will tell it do after component rendering. we keep it in useEffect function. The function that is performed in componentDidMount, componentDidUpdate and componentWillUnmount in class is alone performed in useEffect.

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={
        (() =>{
          setCount(count + 1);
        },()=>{
          alert("I am clicked");
        })}>
        Click me
      </button>
    </div>
  );
}
```
>we found that after button click the value of count is not increasing but it directly moving to the alert function like skiping count increament, so for that we will use useEffect so that when ever the count value change render will occur and after rendering alert we will get.

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);


  useEffect(()=>{
    alert("I am clicked");
  })
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click me
      </button>
      <p>You clicked {num} times</p>
      <button onClick={
        (() =>{
          setCount(num + 1);
        })}>
        Click me
      </button>
    </div>
  );
}
```
>if we use more than one local state variable

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

  useEffect(()=>{
    alert("I am clicked");
  });

  return (
    <div>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click {count}
      </button>
      <button onClick={
        (() =>{
          setNum(num + 1);
        })}>
        Click {num}
      </button>
    </div>
  );
}
```
>if we write it like this then the useEffect will execute after every render, which ever state variable value changes. we use [] empty array so that useEffect will only execute when we first time refresh the page, because we pass an empty array to it.

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

  useEffect(()=>{
    alert("I am clicked");
  },[]);

  return (
    <div>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click {count}
      </button>
      <button onClick={
        (() =>{
          setNum(num + 1);
        })}>
        Click {num}
      </button>
    </div>
  );
}
```
>and if we want that on clicking particular button, the useEffect will work then we can give put local state variable name into that array like [num].

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

  useEffect(()=>{
    alert("I am clicked");
  },[num]);

  return (
    <div>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click {count}
      </button>
      <button onClick={
        (() =>{
          setNum(num + 1);
        })}>
        Click {num}
      </button>
    </div>
  );
}
```
### Conditional statements in useEffect

>We can not use useEffect inside conditional statements but yes we can use conditional statements inside useEffect so by that we can perform the same task that we want to perform earlier

```jsx harmony
import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count>=1){
      document.title = `chats ${count}`
    }else{
      document.title = `chats`
    }
  });

  return (
    <div>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click {count}
      </button>
    </div>
  );
}
```
## React Router

### React-Router-Dom
### Router
### Switch
### Link
### Route

```jsx harmony
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

```jsx harmony
import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/section/About";
import Home from "./Components/section/Home";
import Users from "./Components/section/Users";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/users' component={Users}/>
        </Switch>
      </>
  );
}
```

```jsx harmony
import React from "react";

export default function Home(){
    return <h1>Home</h1>
}

export default function About(){
    return <h1>About</h1>
}

export default function Users(){
    return <h1>Users</h1>
}
```

### Passing Props 

```jsx harmony
import React from "react";
import Employee from "./Employee";

export default function Users(){
    return (
        <>
            <div className="container my-4">
                <h1>User data</h1>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' salary = "90000"/>
            </div>
        </>
    )
}
```

```jsx harmony
import React from "react";

export default function Employee(props){
    return(
        <>
            <div className="card b-3 mx-1 p-2 my-2">
                <h6>Name : {props.name}</h6>
                <p>department : {props.department}</p>
                <p>salary : {props.salary}</p>
            </div>
        </>
    )
}
```
### Maping and Displaying Json data on UI

```jsx harmony
[
    {

    "emp_name": "abcdef",
    "emp_id": "123456",
    "Branch": "Banglore",
    "Department": "software",
    "emp_image": "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
    "Dateofjoin": "17/12/2021"
  },{

    "emp_name": "abcdef",
    "emp_id": "123456",
    "Branch": "Banglore",
    "Department": "software",
    "emp_image": "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
    "Dateofjoin": "17/12/2021"
  },{

    "emp_name": "abcdef",
    "emp_id": "123456",
    "Branch": "Banglore",
    "Department": "software",
    "emp_image": "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
    "Dateofjoin": "17/12/2021"
  },{

    "emp_name": "abcdef",
    "emp_id": "123456",
    "Branch": "Banglore",
    "Department": "software",
    "emp_image": "https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=",
    "Dateofjoin": "17/12/2021"
  }
]
```
```jsx harmony
import React,{Component} from "react";
import Employee from "./Employee";
import Emp from "../data/Emp";

class Users extends Component{
    render(){
        return (
            <div className="container my-4">
                <h1>User data</h1>
                {Emp.map(data=>{
                    return <Employee 
                        data={data}
                    />
                })}
            </div>
        )
    }
}

export default Users;
```
```jsx harmony
import React from "react";

export default function Employee(props){
    return(
        <>
            <div className="card mx-1 p-1 w-25 d-flex flex-column">
                <img  className="" src={props.data.emp_image} alt="user_image"/>    
                <h6 className="p-2">Employee Name : {props.data.emp_name}</h6>
                <p className="p-2">Department : {props.data.Department}</p>
                <p className="p-2">Id : {props.data.emp_id}</p>
                <p className="p-2">Branch : {props.data.Branch}</p>
                <p className="p-2">Date of Joining : {props.data.Dateofjoin}</p>
            </div>
        </>
    )
}

-------------------or------------------------

import React from "react";

export default function Employee(props){
    const {emp_name,emp_image, emp_id, Dateofjoin, Department, Branch} = props.data;
    return(
        <>
            <div className="card mx-1 p-1 w-25 d-flex flex-column">
                <img  className="" src={emp_image} alt="user_image"/>    
                <h6 className="p-2">Employee Name : {emp_name}</h6>
                <p className="p-2">Department : {Department}</p>
                <p className="p-2">Id : {emp_id}</p>
                <p className="p-2">Branch : {Branch}</p>
                <p className="p-2">Date of Joining : {Dateofjoin}</p>
            </div>
        </>
    )
}
```

### Using Spread Operator

```jsx harmony
import React,{Component} from "react";
import Employee from "./Employee";
import Emp from "../data/Emp";

class Users extends Component{
    render(){
        return (
            <div className="container my-4">
                <h1>User data</h1>
                {Emp.map(data=>{
                    return <Employee key={data.emp_id}
                        {...data}
                    />
                })}
            </div>
        )
    }
}

export default Users;
```
```jsx harmony
import React from "react";

export default function Employee(props){
    console.log(props)
    const {emp_name,emp_image, emp_id, Dateofjoin, Department, Branch} = props;
    return(
        <>
            <div className="card mx-1 p-1 w-25 d-flex flex-column">
                <img  className="" src={emp_image} alt="user_image"/>    
                <h6 className="p-2">Employee Name : {emp_name}</h6>
                <p className="p-2">Department : {Department}</p>
                <p className="p-2">Id : {emp_id}</p>
                <p className="p-2">Branch : {Branch}</p>
                <p className="p-2">Date of Joining : {Dateofjoin}</p>
            </div>
        </>
    )
}
```
## Fetch Data from Api 

### 1.Fetching Data using Fetch Api Method

>Fetch API is built into most modern browsers on the window object (window.fetch) and enables us to make HTTP requests very easily using JavaScript promises.
>We can use fetch() method to get the data. This method accepts just an URL to the data.
>To do so, we will create a method called fetchData(). It will call fetch() method with provided URL, then convert the result to JSON object and print it to the console:

```jsx harmony
import React, { useEffect } from "react";

export default function Fetch(){

    const api = "https://api.lyrics.ovh/suggest/arijit";
    const fetchData = () =>{
        return fetch(api).then(
            response=>(response.json()).then(
                data=>console.log(data)
            )
        );
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <h1>Fetch data using fetch method</h1>
    )
}
```
### 2.Fetching Api data using Axios

>It does the same job as Fetch, but the main difference is that it already returns the result as JSON object, so we don't need to convert it.
>First we need to install it using npm:

```jsx harmony
npm install axios
```
>Than we need to import it to our project and we can use it in the same function fetchData() instead of fetch() method
>What's convenient about using Axios is that it has a much shorter syntax that allows us to cut down on our code and it includes a lot of tools and features which Fetch does not have in its API.

```jsx harmony
import React, { useEffect } from 'react'
import axios from 'axios';

export default function Axios(){

    const api = "https://api.lyrics.ovh/suggest/arijit";

    const fetchData = ()=>{
        return axios.get(api).then(
            response=>(console.log(response.data))
        )
    }

    useEffect(()=>{
        fetchData();
    },[])

    return <h1>Fetch data using Axios</h1>
}
```
### 3.Fetching Data with Async-Await syntax

>In ES7, it became possible to resolve promises using the async-await syntax.
>The benefit of this is that it enables us to remove our .then() callbacks and simply get back our asynchronously resolved data.

```jsx harmony
import React, { useEffect } from 'react'
import axios from 'axios';

export default function Axios(){

    const api = "https://api.lyrics.ovh/suggest/arijit";

    async function fetchData(){
        try{
            const result = await axios.get(api)
            console.log(result.data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return <h1>Fetch data using Axios</h1>
}
```

### 4.Fetching Data with Custom Hook

>We can use the library React-Fetch-Hook to extract the data from API. It includes already several properties we can use: data, error for errors handling and isLoading for loading issues.
>First it should be installed:
```jsx harmony
npm install react-fetch-hook
```
>Then it should be imported and used on top of common parent component

```jsx harmony
import React, { useEffect } from 'react'
import useFetch from 'react-fetch-hook';

export default function UseFetch(){

    const api =  "https://api.lyrics.ovh/suggest/arijit";

    const{data}=useFetch(api)
    console.log(data);

    return <h1>Fetching Data with Custom Hook</h1>
}
```
### Context API in React 
  >The Context API in React JS is a built-in feature that allows you to share data (like state, themes, or user info) across the entire component tree without passing props manually at every level.
### Why use it?
>Avoid prop drilling (passing props through many layers).
>Useful for global state like authentication, theme, language, etc.
```jsx harmony
import { createContext } from "react";

export const Usecontext = createContext(null);
const UserContext = ({ children }) => {

  const Url = import.meta.env.VITE_BACKED_URL_HOST;
 

  const value = {
    Url,
    
  };
  return (
    <div>
      <Usecontext.Provider value={value}>{children}</Usecontext.Provider>
    </div>
  );
};

export default UserContext;
```
## 📦 What is SWR in React?
> SWR (stands for “Stale While Revalidate”) is a React Hooks-based data fetching library created by Vercel (the creators of Next.js). It helps you fetch data from an API in a fast, efficient, and reactive way with built-in caching, revalidation, focus tracking, and error handling.
### ✅ Why use SWR?
  >🚀 Fast performance with cache-first strategy
  >🔁 Auto revalidation on focus, reconnect, or interval
  >🧠 No need for manual state management
  >😌 Simplifies data fetching logic
  >🔂 Fallback data & error retry features
  >💾 Built-in caching
  >🌐 Works great with REST & GraphQL APIs
### ⚙️ Installation
   ```bash
npm install swr
# or
yarn add swr
```
### For Example
 ```jsx harmony

import useSWR from 'swr';
import { fetcher } from '../fetcher';

function UserList() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Failed to load users.</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```
 ### 🧠 Advanced Features
   >Revalidate on focus:When the user switches back to the tab, SWR automatically re-fetches data.
>Polling:
```jsx harmony
useSWR('/api/data', fetcher, { refreshInterval: 3000 }); // every 3 seconds
```
>Fallback Data (useful for SSR/SSG):
```jsx harmony
useSWR('/api/user', fetcher, { fallbackData: { name: 'Loading...' } });
```
## Learn More
>You can learn more in the [Create React App documentation](https://facebook.github.io/cr eate-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
