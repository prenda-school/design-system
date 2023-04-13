import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '../..';

export default {
  title: '@ps/theme/shadow',
} as Meta;

const _Shadows = styled(function Shadows(props) {
  return (
    <div {...props}>
      <h1 className="title">Shadows</h1>
      <span className="code">theme.shadows_alpha</span>
      <div className="content">
        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.none }}
          >
            <span className="name">none</span>
            <span className="code">shadows.none</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.focus }}
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
            style={{ boxShadow: theme.shadows_alpha.error }}
          >
            <span className="name">error</span>
            <span className="code">shadows.error</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.info }}
          >
            <span className="name">info</span>
            <span className="code">shadows.info</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.success }}
          >
            <span className="name">success</span>
            <span className="code">shadows.success</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.warning }}
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
            style={{ boxShadow: theme.shadows_alpha.E100 }}
          >
            <span className="name">E100</span>
            <span className="code">shadows.E100</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.E200 }}
          >
            <span className="name">E200</span>
            <span className="code">shadows.E200</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.E300 }}
          >
            <span className="name">E300</span>
            <span className="code">shadows.E300</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.E400 }}
          >
            <span className="name">E400</span>
            <span className="code">shadows.E400</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ boxShadow: theme.shadows_alpha.E500 }}
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
    ...theme.typography_alpha.T22,
    margin: 0,
  },
  '& .content': {
    display: 'flex',
    gap: 40,
    marginTop: 24,
  },
  '& .square': {
    alignItems: 'center',
    backgroundColor: theme.palette_alpha.neutral[0],
    borderRadius: theme.radii_alpha.sm,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    justifyContent: 'center',
    width: 200,
  },
  '& .name': {
    ...theme.typography_alpha.label,
  },
  '& .code': {
    ...theme.typography_alpha.code,
  },
}));

export const Shadows: Story = () => <_Shadows />;
