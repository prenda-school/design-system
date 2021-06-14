import * as React from 'react';

function SvgCloud(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M5.75 11a6.25 6.25 0 0112.322-1.488.75.75 0 00.458.522A4.252 4.252 0 0117 18.25H6a3.25 3.25 0 01-.812-6.398.75.75 0 00.563-.74L5.75 11zM12 3.25a7.75 7.75 0 00-7.739 7.329A4.751 4.751 0 006 19.75h11a5.75 5.75 0 002.43-10.963A7.753 7.753 0 0012 3.25zm-.47 12.28l4-4a.75.75 0 10-1.06-1.06L11 13.94l-.97-.97a.75.75 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloud;