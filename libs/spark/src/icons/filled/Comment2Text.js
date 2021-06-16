import * as React from 'react';

function SvgComment2Text(props) {
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
        d="M2.25 21c0-.158.049-.304.132-.424.392-.59.67-1.006.866-1.34.196-.336.28-.539.317-.696.025-.11.034-.156.04-.195.005-.04.01-.086.015-.199.007-.14-.03-.413-.181-.964a62.019 62.019 0 00-.682-2.208c-.288-.9-.507-1.927-.507-2.974 0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75H3a.75.75 0 01-.75-.75zM8 9.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zM7.25 14a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComment2Text;
