import { render, screen } from '../../../test-utils';

import Header from '../Header';

describe('Header testing', () => {
  const createCounter = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<Header />, options);
  };

  const setup = () => render(<Header />);

  test('Score display renders', () => {
    setup();
    const scoreDisplay = screen.getByLabelText('score-display');

    expect(scoreDisplay).toBeInTheDocument();
  });
  test('Score header and score text renders', () => {
    setup();
    const scoreHeader = screen.getByLabelText('score-header');
    const scoreText = screen.getByLabelText('score-text');

    expect(scoreHeader).toBeInTheDocument();
    expect(scoreText).toBeInTheDocument();
  });

  test("Score-header has test 'Score'", () => {
    setup();
    const scoreHeader = screen.getByLabelText('score-header');
    expect(scoreHeader.textContent).toBe('score');
  });

  test("Score-text has test '0'", () => {
    setup();
    const scoreText = screen.getByLabelText('score-text');
    expect(scoreText.textContent).toBe('0');
  });

  test('Logo changes to bonus logo', () => {
    createCounter({
      game: {
        mode: 'bonus',
        score: 0,
      },
    });

    const logo = screen.getByLabelText('logo');

    expect(logo).toHaveAttribute('src', 'logo-bonus.svg');
  });

  test('Logo changes to default logo', () => {
    createCounter({
      game: {
        mode: 'default',
        score: 0,
      },
    });

    const logo = screen.getByLabelText('logo');

    expect(logo).toHaveAttribute('src', 'logo.svg');
  });
});
