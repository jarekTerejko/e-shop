import React from 'react';
import Homepage from './Pages/Homepage/Homepage'
import {Route, Switch} from 'react-router-dom'
import './App.css';


const HatsPage = () => {
  return (
   <div> hats page</div>
  )
}

function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/hats" component={HatsPage} />

    </Switch>
    </div>
  );
}

export default App;
