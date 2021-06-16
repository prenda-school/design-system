import * as React from 'react';

function SvgStopCircle(props) {
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM9 11c0-.943 0-1.414.293-1.707C9.586 9 10.057 9 11 9h2c.943 0 1.414 0 1.707.293C15 9.586 15 10.057 15 11v2c0 .943 0 1.414-.293 1.707C14.414 15 13.943 15 13 15h-2c-.943 0-1.414 0-1.707-.293C9 14.414 9 13.943 9 13v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStopCircle;
