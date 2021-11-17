import * as React from 'react';
import clsx from 'clsx';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  AlertCircle,
  AlertCircleFilled,
  AlertCircleDuotone,
} from '@prenda/spark-icons';
import { SvgIcon, styled, theme } from '..';
import { capitalize } from '../utils';

export const SbSvgIcon = SvgIcon;

export default {
  title: '@ps/SvgIcon',
  component: SbSvgIcon,
  excludeStories: ['SbSvgIcon'],
  args: {
    // default values aren't picked up by auto-docs
    color: 'inherit',
    fontSize: 'inherit',
  },
} as Meta;

const Container = styled('div')({
  backgroundColor: theme.palette.common.white,
  '&.bgColorOnDark': {
    backgroundColor: theme.palette.background.blue,
  },
});

const Template = (args) => (
  <Container
    className={clsx({
      [`bgColor${capitalize(args.color)}`]: args.color === 'light',
    })}
  >
    <SvgIcon {...args}>
      <path
        fill="#fff"
        stroke="#4C6878"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.542 3H9.525v4.105c0 .875-.2 1.739-.584 2.525L4.76 18.18a1.437 1.437 0 0 0 1.292 2.069h11.374a1.437 1.437 0 0 0 1.27-2.112L14.213 9.7a5.75 5.75 0 0 1-.672-2.698V3z"
        key="0"
      />
      <path
        fill="#F0F1F2"
        stroke="#4C6878"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.687 11.086c-1.779.627-3.713 2.673-5.379 3.207-.864.278-2.005.63-2.35 1.469l-1.031 2.503a1.437 1.437 0 0 0 1.329 1.985h11.208c1.1 0 1.792-1.184 1.253-2.142l-2.03-3.608-1.71-2.85c-.274-.458-.787-.741-1.29-.564z"
        key="1"
      />
    </SvgIcon>
  </Container>
);

const ColorContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '160px repeat(3, 48px)',
  gap: '8px',
  gridTemplateRows: 'repeat(19, 32px)',
});

const IconBox = styled('div')({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.common.white,
  fontSize: '1.5rem',
  '&.dark': {
    backgroundColor: theme.palette.background.blue,
  },
});

export const Configurable: Story = Template.bind({});

const ColorTemplate = () => (
  <ColorContainer>
    <span>Color, Contrast / Type</span>
    <span>Line</span>
    <span>Filled</span>
    <span>Duotone</span>
    <span>inherit</span>
    <IconBox>
      <AlertCircle />
    </IconBox>
    <IconBox>
      <AlertCircleFilled />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone />
    </IconBox>
    <span>inherit, low</span>
    <IconBox>
      <AlertCircle lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone lowContrast />
    </IconBox>
    <span>dark</span>
    <IconBox>
      <AlertCircle color="dark" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="dark" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="dark" />
    </IconBox>
    <span>dark, low</span>
    <IconBox>
      <AlertCircle color="dark" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="dark" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="dark" lowContrast />
    </IconBox>
    <span>light</span>
    <IconBox className="dark">
      <AlertCircle color="light" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="light" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="light" />
    </IconBox>
    <span>light, low</span>
    <IconBox className="dark">
      <AlertCircle color="light" lowContrast />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="light" lowContrast />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="light" lowContrast />
    </IconBox>
    <span>disabled</span>
    <IconBox>
      <AlertCircle color="disabled" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="disabled" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="disabled" />
    </IconBox>
    <span>disabled, low</span>
    <IconBox>
      <AlertCircle color="disabled" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="disabled" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="disabled" lowContrast />
    </IconBox>
    <span>error</span>
    <IconBox>
      <AlertCircle color="error" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="error" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="error" />
    </IconBox>
    <span>error, low</span>
    <IconBox>
      <AlertCircle color="error" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="error" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="error" lowContrast />
    </IconBox>
    <span>success</span>
    <IconBox>
      <AlertCircle color="success" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="success" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="success" />
    </IconBox>
    <span>success, low</span>
    <IconBox>
      <AlertCircle color="success" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="success" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="success" lowContrast />
    </IconBox>
    <span>warning</span>
    <IconBox>
      <AlertCircle color="warning" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="warning" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="warning" />
    </IconBox>
    <span>warning, low</span>
    <IconBox>
      <AlertCircle color="warning" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="warning" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="warning" lowContrast />
    </IconBox>
    <span>info</span>
    <IconBox>
      <AlertCircle color="info" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="info" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="info" />
    </IconBox>
    <span>info, low</span>
    <IconBox>
      <AlertCircle color="info" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="info" lowContrast />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="info" lowContrast />
    </IconBox>
    <span>white</span>
    <IconBox className="dark">
      <AlertCircle color="white" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="white" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="white" />
    </IconBox>
    <span>white, low</span>
    <IconBox className="dark">
      <AlertCircle color="white" lowContrast />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="white" lowContrast />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="white" lowContrast />
    </IconBox>
  </ColorContainer>
);

export const ColorAndContrast: Story = ColorTemplate.bind({});
ColorAndContrast.storyName = 'color, lowContrast';

const FontSizeContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '160px 48px',
  gap: '8px',
  gridTemplateRows: 'auto',
});

const FontSizeTemplate = (args) => (
  <FontSizeContainer>
    <span>inherit</span>
    <AlertCircle {...args} />
    <span>small</span>
    <AlertCircle {...args} fontSize="small" />
    <span>medium</span>
    <AlertCircle {...args} fontSize="medium" />
    <span>large</span>
    <AlertCircle {...args} fontSize="large" />
  </FontSizeContainer>
);

export const FontSize: Story = FontSizeTemplate.bind({});
FontSize.storyName = 'fontSize';
