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

-- Inside jsx we can use the guard operator "&&" that works as if statement


