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
import Contact from './componets/pages/Contact.js';
import About from './componets/pages/About.js';
import Footer from './componets/pages/Footer.js';
import AuthProvider from './componets/contexts/AuthProvider.js';
import Viewmore from './componets/pages/Viewmore.js';
import Details from './componets/pages/Details.js';

function App() {
  return (
    <div>
      <AuthProvider>
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
          
          
          <Route path="/Login">
           <Login></Login>
          </Route>
          
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
           <About></About>
            </Route>
            <Route path="/details">
              <Details></Details>
            </Route>
            <Route path="/viewmore/:homeId">
              <Viewmore></Viewmore>
            </Route>
          
          <Route  path="*">
            <PageNotFound></PageNotFound>
          </Route>
                 
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
      hello
    </div>
  );
}

export default App;
