import { render, screen } from '../../../test-utils';

import DefaultPicker from '../default-picker/DefaultPicker';

describe('BonusePicker tests', () => {
  test('Bonus picker renders img and right amount of chips', () => {
    render(<DefaultPicker />);

    const img = screen.getByRole('img', { name: /triangle/i });
    const chips = screen.getAllByRole('button');

    expect(img).toBeInTheDocument();
    expect(chips.length).toBe(3);
  });
});
