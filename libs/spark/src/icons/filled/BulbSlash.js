import * as React from 'react';

function SvgBulbSlash(props) {
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
        d="M1.47 1.47a.75.75 0 011.06 0l3.782 3.782 9.876 9.875 6.342 6.343a.75.75 0 11-1.06 1.06l-5.572-5.572a3.245 3.245 0 00-.148.953V19a3.75 3.75 0 11-7.5 0v-1.09c0-1.267-.805-2.45-1.874-3.578A7.726 7.726 0 014.25 9c0-1.086.224-2.121.628-3.061L1.47 2.53a.75.75 0 010-1.06zm12.78 16.766c-.596.254-1.405.514-2.25.514-.844 0-1.654-.26-2.25-.514V19a2.25 2.25 0 004.5 0v-.764zM12 2.75a6.218 6.218 0 00-3.57 1.12.75.75 0 01-.86-1.23 7.75 7.75 0 0110.79 10.79.75.75 0 01-1.23-.86A6.25 6.25 0 0012 2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBulbSlash;
