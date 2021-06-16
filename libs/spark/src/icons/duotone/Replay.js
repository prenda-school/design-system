import * as React from 'react';

function SvgReplay(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={12} cy={13} r={9} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12.493.435a.75.75 0 01.072 1.058l-1.57 1.801c.327-.029.661-.044 1.005-.044 5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75A9.75 9.75 0 013.892 7.583a.75.75 0 111.247.834A8.25 8.25 0 1012 4.75c-.418 0-.82.026-1.207.074l2.15 1.57a.75.75 0 11-.885 1.212l-3.5-2.557a.75.75 0 01-.123-1.098l3-3.444a.75.75 0 011.058-.072z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgReplay;
