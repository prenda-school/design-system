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
      <g clipPath="url(#Pen_Tool_-_2_svg__clip0)">
        <path
          fill="currentcolor"
          fillOpacity={0.72}
          fillRule="evenodd"
          d="M4.155 2.267a.75.75 0 00-.89.89l3 14a.75.75 0 00.627.585l5.674.811a2 2 0 00.282 2.294c.032.035.071.075.15.154l.154.15a2 2 0 002.692 0c.035-.032.074-.071.153-.15l5.502-5.502c.079-.079.119-.119.15-.154a2 2 0 000-2.69c-.031-.036-.07-.075-.15-.155-.08-.08-.12-.119-.154-.15a1.999 1.999 0 00-1.751-.48l-.854-5.976a.75.75 0 00-.585-.627l-14-3zm1.108 3.059l2.358 11.005 6.111.873 4.47-4.47-.873-6.11L6.324 4.266l4.704 4.704a.75.75 0 01.147.207 2 2 0 11-1 1 .75.75 0 01-.207-.147L5.263 5.326z"
          clipRule="evenodd"
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
