# props
   - properties 
   - props are the parameter you pass to a functional component 


# Virtual DOM
  - a leightweighted copy of actual DOM in memory that represents actual DOM 

  - actual browser element -> Real DOM
  - React copy in memory - Virtual DOM

# key props
  - unique identifier that help React to track elements in virtual DOM for efficient updates




# hooks 
- hooks are normal javascript utility functions which provide state and lifecycle methods to functional component .
e.g - useState , useEffect ,.....


# use State 
 - useState is a react hook which is used to create state variable . whenever state variables updates it triggers a re - render 


 useState() - returns [ variable , setter func]
 - whenever the setter func will be called it will trigger the re-render 



- React uses reconcilation algorithm behind the scene for efficent dom manipulation 



# UseEffect
 - it has 2 arguments - a callback func and a dependency array

 use of useEffect 
 - data fetching
