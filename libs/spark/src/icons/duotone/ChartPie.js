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
      <path fill={props.fillColor || '#F0F1F2'} d="M21 12a9 9 0 00-9-9v9h9z" />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75A9.75 9.75 0 0012 2.25zm.75 9V3.784a8.252 8.252 0 017.466 7.466H12.75zM9.282 4.208a.75.75 0 00-.495-1.416A9.75 9.75 0 002.25 12 9.75 9.75 0 0012 21.75a9.754 9.754 0 009.195-6.5.75.75 0 10-1.414-.5A8.254 8.254 0 0112 20.25 8.25 8.25 0 019.282 4.208z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChartPie;
