import { render, screen } from '../../../test-utils';

import Result from '../result/Result';

describe('Result component testing', () => {
  const createComponent = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<Result />, options);
  };

  jest.useFakeTimers();

  test('User choice is rendered', () => {
    createComponent({
      game: {
        userChoice: 'rock',
      },
    });

    const userChoice = screen.getByLabelText('user-choice');

    expect(userChoice).toBeInTheDocument();

    // Right chip is rendered

    const chip = screen.getByLabelText(/chip-rock/i);

    expect(chip).toBeInTheDocument();
  });

  test('House choice is rendered', () => {
    createComponent({
      game: {
        userChoice: 'rock',
        houseChoice: 'scissors',
      },
    });

    const userChoice = screen.getByLabelText('house-choice');

    expect(userChoice).toBeInTheDocument();

    // Right chip is rendered

    const chip = screen.getByLabelText(/chip-scissors/i);

    expect(chip).toBeInTheDocument();
  });
});
