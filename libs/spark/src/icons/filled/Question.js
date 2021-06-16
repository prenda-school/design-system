import * as React from 'react';

function SvgQuestion(props) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9 4a1 1 0 11-2 0 1 1 0 012 0zm-2.25-6a1.25 1.25 0 112.5 0v.121c0 .364-.145.713-.402.97L11.47 12.47a.75.75 0 101.06 1.06l1.379-1.378a2.871 2.871 0 00.841-2.03V10a2.75 2.75 0 10-5.5 0v.5a.75.75 0 001.5 0V10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgQuestion;
