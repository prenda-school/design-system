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
        d="M18.895 2.106a.75.75 0 00-1.06 1.06A8.25 8.25 0 016.167 14.833a.75.75 0 00-1.062 1.061 9.721 9.721 0 006.145 2.827v1.529H9a.75.75 0 000 1.5h6a.75.75 0 100-1.5h-2.25v-1.53c5.034-.382 9-4.589 9-9.721a9.722 9.722 0 00-2.856-6.894zM6.751 9a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zM12 2.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlobe2;
