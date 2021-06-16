import * as React from 'react';

function SvgProcentCircle(props) {
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
        d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3.643 5.136a.75.75 0 10-1.286-.772l-6 10a.75.75 0 101.286.772l6-10zM8.5 8.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm8.5 5a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm.75-2.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProcentCircle;
