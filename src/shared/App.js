import React, { Component } from "react";
import { BrowserRouter as Router, StaticRouter, Switch, Route, Link } from "react-router-dom";
import { createMemoryHistory } from 'history';

// import './App.css';
import Navigation from "./components/Navigation";
import Content from "./components/content";
import Footer from "./components/footer";
import Mail from "./components/mail";
import Archives from "./components/archives";

class App extends Component {
  render() {
    const history = createMemoryHistory();
    return (
      <div className="App">
        <StaticRouter
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/archives" exact component={Archives} />
          </Switch>
          <Footer />
        </StaticRouter>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <Navigation />
    <Content className="content" />
    <Mail />
  </div>
);

export default App;
