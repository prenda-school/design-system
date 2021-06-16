import * as React from 'react';

function SvgUserArrowBottom(props) {
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
        d="M4.25 7a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM6 14.25A4.75 4.75 0 001.25 19 2.75 2.75 0 004 21.75h10A2.75 2.75 0 0016.75 19 4.75 4.75 0 0012 14.25H6zM20.75 7a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserArrowBottom;
