import * as React from 'react';

function SvgBellSlash(props) {
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
        d="M12 2.25a7.524 7.524 0 00-3.887 1.077.75.75 0 00.774 1.286A6.047 6.047 0 0118 9.047l.756 6.046a.75.75 0 001.488-.186l-.756-6.046A7.547 7.547 0 0012 2.25zM4.512 8.86a7.525 7.525 0 011.14-3.147L3.47 3.53a.75.75 0 011.06-1.06l18 18a.75.75 0 11-1.06 1.06l-1.78-1.78h-3.203l-.052.118a4.853 4.853 0 01-8.87 0l-.052-.118H6.152a2.65 2.65 0 01-2.63-2.978l.99-7.911zm4.693 10.89a3.354 3.354 0 005.59 0h-5.59z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBellSlash;
