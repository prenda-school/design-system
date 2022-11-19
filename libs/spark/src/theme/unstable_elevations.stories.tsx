import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '..';

export default {
  title: '@ps/theme/elevations',
} as Meta;

const _Elevations = styled(function Elevations(props) {
  return (
    <div {...props}>
      <h1 className="title">Elevation</h1>
      <span className="code">theme.unstable_elevations</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[0] }}
          />
          <span className="name">E0</span>
          <span className="code">elevations[0]</span>
        </div>
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[100] }}
          />
          <span className="name">E100</span>
          <span className="code">elevations[100]</span>
        </div>
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[200] }}
          />
          <span className="name">E200</span>
          <span className="code">elevations[200]</span>
        </div>
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[300] }}
          />
          <span className="name">E300</span>
          <span className="code">elevations[300]</span>
        </div>
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[400] }}
          />
          <span className="name">E400</span>
          <span className="code">elevations[400]</span>
        </div>
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_elevations[500] }}
          />
          <span className="name">E500</span>
          <span className="code">elevations[500]</span>
        </div>
      </div>
    </div>
  );
})(({ theme }) => ({
  paddingLeft: 8,
  '& .title': {
    ...theme.unstable_typography.T22,
  },
  '& .content': {
    display: 'flex',
    gap: 40,
  },
  '& .square': {
    backgroundColor: theme.unstable_palette.neutral[0],
    borderRadius: theme.unstable_radius.md,
    height: 80,
    width: 80,
  },
  '& .name': {
    ...theme.unstable_typography.T14,
    display: 'block',
    marginTop: 16,
  },
  '& .code': {
    ...theme.unstable_typography.code,
  },
}));

export const Elevations: Story = () => <_Elevations />;
