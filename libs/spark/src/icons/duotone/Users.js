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
        fill={props.fillColor || '#F0F1F2'}
        fillRule="evenodd"
        d="M8 11a4 4 0 100-8 4 4 0 000 8zm-7 8a4 4 0 014-4h6a4 4 0 014 4 2 2 0 01-2 2H3a2 2 0 01-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M4.75 7a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM8 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm6 0a.75.75 0 000 1.5 3.25 3.25 0 010 6.5.75.75 0 000 1.5 4.75 4.75 0 100-9.5zm-8 13.5A3.25 3.25 0 002.75 19c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25A3.25 3.25 0 0010 15.75H6zM1.25 19A4.75 4.75 0 016 14.25h4A4.75 4.75 0 0114.75 19 2.75 2.75 0 0112 21.75H4A2.75 2.75 0 011.25 19zM16 14.25a.75.75 0 000 1.5h2A3.25 3.25 0 0121.25 19c0 .69-.56 1.25-1.25 1.25h-4a.75.75 0 000 1.5h4A2.75 2.75 0 0022.75 19 4.75 4.75 0 0018 14.25h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUsers;
