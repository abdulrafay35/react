-- Adding code to github:
Go to github and create a repo
Come in git bash terminal and run these commands :
# make sure you’re in your project folder
git init

# add all your files
git add .

# create a commit
git commit -m "first commit"

# rename your branch to main (only needs to be done once)
git branch -M main

# link to your GitHub repo
git remote add origin [repo] 

# now push to GitHub
git push -u origin main

*****************


-- this keyword
this keyword can be used to access properties of current object. E.g : If we have an object called "cart" with a property "id" then we can use "cart.id" or "this.id" to access the "id" . The difference is that if we later change the object name from "cart" to anything else then the first methoud of accessing the id won't work anymore. But if we used "this" instead of the object name then it will still work.

-- React uses babel to convert "jsx" to javascript , so browser can understand.

-- We can insert javascript code inside jsx using "{}" 
For example : "<p>2+2 is {2+2} </p>"

-- In jsx you must close the html element. 
For example "<input> </input> or <img></img>". 
If there is nothing to show inside the elements then we can use shortend like this:
"<input /> or <img />".

-- A function that returns something is called as "Component". For example:
   function ChatInput() {
      return (
        <>
          <input placeholder="Send a message to Chatbot" />
          <button>Send</button>
        </>
      )
    }

-- We can call it inside our jsx as we do for any other function i-e "{Component()}" but react recommends a better way to Use <ComponentName /> i.e <Component /> 

-- Components follow the same ruling as html elements inside jsx as mentioned above. For example: if we have a component "ChatInput" we can call it like "<ChatInput></ChatInput>" and again if there is nothing to display inside it then it is better to do it like "<ChatInput />" as self closing.

-- We can give our components "attributes" similarly as we gave attributes to html elements. For Example: 
<Chatmessage message="hello" sender="user" />

-- All the components functions we create can have one parameter called "props", which is an "object" that contains all the "attributes" we give to that component. So we can use  that to access the attribute's values by using "props.attribute" or we can use "destructuring". 
For Example :
The default way is : " function ChatMessage(props) {
      const message = props.message;
      const sender = props.sender; 
      console.log(message);
      } "
Using Destructuring : "function ChatMessage(props) { 
    const {message, sender} = props;
    console.log(message);
     }"
Even Shorter Destructuing : "function ChatMessage({message, sender}) {
    console.log(message);
}"

-- Inside jsx we can use the guard operator "&&" that works as if 

-- ".map" is an array method that lets us go through each value of the array, run the function and returns a new value. It takes function as it's parameter, and this function itself takes a parameter that stores the value for the array items for each itteration to let us do what we want to do on any individual element of the array.

-- In react if we add an array of components, then we must give each component a unique "key", which helps react track changes in the array. 

-- React has special props for components called "event", which let us do something when something happens. The "event" prop always starts with "on" followed by the "name" of the event. For example onClick . It uses camelCase. "event" takes a function which is called "event handler" . "Event handler" is the function that runs when the event happens. For Example: 
<button onClick={sendMessage}>Send Message</button> . The event handler function goes in without the parentheses "()".

-- "State" is the data that is connected to the HTML, When we update this data, it will update the HTML.

-- To convert some data into State, We use "useState" which helps us track our data for changes. When we pass the data the the useState function then it "returns an array with two values" . First Value is the "current data", and second value is the "Updateer Function", which is a function that we can use to update this Data. 
If we update the data directly, react will not update the HTML, but if we use that function to update the data, react will update the HTML.

-- In React we should not modify the data directly. We should always create a copy, and then modify the copy. This helps react be more efficient.

-- Spread operator "..." helps us make a copy of an array and we use it a lot in react alongside useState's updater function to update the data. One practical usecase is as follow : 
"
const numbers = [1,2,3];
const newArray = [...numbers, 4 ] 
This will return newArray witht the value "[1,2,3,4]". So we take the current array and made a copy of it , then added a new element at the end. "

-- "Array Destructuring" is a technique to get arrays values using shortend. For example :
"const numbers = [1,2,3]; 
const [num1, num2, num3] = numbers
"
In array destructuring the order matters.

-- "React Best Practices" : We should not use the DOM manually. Cuz react is managing the website, and if we use the dom manually it might interfere with react. 
For example:
To get the value from the input field, we shouldn't use direct dom methods like "input.value", instead we should use react features to get value from the input.

-- Hooks can only be called (declared) inside of the body of a function component.

-- Put hooks at the top of the component, Hooks should not be inside anything, i-e : inside an if statement or inside a simple function.

-- The state's data can only be used inside the component where the state is defined. If we wanna use a state data from one component to another then we have to move the state code to a "parent component" that has both components as child. And then childeren can share the same state from the parent component. This is called "lifting state up" . To let the childeren components share/use the state of parent , we do this: 
First we pass the state's values as props inside the component call.
Then in component definition (function's parameter) we can accept those props just as we do for normal props, and now child components can have the state from the parent.

-- State does not update immediately. State is updated after all the code is finished.

-- You can add css to the react by different ways. One way is adding it to the head of the page in style tag.

-- "useEffect" hook runs some code after the component is created or updated. It takes "two arguments". First is "the function" which will run each time the component is created or updated. So we can put our code inside that function and that function will update our component , each time the component is created or updated. Second parameter of use effect is "dependency array" which controls when useEffect runs. If we give it empty array "[]", useEffect will "only run once" after the component is created. We can also put any kind of data inside the array and now the useEffect will also run when that data is updated. 
Best practice is to give useEffect a dependency array, to avoid it running too often.

-- "useRef" hooks let us automatically save an HTML element from the component. it creates a "ref", which has some special features. We have to give useRef initial value as a parameter. Usually it is set to "null" , which means ref will start out empty. We can use "ref" prop on the element we wanna save.

******************************

-- "npm create-vite@latest" will create a react project using vite which is recommended.
-- "node_modules" folder is where npm installs all the packages .
-- "src" folder contains all the code for the website.
-- "src/assets" contains images we wanna show on the website
"public" folder contains files that should be available to the public. Public means we can access these files inside the public folder using URL.

-- "eslint.config.js" files configures eslint , which highlights the erros in our code, that by default vs code doesn't highlight. Must install the "eslint" extension from microsoft in order for eslint.config.js to work.

-- "/" contains the html code of the website

-- "main.jsx" sets up react, it calls "createRoot", gives it a container "root", and renders the "App" component onto the website.

-- "App.css" contains the css code. Best practice is to have app related css in App.css and global css in "index.css" . We can import these stylesheet using import statement followed by the file path. This is the vite specifc feature, which allows us to import anything (css,images) and not just js files.

-- When we import an image, we import it without kerly braces, which is called as default import.




