import * as React from 'react';

function SvgNewspaper(props) {
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
        d="M2.624 2.351a.75.75 0 01.748-.002L6.5 4.136 9.628 2.35a.75.75 0 01.744 0L13.5 4.136l3.128-1.787A.75.75 0 0117.75 3v8.25H21a.75.75 0 01.75.75v7A2.75 2.75 0 0119 21.75H8.945c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V3a.75.75 0 01.374-.649zM19 20.25c.69 0 1.25-.56 1.25-1.25v-6.25h-2.5V19c0 .69.56 1.25 1.25 1.25zm-12-12a.75.75 0 000 1.5h4a.75.75 0 000-1.5H7zM6.25 13a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75zM7 16.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgNewspaper;
