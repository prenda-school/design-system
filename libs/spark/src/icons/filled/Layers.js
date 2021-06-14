import * as React from 'react';

function SvgLayers(props) {
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
        d="M12.305 2.315a.75.75 0 00-.61 0l-9 4a.75.75 0 000 1.37l9 4a.75.75 0 00.61 0l9-4a.75.75 0 000-1.37l-9-4zm-9.99 9.38a.75.75 0 01.99-.38L12 15.179l8.695-3.864a.75.75 0 01.61 1.37l-9 4a.75.75 0 01-.61 0l-9-4a.75.75 0 01-.38-.99zm.99 4.62a.75.75 0 00-.61 1.37l9 4a.75.75 0 00.61 0l9-4a.75.75 0 00-.61-1.37L12 20.179l-8.695-3.864z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLayers;
