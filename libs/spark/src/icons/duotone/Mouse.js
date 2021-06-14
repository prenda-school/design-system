import * as React from 'react';

function SvgMouse(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={14}
        height={18}
        x={5}
        y={3}
        fill={props.fillColor || '#F0F1F2'}
        rx={7}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.25A7.75 7.75 0 004.25 10v4a7.75 7.75 0 0015.5 0v-4A7.75 7.75 0 0012 2.25zM5.75 10a6.25 6.25 0 1112.5 0v4a6.25 6.25 0 11-12.5 0v-4zm7-2a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0V8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMouse;
