import * as React from 'react';

function SvgPenTool2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <g
        clipPath="url(#Pen_Tool_-_2_svg__clip0)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          fill={props.fillColor || '#F0F1F2'}
          d="M13.999 18l5-5-1-7-14-3 3 14 7 1zm-2-5a2 2 0 100-4 2 2 0 000 4z"
        />
        <path
          fill="currentcolor"
          fillOpacity={0.72}
          d="M4.156 2.267a.75.75 0 00-.89.89l3 14a.75.75 0 00.627.585l5.517.789a2.164 2.164 0 003.12 3l6.5-6.5a2.164 2.164 0 00-2.48-3.477l-.809-5.66a.75.75 0 00-.585-.627l-14-3zm14.047 10.468l-.873-6.111L6.325 4.266l4.334 4.333a2.75 2.75 0 11-1.06 1.06L5.263 5.326l2.359 11.005 6.11.873 4.47-4.47zM14.53 18.53l-1 1a.664.664 0 00.94.94l6.5-6.5a.664.664 0 00-.94-.94l-.5.5-5 5zM12 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        />
      </g>
      <defs>
        <clipPath id="Pen_Tool_-_2_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPenTool2;
