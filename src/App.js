
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { CoffeeHomePage } from './components/pages/CoffeeHomePage';
import { CoffeeDetailsPage } from './components/pages/CoffeeDetailsPage';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CoffeeHomePage />
        </Route>
        <Route exact path="/coffee/:id">
          <CoffeeDetailsPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
