import * as React from 'react';

function SvgCompass(props) {
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
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm3.5-12.5l-5 2-2 5 5-2 2-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.197 6.529a.75.75 0 00-.975-.975l-5 2a.75.75 0 00-.418.418l-2 5a.75.75 0 00.975.974l5-2a.75.75 0 00.418-.418l2-5zm-6.35 5.375l1.23-3.077 3.077-1.23-1.23 3.076-3.078 1.23z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCompass;
