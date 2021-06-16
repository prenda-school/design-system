import * as React from 'react';

function SvgSun(props) {
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
        d="M12 1.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zm0 17a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM16 12a4 4 0 11-8 0 4 4 0 018 0zm-14-.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5H2zm17 0a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM4.399 4.399a.75.75 0 011.06 0l2.122 2.12A.75.75 0 016.52 7.582L4.399 5.459a.75.75 0 010-1.06zm12.02 12.02a.75.75 0 011.061 0l2.121 2.122a.75.75 0 11-1.06 1.06l-2.122-2.12a.75.75 0 010-1.062zM4.4 18.541a.75.75 0 001.06 1.06l2.122-2.12a.75.75 0 00-1.061-1.062L4.4 18.541zM16.419 6.52a.75.75 0 101.061 1.06l2.121-2.12a.75.75 0 00-1.06-1.061l-2.122 2.12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSun;
