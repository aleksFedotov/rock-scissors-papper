import { render, screen } from '../../../test-utils';

import Display from '../Display';

describe('Display tests', () => {
  const createComponent = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<Display />, options);
  };

  test('Display renders default pikcer', () => {
    createComponent({
      game: {
        userChoice: '',
        mode: 'default',
        result: '',
      },
    });

    const defaultPicker = screen.getByLabelText('default-picker');
    expect(defaultPicker).toBeInTheDocument();
  });

  test('Display renders bonus pikcer', () => {
    createComponent({
      game: {
        userChoice: '',
        mode: 'bonus',
        result: '',
      },
    });

    const defaultPicker = screen.getByLabelText('bonus-picker');
    expect(defaultPicker).toBeInTheDocument();
  });

  test('Display result after iser made a choice', () => {
    createComponent({
      game: {
        userChoice: 'rock',
        mode: 'default',
        result: '',
      },
    });

    const result = screen.getByLabelText('result');
    expect(result).toBeInTheDocument();
  });
});
