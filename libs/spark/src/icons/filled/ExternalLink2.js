import * as React from 'react';

function SvgExternalLink2(props) {
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
        d="M14.25 3c0 .414.336.75.75.75h4.19L15.5 7.439C14.599 7 13.245 7 11 7H9c-2.828 0-4.243 0-5.121.879C3 8.757 3 10.172 3 13v2c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h2c2.828 0 4.243 0 5.121-.879C17 19.243 17 17.828 17 15v-2c0-2.244 0-3.598-.439-4.5l3.689-3.69V9a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75zm2.311 5.5a2.265 2.265 0 00-1.06-1.061l-6.031 6.03a.75.75 0 101.06 1.061l6.031-6.03z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgExternalLink2;
