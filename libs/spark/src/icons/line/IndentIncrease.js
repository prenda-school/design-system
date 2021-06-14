import * as React from 'react';

function SvgIndentIncrease(props) {
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
        d="M3.25 4A.75.75 0 014 3.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 4zm6 5a.75.75 0 01.75-.75h10a.75.75 0 010 1.5H10A.75.75 0 019.25 9zm-6 10a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM10 13.25a.75.75 0 000 1.5h10a.75.75 0 000-1.5H10zM4.53 8.47a.75.75 0 00-1.06 1.06l1.97 1.97-1.97 1.97a.75.75 0 101.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgIndentIncrease;