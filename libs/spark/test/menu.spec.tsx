import { render } from '@testing-library/react';
import { Menu } from '../src';
import { SparkThemeProvider } from '../src/theme/Provider';
import 'jest-styled-components';

describe('Menu', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <Menu
          menuId="test ID"
          menuOptions={[{ displayName: 'name one', value: 'value one' }]}
          value="value one"
          onChange={() => null}
        />
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
