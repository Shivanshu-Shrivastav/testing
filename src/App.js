import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Home/Main";
import Header from "./pages/Home/Header";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
         
          <Route exact path='/main'  component={Main }/>

          <Route exact path='/search/:id'  component={Header }/>
           
          
        </Switch>
      </Router>
    </div>
  );
}
export default App