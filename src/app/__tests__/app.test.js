import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import 'babel-polyfill'

import { LoginPage } from '../LoginPage';
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
});
