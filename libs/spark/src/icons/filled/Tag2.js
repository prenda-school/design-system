import * as React from 'react';

function SvgTag2(props) {
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
        fillRule="evenodd"
        d="M9.586 17.071L6.064 13.55c-.95-.95-1.424-1.424-1.715-2.007a3.992 3.992 0 01-.213-.516c-.207-.617-.207-1.288-.207-2.63 0-2.314 0-3.47.604-4.272a3 3 0 01.59-.591c.802-.604 1.96-.604 4.272-.604 1.343 0 2.014 0 2.632.207a4 4 0 01.516.213c.582.291 1.057.766 2.006 1.715l3.522 3.522c2 2 3 3 3 4.242 0 1.243-1 2.243-3 4.243-2 2-3 3-4.242 3-1.243 0-2.243-1-4.243-3zm.707-5.778a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTag2;
