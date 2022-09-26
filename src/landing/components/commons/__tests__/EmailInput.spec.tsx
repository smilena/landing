import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { EmailInput } from '../EmailInput';

const mockStore = createMockStore([]);

afterEach(cleanup);

describe('Given EmailInput component', () => {
  
  test('should render correctly with initial state', () => {
    const state = {
      userData: {
        email: 'smilenaguevara@gmail.com',
      }
    };
    const store = mockStore(state);
    const { container } = render(
      <Provider store={store}>
        <EmailInput id={'email'} label={'Email'}/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId('input-email').getAttribute('value')).toEqual("smilenaguevara@gmail.com");
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('should render correctly without initial state', () => {
    const state = {
      userData: {}
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <EmailInput id={'floor'} label={'Email'}/>
      </Provider>);
    expect(screen.getByTestId('input-email').getAttribute('value')).toEqual('');
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
