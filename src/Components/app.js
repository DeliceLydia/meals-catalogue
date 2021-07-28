import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Navbar from './navbar';
import AllCategories from '../Containers/categories';
import AllFoods from '../Containers/allFoods';
import MealDetais from '../Containers/mealsDetails';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllCategories} />
        <Route exact path="/category/:category" component={AllFoods} />
        <Route exact path="/meal/:id" component={MealDetais} />
      </Switch>
    </Router>
  </>
);

export default App;
