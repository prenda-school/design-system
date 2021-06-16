import * as React from 'react';

function SvgTextBold(props) {
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
        d="M7.111 3.25A1.861 1.861 0 005.25 5.111v13.556c0 1.15.933 2.083 2.083 2.083H14a4.75 4.75 0 001.29-9.323A4.75 4.75 0 0012 3.25H7.111zM12 12.75H6.75v5.917c0 .322.261.583.583.583H14a3.25 3.25 0 000-6.5h-2zm0-1.5a3.25 3.25 0 000-6.5H7.111a.36.36 0 00-.361.361v6.139H12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTextBold;
