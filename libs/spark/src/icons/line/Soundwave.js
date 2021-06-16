import * as React from 'react';

function SvgSoundwave(props) {
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
        d="M12.75 4a.75.75 0 00-1.5 0v16a.75.75 0 001.5 0V4zM7 7.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V8A.75.75 0 017 7.25zm-5 3a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm15-3a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zM22.75 11a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSoundwave;
