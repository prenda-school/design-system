import * as React from 'react';

function SvgFlag2(props) {
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
        d="M5.75 2a.75.75 0 00-1.5 0v20a.75.75 0 001.5 0v-8.15l1.887-.377a6.23 6.23 0 014.43.767 6.233 6.233 0 005.993.23l.447-.223a.893.893 0 00.493-.799V4.696a.43.43 0 00-.622-.385l-.318.159a6.233 6.233 0 01-5.994-.23 6.233 6.233 0 00-4.429-.767L5.75 3.85V2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFlag2;
