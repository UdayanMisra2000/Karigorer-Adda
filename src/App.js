//import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Body/About'
import Contact from './Components/Body/Footer/Contact'
import Faq from './Components/Body/FAQ/faq'
import Footer from './Components/Body/Footer/footer'
import Service from './Components/Body/Footer/company/service'
import Privacy_policy from './Components/Body/Footer/company/privacy_policy'
import Help from './Components/Body/Footer/company/help'
import Terms from './Components/Body/Footer/company/T&C'
import Careers from './Components/Body/Footer/Join_us/Career'
import Blog from './Components/Body/Footer/Join_us/Blog'
import Login from './Components/Body/Login/login'
import Projects from './Components/Body/Footer/Join_us/Projects'
import Checkout from './Components/Body/Checkout/Checkout';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className = "App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/about-us" component={About}/>
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/privacy_policy" component={Privacy_policy} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/terms_and_conditions" component={Terms} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/check-out" component={Checkout} />
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
