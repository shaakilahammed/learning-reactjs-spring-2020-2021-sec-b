import './App.css';
import axios from "axios";
import MenuBar from './Component/MenuBar';
import AddEvent from './Component/AddEvent';
import AllEvent from './Component/AllEvent';
import EditEvent from './Component/EditEvent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
  return (
    <div>
        <Router>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <h1 className="pageTitle">Wecome To Digital Diary</h1>
          </Route>
          <Route path="/home">
            <h1 className="pageTitle">Wecome To Digital Diary</h1>
          </Route>
          <Route path="/add-event">
            <AddEvent />
          </Route>
          <Route path="/all-event">
            <AllEvent />
          </Route>
          <Route path="/edit/:id" children={<EditEvent />}>
            
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;