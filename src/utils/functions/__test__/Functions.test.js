import getResult from '../getResult';

describe('Fucntions tests', () => {
  test('getResult', () => {
    expect(getResult('rock', 'scissors')).toBe('You win');
    expect(getResult('spock', 'lizard')).toBe('You lost');
    expect(getResult('rock', 'rock')).toBe('Draw');
  });
});
