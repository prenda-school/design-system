import * as React from 'react';

function SvgPaperclip(props) {
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
        d="M17.127 4.045a3.25 3.25 0 00-4.596 0L5.46 11.116a5.25 5.25 0 107.424 7.425l7.778-7.778a.75.75 0 111.061 1.06l-7.778 7.778a6.75 6.75 0 01-9.546-9.545l7.071-7.072a4.75 4.75 0 116.717 6.718l-7.07 7.071a2.75 2.75 0 01-3.89-3.89l7.071-7.07a.75.75 0 011.061 1.06l-7.071 7.071a1.25 1.25 0 001.768 1.768l7.07-7.07a3.25 3.25 0 000-4.597z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPaperclip;
