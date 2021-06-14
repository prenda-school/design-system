import * as React from 'react';

function SvgUserAlert(props) {
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
        d="M10 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm10 2a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0V5a.75.75 0 01.75-.75zm-13 10A4.75 4.75 0 002.25 19 2.75 2.75 0 005 21.75h10A2.75 2.75 0 0017.75 19 4.75 4.75 0 0013 14.25H7zM20 14a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserAlert;
