
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Switch>
    <Route exact  path="/" component={Home} />
    <Route exact  path="/about" component={About} />
    <Route exact  path="/Contact" component={Contact} />
     
        </Switch>
      </Router>
   
     
    </div>
    
  );
}

export default App;
