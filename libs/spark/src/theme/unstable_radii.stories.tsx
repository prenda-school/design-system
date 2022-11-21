import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '..';

export default {
  title: '@ps/theme/radius',
} as Meta;

const _Radii = styled(function Radii(props) {
  return (
    <div {...props}>
      <h1 className="title">Radii</h1>
      <span className="code">theme.unstable_radii</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.zero }}
          >
            <span className="name">zero</span>
            <span className="code">radii.zero (0px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.xs }}
          >
            <span className="name">xs</span>
            <span className="code">radii.xs (2px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.sm }}
          >
            <span className="name">sm</span>
            <span className="code">radii.sm (4px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.md }}
          >
            <span className="name">md</span>
            <span className="code">radii.md (8px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.lg }}
          >
            <span className="name">lg</span>
            <span className="code">radii.lg (16px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.xl }}
          >
            <span className="name">xl</span>
            <span className="code">radii.xl (32px)</span>
          </div>
        </div>
        <div>
          <div
            className="square"
            style={{ borderRadius: theme.unstable_radii.full }}
          >
            <span className="name">full</span>
            <span className="code">radii.full</span>
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
    border: theme.unstable_borders.standard,
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

export const Radii: Story = () => <_Radii />;
