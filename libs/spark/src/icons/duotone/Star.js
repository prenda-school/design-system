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
        fill={props.fillColor || '#F0F1F2'}
        d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 1.25a.75.75 0 01.67.415l2.83 5.658 5.623.937a.75.75 0 01.407 1.27l-4.206 4.206 1.407 6.095a.75.75 0 01-1.066.84L12 17.839 6.335 20.67a.75.75 0 01-1.066-.84l1.407-6.095L2.47 9.53a.75.75 0 01.407-1.27L8.5 7.323l2.83-5.658A.75.75 0 0112 1.25zm0 2.427L9.67 8.335a.75.75 0 01-.547.405l-4.562.76 3.47 3.47a.75.75 0 01.2.699l-1.142 4.948 4.576-2.288a.75.75 0 01.67 0l4.576 2.288-1.142-4.948a.75.75 0 01.2-.7L19.44 9.5l-4.562-.76a.75.75 0 01-.548-.405L12 3.677z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStar;
