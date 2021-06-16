import * as React from 'react';

function SvgLightningSlash(props) {
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
        d="M14.75 2a.75.75 0 00-1.374-.416l-3.333 5a.75.75 0 001.248.832l1.959-2.939V10c0 .414.336.75.75.75h3.599l-1.223 1.834a.75.75 0 101.248.832l2-3A.75.75 0 0019 9.25h-4.25V2zm-11.22.47a.75.75 0 10-1.06 1.06l5.765 5.766-2.859 4.288A.75.75 0 006 14.75h4.25V22a.75.75 0 001.374.416l3.893-5.839 4.953 4.953a.75.75 0 101.06-1.06l-5.6-5.6-6.2-6.2-6.2-6.2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLightningSlash;
