import * as React from 'react';

function SvgEuroCircle(props) {
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
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.75 12c0-.084.003-.168.01-.25H12a.75.75 0 100-1.5H9.26a3.247 3.247 0 015.178-.4.75.75 0 001.124-.992 4.752 4.752 0 00-7.98 1.392H7a.75.75 0 000 1.5h.256a4.83 4.83 0 000 .5H7a.75.75 0 000 1.5h.583a4.752 4.752 0 007.98 1.392.75.75 0 10-1.125-.992 3.247 3.247 0 01-5.177-.4H11a.75.75 0 100-1.5H8.76a3.294 3.294 0 01-.01-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEuroCircle;
