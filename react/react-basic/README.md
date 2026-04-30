

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



