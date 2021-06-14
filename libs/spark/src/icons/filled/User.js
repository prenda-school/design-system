import * as React from 'react';

function SvgUser(props) {
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
        d="M12 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm-3 12A4.75 4.75 0 004.25 19 2.75 2.75 0 007 21.75h10A2.75 2.75 0 0019.75 19 4.75 4.75 0 0015 14.25H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUser;
