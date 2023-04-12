import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { styled, theme } from '../..';

export default {
  title: '@ps/theme/borders',
} as Meta;

const _Borders = styled(function Borders(props) {
  return (
    <div {...props}>
      <h1 className="title">Borders</h1>
      <span className="code">theme.borders_alpha</span>
      <div className="content">
        <div>
          <div className="square" style={{ border: theme.borders_alpha.none }}>
            <span className="name">none</span>
            <span className="code">borders.none</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.transparent }}
          >
            <span className="name">transparent</span>
            <span className="code">borders.transparent</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.subtle }}
          >
            <span className="name">subtle</span>
            <span className="code">borders.subtle</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.standard }}
          >
            <span className="name">standard</span>
            <span className="code">borders.standard</span>
          </div>
        </div>

        <div>
          <div className="square" style={{ border: theme.borders_alpha.bold }}>
            <span className="name">bold</span>
            <span className="code">borders.bold</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.selected }}
          >
            <span className="name">selected</span>
            <span className="code">borders.selected</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.active }}
          >
            <span className="name">active</span>
            <span className="code">borders.active</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.expanded }}
          >
            <span className="name">expanded</span>
            <span className="code">borders.expanded</span>
          </div>
        </div>

        <div>
          <div className="square" style={{ border: theme.borders_alpha.hover }}>
            <span className="name">hover</span>
            <span className="code">borders.hover</span>
          </div>
        </div>

        <div>
          <div className="square" style={{ border: theme.borders_alpha.focus }}>
            <span className="name">focus</span>
            <span className="code">borders.focus</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <div className="square" style={{ border: theme.borders_alpha.error }}>
            <span className="name">error</span>
            <span className="code">borders.error</span>
          </div>
        </div>

        <div>
          <div className="square" style={{ border: theme.borders_alpha.info }}>
            <span className="name">info</span>
            <span className="code">borders.info</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.success }}
          >
            <span className="name">success</span>
            <span className="code">borders.success</span>
          </div>
        </div>

        <div>
          <div
            className="square"
            style={{ border: theme.borders_alpha.warning }}
          >
            <span className="name">warning</span>
            <span className="code">borders.warning</span>
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

export const Borders: Story = () => <_Borders />;
