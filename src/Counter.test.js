import React from 'react'
import { createStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import { render, cleanup,  fireEvent } from '@testing-library/react';
import { reducer, initialState } from '../src/store/reducer'
import Counter from './Counter'



const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

 afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<Counter />, 
    {initialState: {count: 0}
})
    expect(getByTestId('counter')).toHaveTextContent('0')
  })

  it('increments the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<Counter />, 
      {initialState: {count: 5}
  })
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('6')
  })

it('decrements the counter through redux', () => {
  const { getByTestId} = renderWithRedux(<Counter />, {
    initialState: { count: 100 },
  })
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('99')
})