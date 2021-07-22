import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import FoodDetails from '../../Components/MealsDetails';

const initial = {
  category: 'pasta',
  area: 'kigai',
  ingredients: ['milk', 'honey'],
};

const {
  category, area, ingredients,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(
    <FoodDetails
      category={category}
      area={area}
      ingredients={ingredients}
    />,
  );
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one div', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('should render upto seven span elements', () => {
    expect(component.find('span').length).toBe(7);
  });
});
