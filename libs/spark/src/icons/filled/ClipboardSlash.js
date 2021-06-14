import * as React from 'react';

function SvgClipboardSlash(props) {
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
        d="M8.353 3.75H7a.75.75 0 010-1.5h1.353A2.751 2.751 0 0111 .25h2c1.26 0 2.32.846 2.647 2.001.542.006.956.028 1.324.127a3.75 3.75 0 012.651 2.651c.128.48.128 1.037.128 1.855V15a.75.75 0 11-1.5 0V7c0-.978-.006-1.32-.077-1.582a2.25 2.25 0 00-1.59-1.591c-.194-.052-.432-.07-.937-.075A2.751 2.751 0 0113 5.75h-2a2.751 2.751 0 01-2.647-2zM9.75 3c0 .69.56 1.25 1.25 1.25h2a1.25 1.25 0 100-2.5h-2c-.69 0-1.25.56-1.25 1.25zM1.47 1.47a.75.75 0 011.06 0l3 3 14 14 3 3a.75.75 0 11-1.06 1.06l-2.113-2.112A2.749 2.749 0 0117 21.75h-6.055c-1.368 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.982-2.26-.116-.867-.116-1.97-.116-3.337V5.31L1.47 2.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClipboardSlash;