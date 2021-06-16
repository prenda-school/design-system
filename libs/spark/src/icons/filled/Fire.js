import * as React from 'react';

function SvgFire(props) {
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
        d="M4 13.818C4 18.364 7.582 22 12 22s8-3.636 8-8.182c0-6.047-4.37-9.61-6.65-11.06-.541-.343-.811-.514-1.075-.359-.264.155-.244.487-.204 1.15.185 3.092.49 8.451-2.357 8.451-1.756 0-2.163-1.313-2.257-3.434-.039-.877-.058-1.316-.396-1.419-.338-.103-.577.22-1.054.865C5.064 9.286 4 11.286 4 13.818z"
      />
    </svg>
  );
}

export default SvgFire;
