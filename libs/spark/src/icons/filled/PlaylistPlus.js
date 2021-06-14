import * as React from 'react';

function SvgPlaylistPlus(props) {
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
        d="M2.25 5A.75.75 0 013 4.25h16a.75.75 0 010 1.5H3A.75.75 0 012.25 5zm0 4A.75.75 0 013 8.25h12a.75.75 0 010 1.5H3A.75.75 0 012.25 9zM3 12.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H3zM2.25 17a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM23 17a5 5 0 11-10 0 5 5 0 0110 0zm-5-2.75a.75.75 0 01.75.75v1.25H20a.75.75 0 010 1.5h-1.25V19a.75.75 0 01-1.5 0v-1.25H16a.75.75 0 010-1.5h1.25V15a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlaylistPlus;
