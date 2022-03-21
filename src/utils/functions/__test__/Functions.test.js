import getResult from '../getResult';
import getHouseChoice from '../getHouseChoice';

describe('Fucntions tests', () => {
  test('getResult', () => {
    expect(getResult('rock', 'scissors')).toBe('You win');
    expect(getResult('spock', 'lizard')).toBe('You lost');
    expect(getResult('rock', 'rock')).toBe('Draw');
  });

  test('getHouseChoice', () => {
    const arr = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
    expect(arr.includes(getHouseChoice('bonus'))).toBeTruthy();
  });
});
