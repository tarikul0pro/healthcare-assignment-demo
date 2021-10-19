import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/header/Header.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './componets/pages/Home.js';
import Service from './componets/pages/Service.js';
import Doctors from './componets/pages/Doctors.js';
import Login from './componets/pages/Login.js';
import PageNotFound from './componets/pages/PageNotFound.js';
import Register from './componets/pages/Register.js';
import Contact from './componets/pages/Contact.js';
import About from './componets/pages/About.js';
import Footer from './componets/pages/Footer.js';

function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          
          <Route path="/register">
           <Register></Register>
          </Route>
          <Route path="/Login">
           <Login></Login>
          </Route>
          
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        
          
          
        </Switch>
        <Footer></Footer>
      </Router>
        
    </div>
  );
}

export default App;
