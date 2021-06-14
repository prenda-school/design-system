import * as React from 'react';

function SvgUserCircle(props) {
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
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11.333 1A2.667 2.667 0 008 15.667C8 16.403 8.597 17 9.333 17h5.334c.736 0 1.333-.597 1.333-1.333A2.667 2.667 0 0013.333 13h-2.666zM12 10a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm9.417 1.75a1.917 1.917 0 00-1.917 1.917c0 .322.261.583.583.583h5.334a.583.583 0 00.583-.583 1.917 1.917 0 00-1.917-1.917h-2.666zM7.25 15.667a3.417 3.417 0 013.417-3.417h2.666a3.417 3.417 0 013.417 3.417c0 1.15-.933 2.083-2.083 2.083H9.333a2.083 2.083 0 01-2.083-2.083zM10.75 8a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 5.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserCircle;
