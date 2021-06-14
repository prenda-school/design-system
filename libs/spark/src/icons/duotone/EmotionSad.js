import * as React from 'react';

function SvgEmotionSad(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={18}
        height={18}
        x={3}
        y={3}
        fill={props.fillColor || '#F0F1F2'}
        rx={9}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm4.85 4.45a.75.75 0 01-1.2-.9 5.742 5.742 0 014.6-2.3c1.882 0 3.552.905 4.6 2.3a.75.75 0 11-1.2.9 4.243 4.243 0 00-3.4-1.7 4.24 4.24 0 00-3.4 1.7zM10 10a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEmotionSad;