import * as React from 'react';

function SvgClockSlash(props) {
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
        d="M18.47 2.53a.75.75 0 011.06-1.06l3 3a.75.75 0 01-1.06 1.06l-3-3zM3 2.25a.75.75 0 01.53.22l2.636 2.636 12.728 12.728 2.636 2.636a.75.75 0 11-1.06 1.06l-2.126-2.126A9.714 9.714 0 0112 21.75 9.75 9.75 0 012.25 12c0-2.422.884-4.639 2.346-6.344L3 4.061l-.97.97A.75.75 0 01.97 3.97l1.5-1.5A.75.75 0 013 2.25zm9 1.5a8.213 8.213 0 00-3.666.857.75.75 0 01-.668-1.343A9.713 9.713 0 0112 2.25 9.75 9.75 0 0121.75 12a9.713 9.713 0 01-1.014 4.334.75.75 0 11-1.343-.668A8.25 8.25 0 0012 3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClockSlash;
