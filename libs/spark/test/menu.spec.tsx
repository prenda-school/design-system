import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Menu, SparkThemeProvider } from '../src';

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
