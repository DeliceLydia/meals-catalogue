import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Image from '../../Components/foodImg';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Image src="jest" name="testing" />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should display one image', () => {
    expect(component.find('img').hasClass('recipe-image')).toBe(false);
  });

  it('should display one header', () => {
    expect(component.find('h2').length).toBe(1);
  });
});
