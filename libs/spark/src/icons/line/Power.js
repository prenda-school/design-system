import * as React from 'react';

function SvgPower(props) {
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
        d="M12.75 2a.75.75 0 00-1.5 0v10a.75.75 0 001.5 0V2zM6.814 5.583a.75.75 0 10-.943-1.166A9.71 9.71 0 004.733 5.5 9.717 9.717 0 002.25 12c0 5.385 4.365 9.75 9.75 9.75a9.75 9.75 0 006.129-17.333.75.75 0 00-.944 1.166A8.216 8.216 0 0120.25 12 8.25 8.25 0 116.815 5.583z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPower;
