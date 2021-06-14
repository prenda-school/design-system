import * as React from 'react';

function SvgCloudSnow(props) {
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
        d="M12 2.75a6.25 6.25 0 00-6.249 6.363.75.75 0 01-.563.74 3.252 3.252 0 00-.812 5.963.75.75 0 11-.752 1.298 4.751 4.751 0 01.637-8.536 7.75 7.75 0 0115.168-1.79A5.75 5.75 0 0120.45 16.6a.75.75 0 11-.9-1.2 4.252 4.252 0 00-1.02-7.367.75.75 0 01-.458-.521A6.253 6.253 0 0012 2.75zM10 14a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2zm7-6a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2zm-2-4a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloudSnow;
