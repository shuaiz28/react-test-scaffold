import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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
