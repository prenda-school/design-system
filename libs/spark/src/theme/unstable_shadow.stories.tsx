import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '..';

export default {
  title: '@ps/theme/shadow',
} as Meta;

const _Shadow = styled(function Shadow(props) {
  return (
    <div {...props}>
      <h1 className="title">Shadow</h1>
      <span className="code">theme.unstable_shadow</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.E100 }}
          >
            <span className="name">E100</span>
            <span className="code">shadow.E100</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.E200 }}
          >
            <span className="name">E200</span>
            <span className="code">shadow.E200</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.E300 }}
          >
            <span className="name">E300</span>
            <span className="code">shadow.E300</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.E400 }}
          >
            <span className="name">E400</span>
            <span className="code">shadow.E400</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.E500 }}
          >
            <span className="name">E500</span>
            <span className="code">shadow.E500</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.none }}
          >
            <span className="name">none</span>
            <span className="code">shadow.none</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.focus }}
          >
            <span className="name">focus</span>
            <span className="code">shadow.focus</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.error }}
          >
            <span className="name">error</span>
            <span className="code">shadow.error</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.info }}
          >
            <span className="name">info</span>
            <span className="code">shadow.info</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.success }}
          >
            <span className="name">success</span>
            <span className="code">shadow.success</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.unstable_shadow.warning }}
          >
            <span className="name">warning</span>
            <span className="code">shadow.warning</span>
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
    borderRadius: theme.unstable_radius.sm,
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

export const Elevations: Story = () => <_Shadow />;
