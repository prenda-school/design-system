import * as React from 'react';

function SvgStar(props) {
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
        d="M12.673 1.67a.75.75 0 00-1.346 0L8.5 7.432l-5.61.826a.75.75 0 00-.42 1.273l4.207 4.19-1.408 6.203a.75.75 0 001.074.833L12 17.844l5.657 2.913a.75.75 0 001.074-.833l-1.408-6.202 4.206-4.19a.75.75 0 00-.42-1.274l-5.61-.826-2.826-5.762z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStar;
