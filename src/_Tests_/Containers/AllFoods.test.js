import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { Provider } from 'react-redux';
import store from '../../Reducers/index';
import AllFoods from '../../Containers/allFoods';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Provider store={store}><AllFoods /></Provider>);
  return component;
};

describe('should not display any component while app is loading', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should not render any header element', () => {
    expect(component.find('h1').length).toBe(0);
  });

  it('should not render any span elemet', () => {
    expect(component.find('span').length).toBe(0);
  });
});
