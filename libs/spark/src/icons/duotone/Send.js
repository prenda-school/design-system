import * as React from 'react';

function SvgSend(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path fill={props.fillColor || '#F0F1F2'} d="M21 12L3 4l4 8-4 8 18-8z" />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.458 3.482a.75.75 0 01.847-.167l18 8a.75.75 0 010 1.37l-18 8a.75.75 0 01-.976-1.02L6.161 12 2.33 4.335a.75.75 0 01.129-.853zm5.006 9.268l-2.858 5.716L19.153 12 4.606 5.534l2.858 5.716H12a.75.75 0 010 1.5H7.464z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSend;
