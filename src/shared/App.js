import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Content from './components/content'
import Footer from './components/footer'
import Mail from './components/mail'
import Archives from './components/archives';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Router basename ={window.location.pathname || ''}>
        <Switch>
          <Route path = "/" exact component ={Home}/>
          <Route path = "/archives" exact component ={Archives}/>
        </Switch>
        <Footer/>
        </Router>
      </div>
    );
  }
}

const Home = () =>(
  <div>
        <Navigation/>
        <Content className="content"/>
        <Mail/>
  </div>
)


export default App;
