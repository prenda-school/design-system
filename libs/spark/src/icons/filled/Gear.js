import * as React from 'react';

function SvgGear(props) {
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
        d="M10 20a2 2 0 104 0v-1.29c.466-.138.91-.324 1.33-.551l.913.912a2 2 0 002.828-2.828l-.912-.913c.227-.42.413-.864.551-1.33H20a2 2 0 100-4h-1.29a6.952 6.952 0 00-.551-1.33l.912-.913a2 2 0 00-2.828-2.828l-.913.912A6.957 6.957 0 0014 5.29V4a2 2 0 10-4 0v1.29c-.466.138-.91.324-1.33.551l-.913-.912A2 2 0 104.93 7.757l.912.913c-.227.42-.413.864-.551 1.33H4a2 2 0 100 4h1.29c.138.466.324.91.551 1.33l-.912.913a2 2 0 002.828 2.828l.913-.912c.42.227.864.413 1.33.551V20zm2-5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGear;
