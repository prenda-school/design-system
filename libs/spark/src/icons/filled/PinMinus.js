import * as React from 'react';

function SvgPinMinus(props) {
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
        d="M20.75 10.148c0-2.915-1.08-5.158-2.747-6.667C16.35 1.984 14.163 1.25 12 1.25c-2.164 0-4.35.734-6.003 2.231C4.33 4.99 3.25 7.233 3.25 10.148c0 3.866 2.3 7.09 4.41 9.246l.047.048c.667.682 1.25 1.277 1.886 1.685.697.447 1.437.661 2.407.661s1.711-.214 2.408-.66c.636-.409 1.218-1.004 1.886-1.686l.046-.048c2.11-2.156 4.41-5.38 4.41-9.246zM8.25 11a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPinMinus;
