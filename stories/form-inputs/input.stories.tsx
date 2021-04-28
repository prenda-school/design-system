import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { StoryTitle, TextFormatter, StorySubTitle } from '../story-util';

import { Input } from '../../src';

export default {
  title: 'prenda-spark/Input',
  component: Input,
} as Meta;

let selectVal: string = '';

const hasError = (val: string) => {
  return val.includes('e');
};

const handleOnChange = (val: string) => {
  selectVal = val;
  console.log(`Value extracted from input: ${val}`);
};

export const InputStory = () => (
  <TextFormatter>
    <StoryTitle>Input</StoryTitle>
    <Input
      inputId="inputId1"
      label="Input Label"
      bottomInputLabel="Optional Message"
      onChange={handleOnChange}
      value={selectVal}
    />

    <StoryTitle>Input Large</StoryTitle>
    <Input
      inputId="inputId2"
      label="Input Label"
      multiline={true}
      rows={6}
      bottomInputLabel="Optional Message"
      onChange={handleOnChange}
      value={selectVal}
    />

    <StoryTitle>Input</StoryTitle>
    <StorySubTitle>
      Typing 'e' to trigger the input's error state when it loses focus. Type
      any other characters to trigger input's success validation when it loses
      focus.
    </StorySubTitle>
    <Input
      inputId="inputId1"
      label="Input Label"
      bottomInputLabel="Optional Message"
      hasError={hasError}
      onChange={handleOnChange}
      value={selectVal}
    />

    <StoryTitle>Input Error</StoryTitle>
    <StorySubTitle>
      Any value creates an error when input loses focus.
    </StorySubTitle>
    <Input
      inputId="inputId3"
      label="Input Label"
      bottomInputLabel="Optional Message"
      hasError={() => true}
      onChange={handleOnChange}
      value={selectVal}
    />
  </TextFormatter>
);
