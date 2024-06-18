import React from 'react';

export const OutlineOriginCenter = () => (
  <>
    <path
      d="M -100 -100 H 100 V 100 H -100 V -100 Z"
      stroke="black"
      stroke-width="1"
      fill="none"
      stroke-dasharray="5,5"
    />
    <path
      d="M -100 0 H 100"
      stroke="red"
      stroke-width="1"
      stroke-dasharray="5,5"
    />
    <path
      d="M 0 -100 V 100"
      stroke="blue"
      stroke-width="1"
      stroke-dasharray="5,5"
    />
  </>
);
