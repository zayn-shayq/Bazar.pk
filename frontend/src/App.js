import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes} from "react-router-dom";
import WebFont from "webfontloader"
import React from 'react';
import Home from "./component/Home/Home"


function App() {


  
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    //store.dispatch(loadUser());

    //getStripeApiKey();
  }, []);




  return (
    
    <Router>

      <Header />
      
      <Footer />

    </Router>
    

    







  );
}

export default App;
