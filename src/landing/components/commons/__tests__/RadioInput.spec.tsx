import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { RadioInput } from '../RadioInput';

const mockStore = createMockStore([]);

afterEach(cleanup);

describe('Given RadioInput component', () => {
  test('should render correctly', () => {
    const state = {
      userData: {
        parking: true,
      }
    };
    const store = mockStore(state);
    const { container } = render(
      <Provider store={store}>
        <RadioInput id={'floor'} label={'Número de piso'}/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(screen.getAllByRole('radio')[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('radio')[0]);
  });
});
