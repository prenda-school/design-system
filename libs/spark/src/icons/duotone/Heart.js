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
        fill={props.fillColor || '#F0F1F2'}
        d="M4.226 12.05l7.1 7.26a.945.945 0 001.35 0l7.098-7.26a4.719 4.719 0 10-6.748-6.6L12 6.5l-1.026-1.05a4.719 4.719 0 10-6.748 6.6z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M10.438 5.975a3.97 3.97 0 00-5.676 5.55l7.1 7.26a.194.194 0 00.277 0l7.099-7.26a3.97 3.97 0 00-5.676-5.55l-1.026 1.05a.75.75 0 01-1.072 0l-1.026-1.05zM3.69 4.926a5.469 5.469 0 017.82 0l.49.501.49-.5a5.469 5.469 0 117.82 7.646l-7.099 7.261c-.664.68-1.758.68-2.422 0l-7.1-7.26a5.47 5.47 0 010-7.648z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgHeart;
