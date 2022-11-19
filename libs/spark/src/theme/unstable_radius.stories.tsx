import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '..';

export default {
  title: '@ps/theme/radius',
} as Meta;

const _Radius = styled(function Elevations(props) {
  return (
    <div {...props}>
      <h1 className="title">Radius</h1>
      <span className="code">theme.unstable_radius</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.zero }}
          >
            <span className="name">zero</span>
            <span className="code">radius.zero (0px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.xs }}
          >
            <span className="name">xs</span>
            <span className="code">radius.xs (2px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.sm }}
          >
            <span className="name">sm</span>
            <span className="code">radius.sm (4px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.md }}
          >
            <span className="name">md</span>
            <span className="code">radius.md (8px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.lg }}
          >
            <span className="name">lg</span>
            <span className="code">radius.lg (16px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.xl }}
          >
            <span className="name">xl</span>
            <span className="code">radius.xl (32px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radius.full }}
          >
            <span className="name">full</span>
            <span className="code">radius.full</span>
            <span className="code">(9999px)</span>
          </div>
        </div>
      </div>
    </div>
  );
})(({ theme }) => ({
  paddingLeft: 8,
  '& .title': {
    ...theme.unstable_typography.T22,
    margin: 0,
  },
  '& .content': {
    display: 'flex',
    gap: 40,
    marginTop: 24,
  },
  '& .square': {
    alignItems: 'center',
    backgroundColor: theme.unstable_palette.neutral[0],
    borderColor: theme.unstable_palette.neutral[90],
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 160,
    justifyContent: 'center',
    width: 160,
  },
  '& .name': {
    ...theme.unstable_typography.label,
  },
  '& .code': {
    ...theme.unstable_typography.code,
  },
}));

export const Radius: Story = () => <_Radius />;
