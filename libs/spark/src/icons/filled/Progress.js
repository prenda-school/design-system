import * as React from 'react';

function SvgProgress(props) {
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
        d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.177 3.875C12 6.275 12 6.517 12 7v4c0 .471 0 .707-.146.854C11.707 12 11.47 12 11 12H7c-.483 0-.725 0-.875.177-.15.177-.114.39-.042.818a6 6 0 106.912-6.912c-.427-.072-.64-.108-.818.042z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgProgress;
