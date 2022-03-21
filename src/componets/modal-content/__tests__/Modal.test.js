import { render, screen } from '../../../test-utils';

import Modal from '../../ui/modal/Modal';

describe('Modal content testing', () => {
  const createComponent = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<Modal />, options);
  };

  test('Rules rendering default rules', () => {
    createComponent({
      game: {
        mode: 'default',
      },
    });
  });
});
