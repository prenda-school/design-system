import * as React from 'react';

function SvgSearch(props) {
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
        d="M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.75 11a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0zM11 2.25a8.75 8.75 0 105.634 15.445l2.836 2.835a.75.75 0 101.06-1.06l-2.835-2.836A8.75 8.75 0 0011 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSearch;
