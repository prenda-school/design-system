import * as React from 'react';

function SvgBookmarkSlash(props) {
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
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l3 3 14 14 3 3a.75.75 0 101.06-1.06l-2.78-2.78V8.944c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H7c-1 0-1.876.534-2.357 1.332L2.53 1.47zM5.75 9v10.708l5.878-3.36a.75.75 0 01.744 1.303l-7 4A.75.75 0 014.25 21V9a.75.75 0 011.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarkSlash;
