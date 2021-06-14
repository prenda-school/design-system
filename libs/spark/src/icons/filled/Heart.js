import * as React from 'react';

function SvgHeart(props) {
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
        d="M11.51 5.926a5.47 5.47 0 00-7.82 7.647l7.099 7.26c.664.68 1.758.68 2.422 0l7.1-7.26a5.47 5.47 0 00-7.821-7.647l-.49.501-.49-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgHeart;
