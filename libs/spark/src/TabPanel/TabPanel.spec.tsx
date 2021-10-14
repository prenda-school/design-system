import { render } from '@testing-library/react';
import TabPanel from './TabPanel';
import TabContext from '../TabContext';

describe('TabPanel', () => {
  it('renders', async () => {
    const { findByText } = render(
      <TabContext value="x">
        <TabPanel value="x">Label</TabPanel>
      </TabContext>
    );

    const element = await findByText('Label');

    expect(element).toBeTruthy();
  });
});
