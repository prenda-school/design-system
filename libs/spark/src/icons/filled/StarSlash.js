import * as React from 'react';

function SvgStarSlash(props) {
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
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l5.175 5.175-3.754.553a.75.75 0 00-.42 1.273l4.206 4.19-1.408 6.203a.75.75 0 001.074.833L12 17.844l5.657 2.913a.75.75 0 001.074-.833l-.038-.17 2.777 2.776a.75.75 0 101.06-1.06l-4.614-4.614L8.76 7.7 2.53 1.47zm10.143.2a.75.75 0 00-1.346 0l-1.962 4a.75.75 0 001.346.66L12 3.703l2.327 4.744a.75.75 0 00.564.412l4.52.665-2.94 2.93a.75.75 0 101.058 1.063l4-3.986a.75.75 0 00-.42-1.273l-5.61-.826-2.826-5.762z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStarSlash;
