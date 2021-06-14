import * as React from 'react';

function SvgMoon(props) {
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
        d="M11.27 2.556a.75.75 0 00-.7-1.202C5.862 2.047 2.25 6.101 2.25 11A9.75 9.75 0 0012 20.75a9.753 9.753 0 009.097-6.235.75.75 0 00-1.019-.949 7.25 7.25 0 01-8.807-11.01z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMoon;
