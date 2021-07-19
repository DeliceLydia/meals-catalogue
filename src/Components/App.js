import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Navbar from '../Containers/Navbar';
import AllCategories from '../Containers/Categories';
import AllFoods from '../Containers/AllFoods';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllCategories} />
        <Route exact path="/category/:category" component={AllFoods} />
      </Switch>
    </Router>
  </>
);

export default App;
