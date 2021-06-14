import * as React from 'react';

function SvgCommentSlash(props) {
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
        d="M21.47 1.47a.75.75 0 111.06 1.06l-19 19a.75.75 0 01-1.06-1.06l2.03-2.032A3.751 3.751 0 012.25 15V9.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117H19.69l1.78-1.78zM21 6.25a.75.75 0 01.75.75v13a.75.75 0 01-1.085.67l-2.311-1.155c-.871-.435-1.203-.596-1.552-.678-.348-.082-.717-.087-1.69-.087H10a.75.75 0 010-1.5h5.2c.855 0 1.408 0 1.947.127.54.127 1.033.375 1.798.757l.08.04 1.225.613V7a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCommentSlash;
