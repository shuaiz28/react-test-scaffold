import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import 'babel-polyfill'
import thunk from 'redux-thunk';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { BrowserRouter } from 'react-router-dom';

describe('LoginPage', () => {
  const initialState = { authentication: { } };
  const mockStore = configureStore();
  let store;

  test('should show validation message', async () => {
    store = mockStore(initialState)
    const { getByTestId, findByText } = render(<Provider store={store}><BrowserRouter><LoginPage /></BrowserRouter></Provider>);

    fireEvent.click(getByTestId('login'), 'submit');

    await findByText(/Username is required/);
    await findByText(/Password is required/);
  });

  test('should show password validation message', async () => {
    store = mockStore(initialState);
    const { getByTestId, findByText, getByText, queryByText } = render(<Provider store={store}><BrowserRouter><LoginPage /></BrowserRouter></Provider>);
    fireEvent.change(getByTestId('username'), { target: { value: 'username1' } });

    fireEvent.click(getByTestId('login'), 'submit');

    const result = screen.queryAllByText(/Username is required/);
    expect(result).toEqual([]);
    await findByText(/Password is required/);
  });
});

describe('RegisterPage', () => {
  const initialState = { registration: { } };
  const middlewares = [thunk]; // add your middlewares like `redux-thunk`
  const mockStore = configureStore(middlewares);
  let store;

  test('should register successfully',async () => {
    store = mockStore(initialState);
    const register = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterPage register={register}/>
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(getByTestId('firstName'), { target: { value: 'a' } });
    fireEvent.change(getByTestId('lastName'), { target: { value: 'b' } });
    fireEvent.change(getByTestId('username'), { target: { value: 'c' } });
    fireEvent.change(getByTestId('password'), { target: { value: 'd' } });

    fireEvent.click(getByTestId('register'), 'submit');

    const registerAction = store.getActions().filter(action => action.type === 'USERS_REGISTER_REQUEST')[0];

    expect(registerAction.user).toEqual( { firstName: 'a', lastName: 'b', username: 'c', password: 'd' } );
  });
});
