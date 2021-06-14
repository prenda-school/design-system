import * as React from 'react';

function SvgGrid(props) {
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
        d="M14.75 2h-5.5v5.75h5.5V2zm0 7.25h-5.5v5.5h5.5v-5.5zm-7-1.5V2H6c-1.886 0-2.828 0-3.414.586C2 3.172 2 4.114 2 6v1.75h5.75zM2 9.25h5.75v5.5H2v-5.5zm14.25 0H22v5.5h-5.75v-5.5zM22 7.75h-5.75V2H18c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v1.75zm-14.25 8.5H2V18c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h1.75v-5.75zm7 0h-5.5V22h5.5v-5.75zm1.5 5.75v-5.75H22V18c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid;
