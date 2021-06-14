import * as React from 'react';

function SvgGlobe2(props) {
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
        d="M17.895 2.106a.75.75 0 00-1.061 1.06A8.25 8.25 0 015.167 14.833a.75.75 0 00-1.061 1.061 9.721 9.721 0 006.144 2.827v1.529H8a.75.75 0 000 1.5h6a.75.75 0 100-1.5h-2.25v-1.53a9.75 9.75 0 009-9.721 9.722 9.722 0 00-2.855-6.894zM4.25 9a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlobe2;
