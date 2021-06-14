import * as React from 'react';

function SvgThermometer(props) {
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
        d="M12 22a5 5 0 003-9V5a3 3 0 00-6 0v8a5 5 0 003 9z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M8.25 5a3.75 3.75 0 117.5 0v7.641a5.75 5.75 0 11-7.5 0V5zm1.183 8.612a4.25 4.25 0 105.133 0A.75.75 0 0114.25 13V5a2.25 2.25 0 00-4.372-.75h.622a.75.75 0 010 1.5h-.75v1.5h.75a.75.75 0 010 1.5h-.75v1.5h.75a.75.75 0 010 1.5h-.75V13a.749.749 0 01-.317.612z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgThermometer;
