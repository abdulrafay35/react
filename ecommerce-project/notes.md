-- If we give the path of anything to react then it will look for it in the public folder. for example : 
<img src = "images/img1.png"> , React will look for this image inside the public folder.

-- Routing let's us create multiple pages in react. Routing let's us create multiple pages using 1 HTML files. This lets us reuse our html code. To use routing we need an npm package called "react-router"

-- To use the router we first need to install and import using  import { BrowserRouter } from 'react-router' inside main.jsx . Then wrap the App component in main.jsx with BrowserRouter . Like this : "
 <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>, 

" Then inside the App component in App.jsx we need to add a component called Routes. And define our Routes inside it like this :-
import {Routes, Route} from 'react-router'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<h2>Checkout</h2>}></Route>
    </Routes>
  )
}


The first prop is "path" which tells react the url path for this page. second prop is the "element" where we give the component/element that should be renedred on that page.

We now have multiple pages in the website as shown in example above. And important thing is that they all use same / file which reduces repetition.

-- For path="/" react gives a shortcut that we can use: 
<Route index element={<HomePage />}></Route>
-- Secondly if don't have anything inside the Route components then we can use the self closing shortcut : 
<Route index element={<HomePage />} />

-- If you want a different title for each page (ideally) then it is simple in react. Just paste the title tag in the component of that page (in the beginnning of return statement)

-- Link component let's us go to another page without page reload . To use it just import it where needed. And then instead of using a tags. Use Link components. And instead of "href" attribute it has the prop called "to" . So you should use Link component when using react router.

-- One way to get data from the backend/api is using fetch() .

-- Asyncronous code means the code that isn't finished/executed right away. For example when we call an API using fetch() .

-- fetch() returns a promise.

-- Second way of sending requests to backend/api is using npm package 'axios' which is cleaner.

-- 'useEffect' hooks runs the code inside it , everytime the component is created or updated. But we can control this by adding an empty array "[]" at the end. It is called dependency array.

-- We can't add props to the fragments "<></>" in react. To add props inside fragments, we have to use built in react component called "<Fragment></Fragment>". and we can pass any props inside it.

-- A cleaner way of accessing backend / api is to use async await. When using async await inside the useEffect we cannot write the async directly beside the callback function of the useEffect, instead we have to create another function inside the useEffect hook and set that to async and then use await before the code that sends the requests.
