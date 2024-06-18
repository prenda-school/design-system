import React from 'react';

export const OutlineOriginTopLeft = () => (
  <>
    <path
      d="M 0 0 H 200 V 200"
      stroke="black"
      stroke-width="1"
      fill="none"
      stroke-dasharray="5,5"
    />
    <path
      d="M 0 0 V 200 H 200"
      stroke="black"
      stroke-width="1"
      fill="none"
      stroke-dasharray="5,5"
    />
    <path
      d="M 0 0 H 200"
      stroke="red"
      stroke-width="1"
      stroke-dasharray="5,5"
    />
    <path
      d="M 0 0 V 200"
      stroke="blue"
      stroke-width="1"
      stroke-dasharray="5,5"
    />
  </>
);
