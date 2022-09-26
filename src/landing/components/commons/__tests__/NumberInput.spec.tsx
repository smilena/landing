import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { NumberInput } from '../NumberInput';

const mockStore = createMockStore([]);

afterEach(cleanup);

describe('Given NumberInput component', () => {
  
  test('should render correctly with initial state', () => {
    const state = {
      userData: {
        floor: 6,
      }
    };
    const store = mockStore(state);
    const { container } = render(
      <Provider store={store}>
        <NumberInput id={'floor'} label={'Número de piso'}/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId('input-number').getAttribute('value')).toEqual('6');
    expect(screen.getByText('Número de piso')).toBeInTheDocument();
  });

});
