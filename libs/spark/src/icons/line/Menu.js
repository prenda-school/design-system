import * as React from 'react';

function SvgMenu(props) {
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
        d="M3.25 7A.75.75 0 014 6.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 7zm0 5a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM4 16.25a.75.75 0 000 1.5h16a.75.75 0 000-1.5H4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMenu;
