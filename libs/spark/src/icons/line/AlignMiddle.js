import * as React from 'react';

function SvgAlignMiddle(props) {
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
        d="M12.53 9.53l3-3a.75.75 0 00-1.06-1.06l-1.72 1.72V2a.75.75 0 00-1.5 0v5.19L9.53 5.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0zM12 22.75a.75.75 0 00.75-.75v-5.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V22c0 .414.336.75.75.75zm-8-11.5a.75.75 0 000 1.5h16a.75.75 0 000-1.5H4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAlignMiddle;
