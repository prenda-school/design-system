import * as React from 'react';

function SvgVoicemail(props) {
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
        d="M6 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM10.75 12c0 1.257-.488 2.4-1.286 3.25h5.072A4.75 4.75 0 1118 16.75H6A4.75 4.75 0 1110.75 12zM18 15.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVoicemail;
