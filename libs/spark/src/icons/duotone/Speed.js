import * as React from 'react';

function SvgSpeed(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <g clipPath="url(#Speed_svg__clip0)">
        <circle cx={12} cy={13} r={9} fill={props.fillColor || '#F0F1F2'} />
        <path
          fill="currentcolor"
          fillOpacity={0.72}
          fillRule="evenodd"
          d="M9.25 1A.75.75 0 0110 .25h4a.75.75 0 010 1.5h-4A.75.75 0 019.25 1zm-5.5 12A8.25 8.25 0 1112 21.25H7a.75.75 0 000 1.5h5c5.385 0 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25 2.25 7.615 2.25 13a.75.75 0 001.5 0zm-2.5 3a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75zm2 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zm9.5-9a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0v-4z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Speed_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgSpeed;
