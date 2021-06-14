import * as React from 'react';

function SvgEye(props) {
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
        d="M12 4.25c-3.692 0-6.373 1.324-8.134 2.949a9.356 9.356 0 00-1.953 2.517c-.424.814-.663 1.622-.663 2.284 0 .662.24 1.47.663 2.284a9.356 9.356 0 001.953 2.517C5.627 18.426 8.308 19.75 12 19.75s6.373-1.324 8.134-2.949a9.356 9.356 0 001.953-2.517c.424-.814.663-1.622.663-2.284 0-.662-.24-1.47-.663-2.284a9.355 9.355 0 00-1.953-2.517C18.373 5.574 15.692 4.25 12 4.25zm0 5.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEye;
