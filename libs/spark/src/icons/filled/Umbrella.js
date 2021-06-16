import * as React from 'react';

function SvgUmbrella(props) {
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
        d="M2.553 7.458C3.895 4.574 6.638 1.25 12 1.25c5.363 0 8.105 3.324 9.447 6.208l.032.067c.341.734.649 1.394.777 1.989.148.685.071 1.32-.34 1.964-.432.678-1.044.998-1.783 1.143-.665.13-1.505.13-2.481.129H12.75V20a2.75 2.75 0 11-5.5 0v-1a.75.75 0 011.5 0v1a1.25 1.25 0 102.5 0v-7.25H6.348c-.976 0-1.816 0-2.48-.13-.74-.144-1.352-.464-1.784-1.142-.411-.645-.488-1.279-.34-1.964.129-.595.436-1.255.778-1.989l.03-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUmbrella;
