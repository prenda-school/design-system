import * as React from 'react';

function SvgActivity2(props) {
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
        d="M15 4.25c.3 0 .571.179.69.455l2.804 6.545H22a.75.75 0 010 1.5h-4a.75.75 0 01-.69-.455L15 6.904 9.69 19.295a.75.75 0 01-1.38 0L5.506 12.75H2a.75.75 0 010-1.5h4c.3 0 .571.179.69.455L9 17.096l5.31-12.391A.75.75 0 0115 4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgActivity2;
