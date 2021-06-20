import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Index from './components/Index/Index';
import News from './components/News/News';
import Main from './components/Main/Main';
import Personal_information from './components/Personal_information/Personal_information';
import General_information from './components/General_information/General_information';
import Plan from './components/Plan/Plan';
import Grants from './components/Grants/Grants';
import Rating from './components/Rating/Rating';
import Schedule from './components/Schedule/Schedule';
import Appraisals from './components/Appraisals/Appraisals';
import Questioning from './components/Questioning/Questioning';
import Messages from './components/Messages/Messages';
import './style.css';

class App extends React.Component{
  render(){ 
    return (
    <BrowserRouter>
      <Route exact path='/' component={Index}/>
      <Route exact path='/main' component={Main}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/personal_information' component={Personal_information}/>
      <Route exact path='/general_information' component={General_information}/>
      <Route exact path='/plan' component={Plan}/>
      <Route exact path='/grants' component={Grants}/>
      <Route exact path='/rating' component={Rating}/>
      <Route exact path='/schedule' component={Schedule}/>
      <Route exact path='/appraisals' component={Appraisals}/>
      <Route exact path='/questioning' component={Questioning}/>
      <Route exact path='/messages' component={Messages}/>
    </BrowserRouter>
    );
  }
}

export default App;
