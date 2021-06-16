import * as React from 'react';

function SvgMapView(props) {
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
        d="M3 6.273V21l6-3.273L15 21l6-3.273V3l-6 3.273L9 3 3 6.273z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M21.383 2.355A.75.75 0 0121.75 3v14.727a.75.75 0 01-.39.659l-6 3.272a.75.75 0 01-.72 0L9 18.582l-5.64 3.076A.75.75 0 012.25 21V6.273a.75.75 0 01.39-.659l6-3.272a.75.75 0 01.72 0L15 5.418l5.64-3.076a.75.75 0 01.743.013zM14.25 6.718l-4.5-2.455v13.019l4.5 2.455V6.718zm1.5 13.019l4.5-2.455V4.263l-4.5 2.455v13.019zm-7.5-2.455V4.263l-4.5 2.455v13.019l4.5-2.455z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMapView;
