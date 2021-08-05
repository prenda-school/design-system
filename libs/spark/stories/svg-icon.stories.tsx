import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { styled } from '@material-ui/core';
import { SvgIcon, theme } from '../src';
import {
  AlertCircle,
  AlertCircleFilled,
  AlertCircleDuotone,
} from '@prenda/spark-icons';
import clsx from 'clsx';
import { capitalize } from '../src/utils';

export default {
  title: 'prenda-spark/SvgIcon',
  component: SvgIcon,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'inherit',
        'onLight',
        'onDark',
        'disabled',
        'error',
        'success',
        'warning',
        'info',
        'white',
      ],
    },
    contrast: {
      control: 'select',
      options: ['high', 'low'],
    },
    fontSize: {
      control: 'select',
      options: ['large', 'default', 'small', 'inherit'],
    },
  },
  args: {
    color: 'inherit',
    contrast: 'high',
    fontSize: 'default',
  },
} as Meta;

const Container = styled('div')({
  backgroundColor: theme.palette.common.white,
  '&.bgColorOnDark': {
    backgroundColor: theme.palette.background.blue,
  },
});

const Template: Story = (args) => (
  <Container
    className={clsx({
      [`bgColor${capitalize(args.color)}`]: args.color === 'onDark',
    })}
  >
    <AlertCircle {...args} />
    <AlertCircleFilled {...args} />
    <AlertCircleDuotone {...args} />
  </Container>
);

const ManyContainer = styled('div')({
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
  '&.dark': {
    backgroundColor: theme.palette.background.blue,
  },
});

export const Configurable = Template.bind({});

const ManyTemplate: Story = (args) => (
  <ManyContainer>
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
      <AlertCircle contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone contrast="low" />
    </IconBox>
    <span>onLight</span>
    <IconBox>
      <AlertCircle color="onLight" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="onLight" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="onLight" />
    </IconBox>
    <span>onLight, low</span>
    <IconBox>
      <AlertCircle color="onLight" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="onLight" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="onLight" contrast="low" />
    </IconBox>
    <span>onDark</span>
    <IconBox className="dark">
      <AlertCircle color="onDark" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="onDark" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="onDark" />
    </IconBox>
    <span>onDark, low</span>
    <IconBox className="dark">
      <AlertCircle color="onDark" contrast="low" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="onDark" contrast="low" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="onDark" contrast="low" />
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
      <AlertCircle color="disabled" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="disabled" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="disabled" contrast="low" />
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
      <AlertCircle color="error" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="error" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="error" contrast="low" />
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
      <AlertCircle color="success" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="success" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="success" contrast="low" />
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
      <AlertCircle color="warning" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="warning" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="warning" contrast="low" />
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
      <AlertCircle color="info" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleFilled color="info" contrast="low" />
    </IconBox>
    <IconBox>
      <AlertCircleDuotone color="info" contrast="low" />
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
      <AlertCircle color="white" contrast="low" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleFilled color="white" contrast="low" />
    </IconBox>
    <IconBox className="dark">
      <AlertCircleDuotone color="white" contrast="low" />
    </IconBox>
  </ManyContainer>
);

export const ColorAndContrast = ManyTemplate.bind({});
