import * as React from 'react';

function SvgBrush(props) {
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
        d="M4.25 3.99a2.74 2.74 0 012.74-2.74h10.02a2.74 2.74 0 012.74 2.74v6.93a4.423 4.423 0 01-2.147 3.793l-1.642.985a1.948 1.948 0 00-.92 1.99l.206 1.23a3.291 3.291 0 11-6.494 0l.205-1.23a1.948 1.948 0 00-.919-1.99l-1.642-.985A4.423 4.423 0 014.25 10.92V3.99zm14 5.26H5.75V3.99c0-.685.555-1.24 1.24-1.24h1.26V6a.75.75 0 001.5 0V2.75h2.5V4a.75.75 0 001.5 0V2.75h3.26c.685 0 1.24.555 1.24 1.24v5.26z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBrush;
