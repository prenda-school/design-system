import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '..';

export default {
  title: '@ps/theme/shadow',
} as Meta;

const _Shadows = styled(function Shadows(props) {
  return (
    <div {...props}>
      <h1 className="title">Shadows</h1>
      <span className="code">theme.unstable_shadows</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.none }}
          >
            <span className="name">none</span>
            <span className="code">shadows.none</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.focus }}
          >
            <span className="name">focus</span>
            <span className="code">shadows.focus</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.error }}
          >
            <span className="name">error</span>
            <span className="code">shadows.error</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.info }}
          >
            <span className="name">info</span>
            <span className="code">shadows.info</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.success }}
          >
            <span className="name">success</span>
            <span className="code">shadows.success</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.warning }}
          >
            <span className="name">warning</span>
            <span className="code">shadows.warning</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.E100 }}
          >
            <span className="name">E100</span>
            <span className="code">shadows.E100</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.E200 }}
          >
            <span className="name">E200</span>
            <span className="code">shadows.E200</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.E300 }}
          >
            <span className="name">E300</span>
            <span className="code">shadows.E300</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.E400 }}
          >
            <span className="name">E400</span>
            <span className="code">shadows.E400</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadows.E500 }}
          >
            <span className="name">E500</span>
            <span className="code">shadows.E500</span>
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
    borderRadius: theme.unstable_radii.sm,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    justifyContent: 'center',
    width: 200,
  },
  '& .name': {
    ...theme.unstable_typography.label,
  },
  '& .code': {
    ...theme.unstable_typography.code,
  },
}));

export const Shadows: Story = () => <_Shadows />;
