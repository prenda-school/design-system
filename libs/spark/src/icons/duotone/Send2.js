import * as React from 'react';

function SvgSend2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path fill={props.fillColor || '#F0F1F2'} d="M20 3L2 9l8 4 4 8 6-18z" />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M20.53 2.47c.201.2.272.498.182.767l-6 18a.75.75 0 01-1.383.098L9.441 13.56 1.665 9.671a.75.75 0 01.098-1.383l18-6a.75.75 0 01.767.182zm-9.618 10.678l2.949 5.897 4.953-14.86L3.954 9.14l5.898 2.948L12.97 8.97a.75.75 0 011.06 1.06l-3.117 3.118z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSend2;
