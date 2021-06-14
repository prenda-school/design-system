import * as React from 'react';

function SvgTransform(props) {
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
        d="M16.354 4.25a2.751 2.751 0 113.396 3.396v8.707a2.751 2.751 0 11-3.396 3.397H7.646a2.751 2.751 0 11-3.396-3.396V7.646A2.751 2.751 0 117.646 4.25h8.707zM5.75 16.354c.916.259 1.637.98 1.896 1.896h8.707a2.756 2.756 0 011.897-1.896V7.646a2.756 2.756 0 01-1.896-1.896H7.646A2.756 2.756 0 015.75 7.646v8.707z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTransform;
