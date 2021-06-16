import * as React from 'react';

function SvgPlaylist(props) {
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
        d="M2.25 5A.75.75 0 013 4.25h16a.75.75 0 010 1.5H3A.75.75 0 012.25 5zm0 4A.75.75 0 013 8.25h12a.75.75 0 010 1.5H3A.75.75 0 012.25 9zM3 12.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H3zM2.25 17a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM17 16.25A2.75 2.75 0 1019.75 19v-6.599l1.834 1.223a.75.75 0 10.832-1.248l-3-2A.75.75 0 0018.25 11v5.55c-.375-.192-.8-.3-1.25-.3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlaylist;
