import { render, screen } from '../../../test-utils';
import * as reactRedux from 'react-redux';

import Header from '../Header';

describe('Header testing', () => {
  // const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  // beforeEach(() => {
  //   useSelectorMock.mockClear();
  // });

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

  test('Logo changes', () => {
    setup();
    // render(<Header />, { initialState: { game: 'bonus' } });

    // useSelectorMock.mockReturnValue({ game: { score: 0, mode: 'bonus' } });

    const logo = screen.getByLabelText('logo');

    expect(logo).toHaveAttribute('src', 'logo.svg');

    // useSelectorMock.mockClear();
  });
});
