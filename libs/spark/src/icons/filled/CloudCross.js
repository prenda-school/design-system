import * as React from 'react';

function SvgCloudCross(props) {
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
        d="M12 3.25a7.75 7.75 0 00-7.739 7.329A4.751 4.751 0 006 19.75h11a5.75 5.75 0 002.43-10.963A7.753 7.753 0 0012 3.25zm-2.53 7.22a.75.75 0 011.06 0L12 11.94l1.47-1.47a.75.75 0 111.06 1.06L13.06 13l1.47 1.47a.75.75 0 11-1.06 1.06L12 14.06l-1.47 1.47a.75.75 0 11-1.06-1.06L10.94 13l-1.47-1.47a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloudCross;
