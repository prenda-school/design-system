import * as React from 'react';

function SvgSticker(props) {
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
        d="M12.201 2.476a.75.75 0 00-.557-.22C6.424 2.444 2.25 6.734 2.25 12A9.75 9.75 0 0012 21.75c5.266 0 9.556-4.174 9.744-9.394a.75.75 0 00-.22-.557l-9.323-9.323zM11.75 6c0-.567.075-1.116.217-1.638l7.67 7.671A6.25 6.25 0 0111.75 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSticker;
