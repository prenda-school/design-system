import { render } from '@testing-library/react';
import TabList from './TabList';
import TabContext from '../TabContext';

describe('TabList', () => {
  it('renders', async () => {
    const { findByRole } = render(
      <TabContext value="x">
        <TabList value="x" />
      </TabContext>
    );

    const element = await findByRole('tablist');

    expect(element).toBeTruthy();
  });
});
