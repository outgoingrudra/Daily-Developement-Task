React has SPA behaviour .
SPA - Single Page Application 

   - means application will be loaded once , after that even if we change the route it wont trigger reload 


routing in React
 - npm i react-router-dom
- wrap whole <App> inside <BrowserRouter>
  means - <BrowserRouter><App></BrowserRouter>


Routes - Route

<Routes>
     <Route/>
     <Route/>
     <Route/>
     <Route/>
</Routes>



code -splliting / Dynamic bundling / lazy loading
 - breaking the large js bundle into smaller peices so they load only when needed

lazy()
  - it lets you load a component only when it actually needed



controlled component
  - a  form element which value  is conttrolled by react state



Props driling 
-  it occurs when you props are passed through multiple layers of component unneccessarily to reach a nested component

soln -
  - Context API
  - State Management lib(Redux)
  