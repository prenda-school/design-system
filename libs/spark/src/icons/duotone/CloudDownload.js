import * as React from 'react';

function SvgCloudDownload(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        d="M12 2a7 7 0 00-6.999 7.126A4.002 4.002 0 006 17h11a5 5 0 001.8-9.666A7.003 7.003 0 0012 2z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M5.75 9a6.25 6.25 0 0112.322-1.488.75.75 0 00.458.522 4.252 4.252 0 011.02 7.367.75.75 0 00.9 1.199 5.75 5.75 0 00-1.021-9.813A7.75 7.75 0 004.261 8.578a4.751 4.751 0 00-.637 8.536.75.75 0 10.752-1.298 3.252 3.252 0 01.812-5.964.75.75 0 00.563-.74A6.38 6.38 0 015.75 9zm7 3a.75.75 0 00-1.5 0v7.19l-2.22-2.22a.75.75 0 00-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l3.5-3.5a.75.75 0 10-1.06-1.06l-2.22 2.22V12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloudDownload;