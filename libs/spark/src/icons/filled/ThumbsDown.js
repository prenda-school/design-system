import * as React from 'react';

function SvgThumbsDown(props) {
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
        d="M20.25 14a.75.75 0 001.5 0V4a.75.75 0 00-1.5 0v10zM5.196 6.948l-.818 3c-.633 2.32-.95 3.48-.349 4.266.6.786 1.803.786 4.208.786H12l-2.8 4.9a1.404 1.404 0 002.211 1.689l5.417-5.417c.579-.579.867-.867 1.02-1.235.152-.368.152-.776.152-1.594V8c0-1.886 0-2.828-.586-3.414C16.828 4 15.886 4 14 4H9.055c-1.47 0-2.204 0-2.741.41-.538.411-.731 1.12-1.118 2.538z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgThumbsDown;
