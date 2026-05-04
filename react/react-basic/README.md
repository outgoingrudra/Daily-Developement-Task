

# difference between library and framework

 library
----------
- You control the code 
- You have more independence 
- There is no fixed rules of using the funcs of library
- You call the library 
e.g- React JS

 framework
------------
- Framework control the code 
- You have less independence
- There are more rules here
- Framework calls your code
e.g - Next JS


# explain different folders present in React Application


- node modules - contains all the package which we download 
- public -  contains all static files like images , videos etc 
- src(source code) - contains all the code we have written 
- assests - contains the assests or data 
- vite.config.js - configuration file for vite 
- eslint.config.js - configuration file for eslint 


# explain JSX
- jsx - javascript syntax




# node js 
   - software which is used to run javascript 
   - manage project  


# package 
  - a collection of code which provide us the utility functions
  - other names - dependency 
e.g - I have used axios dependency in my project .

# npm 
   - package manager for node js 
   - npm install <pkg name>  -> for installing package 
   - npm uninstall <pkg name>  -> for uninstalling package 
   - npm run dev -> for running react application 
   - npm run build -> for bundling the project 
   - npm install -> install the packages present in package.json
   - it has no official full form , but many people say its full form is node package manager




# Why we dont push our node modules to github ?
 - because we can regenerate node modules whenever we need .
 

# Do i need to push pkg.json in github ?
   - Yes ! because pkg.json contains information about dependencies 


# What is package.json ?
   - package.json is a configuration file which keeps track of packages along with their version  which we have  used . 


   
# Why pkg-lock.json when we have pkg.json ?
  -pkg.json keeps version ranges which may differ from the exact version 
  -pkg-lock.json tracks exact version of the packages


# Why have we so much packages in node modules when we have downloaded only few ?
    - because the packages we download also need some other pacakges for working .
    - e.g - A(x ,y) -> A , X , Y  


# How many package.json we have 
    - All the packages which we install have their own pkg.json 




# Transitive dependendency
  - Transitive dependency is the dependency of the dependency 
    A pkg is needed for our project .
    for running A pkg we need B and C pkg => B and C will be transitive dependency for me 


# Why 2 React pkg needed 
   - React is not limited to web development . it is also used in app development and others . React DOM is limited to web development .

# What is jsx 
  - 

# Can react work without jsx 

# Can js engine understand jsx

# What is Babel

# Philosophy of React 

# can React be used for Backend 
    - No ! 
    React - frontend
    Node - Backend
    Next - for both

# What is dependency
 - Dependency is the pkg on which our project depends on .

# What are the types of dependencies
  - There are two types of dependency - Normal dependency and Development dependency

# difference between normal and dev dependency 
    - Normal dependency is used in both development and production
    - Dev Dependency is used for development only 
   
# Why we need dev dependency ?
   - Make development easy 

# How to install dev dependency ?
   - npm install pkg-name -> for installing normal dependency
   - npm install -D pkg-name -> for installing dev dependency

# What is Bundler
 

# What does bundler do 

# type of browser 
  2 types of browser 
   - Modern browser -> new browser 
   - Legacy browser -> old browser

# How to install a pkg as dev dependency
  - npm install -D pkg-name  

# What is HMR 

# What is Tree Shaking 

# What is differntail bundling 

# What is virtual DOM 

# Why React so fast ?

# What is "build" command ?


