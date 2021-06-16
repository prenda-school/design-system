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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-6.357-4.614a.75.75 0 00-1.286-.772l-6 10a.75.75 0 101.286.772l6-10zM10 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProcentCircle;
