import * as React from 'react';

function SvgReplay5(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={12} cy={12} r={9} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.25c-3.223 0-5.637 1.346-7.23 2.674-.387.322-.727.645-1.02.948V3.5a.75.75 0 00-1.5 0V8a.75.75 0 001.393.386l.003-.005.02-.033.093-.139c.085-.123.214-.303.39-.522a11.27 11.27 0 011.581-1.61C7.137 4.903 9.223 3.75 12 3.75A8.231 8.231 0 0120.25 12a8.25 8.25 0 01-16.5 0 .75.75 0 00-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75A9.731 9.731 0 0012 2.25zm-2 6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3.25v1.5H10a.75.75 0 000 1.5h4a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-3.25v-1.5H14a.75.75 0 000-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgReplay5;
