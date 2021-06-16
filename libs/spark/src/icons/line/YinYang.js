import * as React from 'react';

function SvgYinYang(props) {
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
        d="M12 3.75c-2.423 0-4.25 1.75-4.25 3.75s1.827 3.75 4.25 3.75c3.1 0 5.75 2.278 5.75 5.25a4.85 4.85 0 01-.304 1.697A8.25 8.25 0 0012 3.75zm0 18c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm0-1.5c2.424 0 4.25-1.751 4.25-3.75s-1.826-3.75-4.25-3.75c-3.1 0-5.75-2.278-5.75-5.25 0-.598.107-1.168.304-1.697A8.25 8.25 0 0012 20.25zM12 8a1 1 0 100-2 1 1 0 000 2zm1 9a1 1 0 11-2 0 1 1 0 012 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgYinYang;
