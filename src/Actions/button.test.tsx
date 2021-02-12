import { Button } from './button'
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();

describe('Button', () => {
  it('is truthy', () => {
    expect(Button).toBeTruthy()
  })
})
