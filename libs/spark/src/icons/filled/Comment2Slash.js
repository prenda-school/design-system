import * as React from 'react';

function SvgComment2Slash(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.53 1.47a.75.75 0 00-1.06 1.06l2.605 2.606A9.721 9.721 0 002.25 12c0 1.047.22 2.073.507 2.973.31.972.536 1.677.682 2.209.15.55.188.824.181.964-.006.113-.01.16-.015.199a2.69 2.69 0 01-.04.195c-.037.157-.121.36-.317.695-.197.335-.474.752-.866 1.34A.75.75 0 003 21.75h9a9.722 9.722 0 006.864-2.824l2.606 2.605a.75.75 0 101.06-1.06l-19-19zM12 3.75a8.279 8.279 0 00-2.718.458.75.75 0 11-.495-1.416A9.683 9.683 0 0112 2.25 9.75 9.75 0 0121.75 12a9.752 9.752 0 01-.555 3.25.75.75 0 11-1.414-.5A8.249 8.249 0 0020.25 12 8.25 8.25 0 0012 3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComment2Slash;
