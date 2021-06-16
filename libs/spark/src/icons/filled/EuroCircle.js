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
        fill="currentcolor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8.75 12c0-.084.003-.167.01-.25H12a.75.75 0 000-1.5H9.26a3.247 3.247 0 015.178-.4.75.75 0 001.124-.992 4.752 4.752 0 00-7.98 1.392H7a.75.75 0 100 1.5h.256a4.83 4.83 0 000 .5H7a.75.75 0 100 1.5h.583a4.752 4.752 0 007.98 1.392.75.75 0 00-1.125-.992 3.248 3.248 0 01-5.177-.4H11a.75.75 0 000-1.5H8.76a3.294 3.294 0 01-.01-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEuroCircle;
