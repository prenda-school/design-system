import * as React from 'react';

function SvgUserMinus(props) {
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
        fillRule="evenodd"
        d="M9 11a4 4 0 100-8 4 4 0 000 8zm-7 8a4 4 0 014-4h6a4 4 0 014 4 2 2 0 01-2 2H4a2 2 0 01-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M9 3.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM4.25 7a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM6 15.75A3.25 3.25 0 002.75 19c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25A3.25 3.25 0 0012 15.75H6zM1.25 19A4.75 4.75 0 016 14.25h6A4.75 4.75 0 0116.75 19 2.75 2.75 0 0114 21.75H4A2.75 2.75 0 011.25 19zM17 9.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUserMinus;
