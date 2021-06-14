import * as React from 'react';

function SvgImage(props) {
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
        d="M12 3.75a8.25 8.25 0 00-7.235 12.218A.148.148 0 005 16l1.672-1.672c1.333-1.333 2-2 2.828-2 .828 0 1.495.667 2.828 2l1.5 1.5a.243.243 0 00.344 0c1.333-1.333 2-2 2.828-2 .63 0 1.166.386 1.972 1.156.25.239.663.166.782-.16A8.25 8.25 0 0012 3.75zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM14 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImage;
