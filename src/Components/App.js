import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css';
import Navbar from '../Containers/Navbar';
import AllCategories from '../Containers/Categories';
import AllFoods from '../Containers/AllFoods';
import MealDetais from '../Containers/FoodDetails';

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
