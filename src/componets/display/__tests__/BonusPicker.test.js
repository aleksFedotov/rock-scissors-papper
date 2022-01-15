import { render, screen } from '../../../test-utils';

import BonusPicker from '../bonus-picker/BonusPicker';

describe('BonusePicker tests', () => {
  test('Bonus picker renders img and right amount of chips', () => {
    render(<BonusPicker />);

    const img = screen.getByRole('img', { name: /pentagon/i });
    const chips = screen.getAllByRole('button');

    expect(img).toBeInTheDocument();
    expect(chips.length).toBe(5);
  });
});
