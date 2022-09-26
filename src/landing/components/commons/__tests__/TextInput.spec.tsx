import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { TextInput } from '../TextInput';

const mockStore = createMockStore([]);

afterEach(cleanup);

describe('Given TextInput component', () => {
  
  test('should render correctly with initial state', () => {
    const state = {
      userData: {
        name: 'Sandra',
      }
    };
    const store = mockStore(state);
    const { container } = render(
      <Provider store={store}>
        <TextInput id={'name'} label={'Nombres y apellidos'}/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId('input-text').getAttribute('value')).toEqual('Sandra');
    expect(screen.getByText('Nombres y apellidos')).toBeInTheDocument();
  });
});
