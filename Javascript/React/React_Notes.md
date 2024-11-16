React
2013 --class based components were introduced
2018---functional based components were introduced.
ES6 Features
1.let and const
2.OOps concept
3.Map,reduce ,filter
4.ternary operator
5.Desturcturing,Rest and
Spread: Unpacks values from an object or an Array <Avatar {...props}/>
6.Promises
7.Arrow functions
8.Template literals
9.Modules
10.Sets

Limitation of react
1.JSx syntax complexity
2.React is a library we cant do all things at one place

Virtual dom:
It is in memory representation and light-weighted copy of the real dom
it will not re-render again. It will only render the changed part.

2algorithms
Diffing: It compares and takes the changes
Reconciliation: will update the changed component .we will use it for layout updation

Real dom Virtual dom
Maint. by the browser Maintained by React
Updates will be slow Updates will be fast
Updates are heavy-weighted Updates are light weighted

Fragments: It prevents unnecessary addition of nodes. It removes shared parent for the component.
It makes the DOM lightweighted,It will increase the performance
<> </> <React.fragment> </React.fragment>

Attribute: Additional information to the element
Prop: Additional info. to component,(sharing the data between the component)
Prop is an object

2 Ways to create a prop(sharing the data between the component)

General prop: Additional info. to the component
Children prop: JSX or data encapsulate between the components

Conditional Rendering :Based on a condition we are rendering UI
const isLoggedIn=true
return(

<h2>{isLoggedIn?Welcome user:Please Login}</h2>
)

2ways :

1. Using ternary operator
   2.Logical and operator (short circuit operator)

---

1/4/2024
Styling in React
There are 4 ways to style the react application.
1.Inline styling or object styling
2.external styling or style sheet :Entire childrens will get the styling if there parent imported with CSS.
3.module styling
4.Sass type of styling(react bootstrap,Tailwind css,material ui,ant design)

---

2/4/2024
Class based component state-setState method-counter and subscribe button
container -functional layer
2013-class based for container layer
2018-Functional based component

function :reusable part of code
Method : whenever we are using any function within the object notation or class

Props:prop is used for communication between the components
props are immutable(only read)
state:State is an object ,which holds the data or info. to the particular component
State is mutable(we can change over the time)(Read and Write)
State is private(we can change the state using setState method in react class based components)
State is asynchronous
Whenever State change occurs component has to re-render to show updated UI
COmponent state should only update using setState ,we should not assign any values directly
State creation in class based components
1.Object way of creation
2.constructor
In case of Arrays index is unique
In case of Objects id is unique so we have to select the particular unique element for delete
3/4/2024
State
constructor :It is a method which is used to initialize the state and bind the events in class based components
Super Keyword: To access the this keyword in derived class if we will not keep then eeror will be shown
constructor()
super()
this.state={
isSubscribed:false;
text1:"subscribe"
text2:"subscribed"
fruits:["banana","apple"]
}

}

Array must be read and shown with map.Whenever we are using map we must give them unique id i.e key prop
U should give whenever Map method returns the first JSX --Key={id}
Unique
Array Index
object Id

Adv. of Key prop:
Efficient updates like product updates will re-render .It will not re-render the entire tree again.[Array=list]
This is one of the optimization(clean code and user experience should be smooth(like ur api should load within 4s)) technique in react

4/4/2024
Component Lifecycle methods/lifecycle methods/in a class based component

---

1.Mounting phase: Whenever elements inserted inside the DOM (Browser)--Each phase has methods
2.Updating Phase: Whenever elements updated or comp. in the DOM
3.UnMounting phase:Whenever elements removed form the DOM
All these are auto invoke methods
1.1 Constructor
1.2 Render(to insert the JSX elements inside the Dom we need render method)Render will execute 2times
1.3 Component did mount :To perform the side effects during the mounting phase we use comp onent did mount in class based component
SideEffects: API call /HTTP request Impure functions/Asynchronus calls
dom manipulation
event listener
component did mount will execute only once in a life cycle

Class productlisting extends COmponent{
componentDidMount(){
this.fetch data()
}

fetchdata = async() => {
let result = await fetch("https://dummyjson.com/products")
let result1 =await result.json() latest code
console.log(result1)
}

render(){ return(
<>
<h4>Product listing<h4>
</>
);
}
}
export default productlisting;

POSTMAN :work avuthunda leda..if it Hit in the postman then that will come in frontend
To check the endpoints

1.4 GetDerivedStateFromProps: To initialize the state based on the props we use derived State from props

Axios : It is a third party library which makes efficient http req having more adv. compared with fetch
Advantages:
1.Automatic json conversion
2.Status code differentiation for success and failure cases of API.

---

5/4/2024

Dom manipulation = document.title="Hello world"

getDerivedStateFromProps:The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
This is the natural place to set the state object based on the initial props.
It takes state as an argument, and returns an object with changes to the state
2.Updating phase
Whenever the element get updated to the dom
2.1 render
2.2 getDerivedStateFromProps
2.3 shouldComponentUpdate ,this method denote the component needs to update or not (returns Boolean value by default) by default it is true
2.4 ComponentDidUpdate to perform the side effects in the updating phase we use ComponentDidUpdate
How many times will it get execute:
whenever component state or props changes this method
2.5 getSnapshotBeforeupdate(props,state )

3.UnMounting phase:Whenever elements removed form the DOM
3.1 Component will unmount: this method cleans up the data initializes the state and prop
for prventing memeory leaks in the app

---

---

6/4/2024

Key = Whenever we are rendering the list using a map method
every element should have unique ID for that we are giving Key prop

Advantages
Efficient Updates and efficient deletes individual items should have unique ids
Optimization technique

Fragments Disadvantages
Styling can't be applied
Div can take attribute and styling

ComponentdidMount vs ShouldcomponentUpdate
To perform sideffects We will compare the previous and current state
if it is there we will update the Vdom
else we will not update:false
efficient way

if we change the parent then child also get changed.
To prevent re-rendering we use pure components: it will render only when its prop or state changes

Generally, In ReactJS, we use the shouldComponentUpdate() Lifecycle method to customize the default behavior and implement it when the React component should re-render or update itself.
When working with React pure components, we can utilize their behavior to optimize behavior as pure components automatically handle the shouldComponentUpdate() method and we don’t need to explicitly implement it.

---

8/4/2024
Limitations of class based component:
-Complex syntax
-Every time if i hv to use a render to insert a JSX elements
-state creation will be happened through constructor
-state or prop or method will be binded by this keyword.
-complexity increases
-functionality code split in different methods
-For a particular task we have to split it into different methods

---

Due to this drawbacks we are going to functional components

Hooks : Hooks let you use of state and other react features without writing class( using the lifecycle methods)
Hooks can be called re-usable predefined functions
Before 2018 functional component were stateless component
After introduction of Hooks in functional components became stateful component

Rules of JSX :
Every component must have a single parent

Rule of Hooks
1.Hooks always are used in functional components
2.It can't be kept in conditionals ,loops
3.Hooks are always imported from react and must call at the top of the component

React Hooks
1.useState Most widely used
2.useEffect Most widely use
3.useCallback
4.useContext
5.useReducer
6.useMemo
7.useRef
8.custom hooks User hooks ,based on the requirements we can design the custom hooks using predefined Hooks

useState : It is hooks which lets you use of state and mutate the state

Syntax

Step1:useState accepts the initial state as a argument  
useState(0)

Step2: useState will returns the array

const arry = useState(0)
Const [currentState,updaterFunction]=useState(0)

const[count,setCount] = useState(0)

Count represents the current state
Setcount represents the updated function to update the current state

---

10/4/2024

Form: from a client,to collect the information
Html elements: input,textarea,select

Generally in react to use form we prefer 2 ways
1.using uncontrolled components: if react doesn't control the input state/data. DOM will control the control the input state.
Field validation are not possible.
State will be controlled by DOM

2.using controlled components : Entire input state mgmt. will be done by react itself.
Field validation are possible
State will be controlled by react
2 types of validation
1.form validation: It will validate all the input elements at one time
2.field validation: (Individual fields can be validated when the user is typing) efficient way

Uncontrolled component:: Everything will be controlled by DOM and that will be passed through useRef hook .

useRef hook :It can be used to communicate with the DOM /access DOM directly
It can be used to store the mutable value of object that does not cause re-render when updated
useRef hooks is an object which is having current properties,which we can manage the entire input

Steps:
1.Take a form
2.Collect the input -> Use a useRef to create a reference with DOM and attach with input
to collect the user input we will use refernce.current.value= document.getElementById.value

---

12/4/2024

Control components :These are controlled by React and their state is tied to react state management
These will rely on react to manage and update the state.

Steps:

1.Take a form (JSX)
2.States for Input control (using useState)
3.Bind the state value using value attribute of the input
4.To control the input ,we use onChangeHandler to the input
5.To collect the user input .target.value

---

13/4/2024

const ControlledComponents = () => {

const [formErrors,setFormErrors]=useState(...)

Const [form,setForm]=useState(...)
//This function is field validate and control state
const onChangeHandler=(event) =>{...}

This function is to collect the user credentials
const handleSubmit=(event) =>{....}

return(JSX syntax) for form validation we are using Switch case

<form onSubmit = {handleSubmit} >
<label>Username<\label>
<input 
    type='text'
    value={form.username}
    onChange={onChangeHandler}
     name="username"
/>
}
export default ControlledComponent

Authentication: Checks if the user is user is valid or not
Authorization: It is the process of determining if a user is allowed to perform certain actions or access certain resources or data

This Function is to Hit Api server
fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({

    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60

})
})
.then(res => res.json())
.then(console.log);

React hook form
Formik

---

15/4/2024

Class Based
1.component did mount
2.component did update

useEffect : It is a hook in functional components that let you cause of performing side effects
Side effects
HTTP request
dom manipulation
event listenters
timing events
subscriptions

UseEffect is replica of 3 lifecycle methods
1.component did mount []
2.component did update [var1,var2,var3]
3.component will unmount no dependency array

useEffect Syntax

1. useEffect will accept 2 args  
    useEffect (arg1,arg2)
   arg1-It represents the function(callback function)
   arg2-It represents the array

useEffect(()=>{},[])

Case1: empty array : Component did mount

1. When an empty useEffect will execute only one time

Case2:Dependency varaibles[var1,var2,var3]
1.When variable changes useEffect will trigger

Case 3: No dependency array

1.useEffect will continuously execute whenever state or prop changes(infinite loop)

Case 4: We can return a function within a callback function for preventing memory leaks
COMPONENT WILL UNMOUNT
useEffect(()=>{
return ()=>{
//Preventing the memory leaks
}
})
return

---

16/4/2024
React is a library so each and every component we have to import
Fetching Data (Axios)Navigation(React-Router-DOM)

React-Router-DOM:To provide inbuilt navigation we need to depend on third party libraries,because react CLI doesn't Navigation

We don't use anchor tags for navigation(anchor tag doesn't)have control over the react state
2 Navigation Types(Routings)
Dynamic Routing
Static routing

const NavigationStack =()=>{
return (
<BrowserRouter>
<Routes>
Route path ="/" component ={Homescreen}
Route path ="/contact"component ={Contactscreen}
Route path ="\*" component={invalidScreen}
</Routes>
<BrowserRouter>
)

}

Link tag is there to link between 2 components or navigate

<Link to path to which it has to redirect ></link> 
 
<link to ={"/"}></link>

There are 2 ways to redirect
1.Link tag(JSX routing )
2.useNavigate hook in react router DOM(functional Routing)

Dynamic routing:
if routing is done using specific id,we will load the one component

Route Path=":city/:(variable)id/info" Component={<DetailComponent>}

\_---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
18/4/2024

2 ways for state Managememt:
1.local state management --useState --component state manages 2. Global state management-- managing the state globally or through out the application
Uisng props we can manage state
Prop drilling:To share the data to the destination component from the source component we are pass it throughout all the component tree

Drawback
1.Intermediate children will get disturbed
2.No maintainence and readability

1.Passing through props
2.Context API :Medium size application,Context Api is used to mange the data or state across globally by avoiding prop drilling situation
3.Redux : for enterprise level sized application

Steps to create context API in react

1. Use create context method from react(app.js or navigation ).First we should decide how many states we want manage
   2.Identify the components that you need to share the data
   3.Wrap or encapsulate the identified components with created context along with provider
   4.Provide the value prop to the wrapper and give the data that we need to share
   5.Select the component and use the data using useContext hook in react.

It is a predefined react hook which enables component to use the global state
UseContext hook accepts the create content method where data being shared
When key and value are same we can take object literal
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------19/4/2024
What are memory leaks?

1.What is useEffect in React?
A.useEffect is used to perform sideEffects in a React functional based components.

2.How does useEffect differ from componentDidMount and componentDidUpdate?
A.useEffect can perform the both life cycle methods but componentDidMount and update will be done only once in a lifecycle method.

3.What are the dependencies in the dependency array of useEffect?Why are they important?
A. useEffect can perform sideEffects in a DidMount and DidUpdate phases only based on the dependencies.
If we pass empty[] then it will run once,if we pass variables[...var1,var2]based on changes it will get executed again and again as the state changes.
Based on dependencies are important for useEffect

4.How do you handle the cleanup in useEffect?
A. useEffect will return a function. if u will handle the function u can clean up the function.Component unmount

5.Common pitFalls?
A.for useEffect if we remove the dependency array,whenever the State or prop changes then it will go to infinite loop and keep on rerenderig if we doesn't keep it array

6.When would you use an empty dependency array in useEffect?
A.If we want useEffect to run only once.

7.How would you conditionally run an effect in useEffect?
A.No,but u can use inside useEffect if else

8.What is 2 args in useEffect hook?
A. Dependency array control the behaviour of the useeffect ,the behaviour of the useEffect is completely dependent on the depency array

9.Can we use multiple useEffect hooks ?
A.Yes,independently it will get executed.

10.How do u test?
A.Jest testing ,debugger,

Single Page Application.
Root element will be present in index.html(1 HTML)
Entire react consists of only JS DOM----only content will get changed
in JS we have created multiple JS files but in react only 1 html file gets changed. The content only gets changed .

Using Memo
useReducer:when we have a complex state manipulations we can go for

25/4/2024
Redux : Redux is a predictable state container for managing the global state for javascript apps
It contains a single source of truth(one store)
Redux third party library
Redux is most preferred using with React
Redux 3 main core principles:
1.Actions -->Action is a object which defines what to happen to the state
{
type:"ADD_Todo"
}

Action creator-->Action creator is a function which return an Action

2.Reducers -->It is a pure function which manipulates the state based on the action
Todos=["apple","Banana"]

ADD_TODO
Todos=["newstate"]

3.Store: It is an object which holds the application data.

---

26/4/2024

State UpLifting: State synchronization in multiple components through functions
GSM LSM Redux--To manage the state globally,Predictable state container for managing the Global state for JS applications

Redux --3 principles--Action--> Reducer---> and STORE--Redux consists of 1 store

oka state ni change cheyali ante Action perform cheyali
State changes ---reducer(Pure function wich updates the state) lo chestamu-- Action is an object which defines what to happen in a state

Redux dev tools --We can visualize the data
Redux-React--useDispatch
React-Redux--useSelector

23/4/2024
custom Hooks:
We can create our own hooks which shares the common functionality between the components.
Custom hooks uses the predefined hooks in react
custom hooks should starts with use Keyword like other hooks in react.

Axios.get : To retrieve a data from a endpoint or server
axios.get is the commonly used thing in react ..i will make a custom with the useAxios, usefetch ,useCounter
