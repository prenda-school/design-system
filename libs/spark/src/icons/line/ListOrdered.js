import * as React from 'react';

function SvgListOrdered(props) {
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
        d="M3.853 4.339A.75.75 0 014.25 5v4.25H5a.75.75 0 010 1.5H2a.75.75 0 010-1.5h.75V6.401l-.334.223a.75.75 0 01-.832-1.248l1.5-1a.75.75 0 01.77-.037zM8 5.25a.75.75 0 100 1.5h12a.75.75 0 000-1.5H8zM7.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zM2 13.25a.75.75 0 000 1.5h2.25v1H2a.75.75 0 00-.75.75V19c0 .414.336.75.75.75h3a.75.75 0 000-1.5H2.75v-1H5a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgListOrdered;
