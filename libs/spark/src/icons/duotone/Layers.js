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
      <path fill={props.fillColor || '#F0F1F2'} d="M12 3l9 4-9 4-9-4 9-4z" />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.695 2.315a.75.75 0 01.61 0l9 4a.75.75 0 010 1.37l-9 4a.75.75 0 01-.61 0l-9-4a.75.75 0 010-1.37l9-4zM4.847 7L12 10.18 19.153 7 12 3.82 4.847 7zm-2.532 4.695a.75.75 0 01.99-.38L12 15.179l8.695-3.864a.75.75 0 01.61 1.37l-9 4a.75.75 0 01-.61 0l-9-4a.75.75 0 01-.38-.99zm.99 4.62a.75.75 0 00-.61 1.37l9 4a.75.75 0 00.61 0l9-4a.75.75 0 00-.61-1.37L12 20.179l-8.695-3.864z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLayers;
