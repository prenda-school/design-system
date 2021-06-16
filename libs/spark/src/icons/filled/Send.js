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
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.458 3.482a.75.75 0 01.847-.167l18 8a.75.75 0 010 1.37l-18 8a.75.75 0 01-.976-1.02l3.458-6.915H12a.75.75 0 000-1.5H5.786L2.33 4.335a.75.75 0 01.129-.853z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSend;
