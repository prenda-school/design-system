import { render } from 'compat-testing-library-react-17';
import Unstable_Tabs from '../Unstable_Tabs';
import Unstable_TabsList from './Unstable_TabsList';

describe('Unstable_TabsList', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_Tabs value="0">
        <Unstable_TabsList />
      </Unstable_Tabs>
    );

    expect(baseElement).toBeTruthy();
  });
});
