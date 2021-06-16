import * as React from 'react';

function SvgDashboard(props) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM12 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0V4a.75.75 0 01.75-.75zm-8 8a.75.75 0 000 1.5h1a.75.75 0 000-1.5H4zm16 1.5h-1a.75.75 0 010-1.5h1a.75.75 0 010 1.5zm-1.97-5.72a.75.75 0 10-1.06-1.06l-1 1a.75.75 0 101.06 1.06l1-1zm-1.56 9.44a.75.75 0 011.06 0l1 1a.75.75 0 11-1.06 1.06l-1-1a.75.75 0 010-1.06zm-8.44.56a.75.75 0 10-1.06-1.06l-1 1a.75.75 0 101.06 1.06l1-1zM5.97 5.97a.75.75 0 011.06 0l1 1a.75.75 0 01-1.06 1.06l-1-1a.75.75 0 010-1.06zM10 12.556c0 3.259 4 3.259 4 0 0-1.01-.474-1.88-.96-2.506-.367-.472-.55-.708-1.04-.708s-.673.236-1.04.708c-.486.626-.96 1.496-.96 2.505z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDashboard;
