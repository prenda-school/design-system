import * as React from 'react';

function SvgUsers(props) {
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
        d="M8 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm5.25.75a.75.75 0 01.75-.75 4.75 4.75 0 110 9.5.75.75 0 010-1.5 3.25 3.25 0 000-6.5.75.75 0 01-.75-.75zM6 14.25A4.75 4.75 0 001.25 19 2.75 2.75 0 004 21.75h8A2.75 2.75 0 0014.75 19 4.75 4.75 0 0010 14.25H6zm10 0a.75.75 0 000 1.5h2A3.25 3.25 0 0121.25 19c0 .69-.56 1.25-1.25 1.25h-4a.75.75 0 000 1.5h4A2.75 2.75 0 0022.75 19 4.75 4.75 0 0018 14.25h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUsers;
