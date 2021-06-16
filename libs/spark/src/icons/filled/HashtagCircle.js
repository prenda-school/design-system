import * as React from 'react';

function SvgHashtagCircle(props) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM11.093 7.256a.75.75 0 01.651.837l-.207 1.657h1.488l.23-1.843a.75.75 0 111.49.186l-.208 1.657H16a.75.75 0 010 1.5h-1.65l-.188 1.5H15.5a.75.75 0 010 1.5h-1.525l-.23 1.843a.75.75 0 01-1.49-.186l.208-1.657h-1.488l-.23 1.843a.75.75 0 01-1.49-.186l.208-1.657H8a.75.75 0 010-1.5h1.65l.188-1.5H8.5a.75.75 0 010-1.5h1.525l.23-1.843a.75.75 0 01.838-.651zm.07 5.494h1.487l.188-1.5H11.35l-.188 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgHashtagCircle;
