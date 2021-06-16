import * as React from 'react';

function SvgPenTool(props) {
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
        d="M12.639.607a.75.75 0 00-1.278 0l-8 13a.75.75 0 00.053.862l2.917 3.646A2 2 0 007 22h10a2 2 0 00.669-3.885l2.917-3.646a.75.75 0 00.053-.862l-8-13zM15.839 18l3.246-4.056L12.75 3.65V10a.752.752 0 01-.013.14 2 2 0 11-1.474 0 .752.752 0 01-.013-.14V3.65L4.915 13.944 8.16 18h7.68z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPenTool;
