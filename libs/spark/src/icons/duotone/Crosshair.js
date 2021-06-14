import * as React from 'react';

function SvgCrosshair(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        fillRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-7a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12.75 3.784V6a.75.75 0 01-1.5 0V3.784a8.252 8.252 0 00-7.466 7.466H6a.75.75 0 010 1.5H3.784a8.252 8.252 0 007.466 7.466V18a.75.75 0 011.5 0v2.216a8.252 8.252 0 007.466-7.466H18a.75.75 0 010-1.5h2.216a8.252 8.252 0 00-7.466-7.466zM12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCrosshair;
