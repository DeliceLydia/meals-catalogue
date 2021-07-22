import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../Containers/Navbar';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const tree = renderer
    .create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
