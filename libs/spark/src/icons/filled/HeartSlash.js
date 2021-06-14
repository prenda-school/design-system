import * as React from 'react';

function SvgHeartSlash(props) {
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
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l2.85 2.85c-.182.14-.357.292-.523.458a5.223 5.223 0 000 7.42l7.007 6.999a1.697 1.697 0 002.392 0l3.002-2.998 4.272 4.271a.75.75 0 001.06-1.06l-4.801-4.802L6.04 4.98 2.53 1.47zM13.543 6.9c1.534-1.533 4.066-1.533 5.6 0a3.723 3.723 0 010 5.298l-1.274 1.271a.75.75 0 001.06 1.062l1.274-1.272a5.223 5.223 0 000-7.421c-2.12-2.117-5.6-2.117-7.72 0L12 6.32l-.482-.482A5.4 5.4 0 009.21 4.472a.75.75 0 10-.422 1.44 3.934 3.934 0 011.669.987L11.47 7.91a.75.75 0 001.06 0l1.013-1.01z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgHeartSlash;
