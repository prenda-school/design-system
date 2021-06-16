import * as React from 'react';

function SvgCloud(props) {
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
        d="M12 3.25a7.75 7.75 0 00-7.739 7.329A4.751 4.751 0 006 19.75h11a5.75 5.75 0 002.43-10.963A7.753 7.753 0 0012 3.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloud;
