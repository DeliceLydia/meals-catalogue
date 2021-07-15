import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Navbar from '../Containers/Navbar';
import AllCategories from '../Containers/Categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllCategories} />
      </Switch>
    </Router>
  </>
);

export default App;
