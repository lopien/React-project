import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Index from './components/Index/Index';
import News from './components/News/News';
import Main from './components/Main/Main';

import  './style.css';

class App extends React.Component{
  render(){ 
    return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route 
        path='/main'
        render={() => <Main/>}>
      </Route>
      <Route path='/news' component={News}/>
    </BrowserRouter>
    );
  }
}

export default App;
