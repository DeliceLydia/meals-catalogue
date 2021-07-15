import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Navbar from '../Containers/Navbar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
  </>
);

export default App;
