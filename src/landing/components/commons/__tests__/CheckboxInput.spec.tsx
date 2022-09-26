import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { CheckboxInput } from '../CheckboxInput';

const mockStore = createMockStore([]);

afterEach(cleanup);

describe('Given CheckboxInput component', () => {

  const mockProps = [
    {
      id: "bbq",
      label: "Zona BBQ"
    }
  ]
  
  test('should render correctly', () => {
    const state = {
      userData: {
        zones: ['bbq'],
      }
    };
    const store = mockStore(state);
    const { container } = render(
      <Provider store={store}>
        <CheckboxInput id={'floor'} label={'Número de piso'} options={mockProps}/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('checkbox'));
  });
});
