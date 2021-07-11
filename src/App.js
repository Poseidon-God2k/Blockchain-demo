import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Block from './component/Block';
import Blockchain from './component/Blockchain';
import Hash from './component/Hash';
import Coinbase from './component/Coinbase';

import{ BrowserRouter as Router, Route , Switch} from "react-router-dom"
function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/hash">
            <Hash />
          </Route>
          <Route path="/block">
            <Block />
          </Route>
          <Route path="/blockchain">
            <Blockchain />
          </Route>
          <Route path="/coinbase">
            <Coinbase />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
