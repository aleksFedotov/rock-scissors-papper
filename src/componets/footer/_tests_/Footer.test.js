import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Footer from '../Footer';

const initialState = {
  rulesIsShowm: false,
  settingsIsShowm: false,
  modalIsShown: false,
};
const mockStore = configureStore();

describe('Footer testing', () => {
  test('rules button renders', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const rulesBtn = screen.getByRole('button', { name: /rules/i });

    expect(rulesBtn).toBeInTheDocument();
  });

  test('settings button renders', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const settings = screen.getByLabelText('settings');

    expect(settings).toBeInTheDocument();
  });
});
