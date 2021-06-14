import * as React from 'react';

function SvgChartPie(props) {
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
        d="M11.25 3a.75.75 0 01.75-.75A9.75 9.75 0 0121.75 12a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V3zM9.282 4.208a.75.75 0 00-.495-1.416A9.75 9.75 0 002.25 12 9.75 9.75 0 0012 21.75a9.754 9.754 0 009.195-6.5.75.75 0 10-1.414-.5A8.254 8.254 0 0112 20.25 8.25 8.25 0 019.282 4.208z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChartPie;
