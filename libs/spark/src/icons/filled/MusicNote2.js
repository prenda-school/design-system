import * as React from 'react';

function SvgMusicNote2(props) {
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
        d="M9.789 8.03A1.99 1.99 0 019.75 8v.04l.039-.01zM20.25 6.96V13a3.75 3.75 0 101.5 3V5.967c0-.643 0-1.173-.037-1.6-.037-.438-.119-.85-.335-1.223a2.75 2.75 0 00-1.578-1.25c-.412-.125-.832-.11-1.268-.046-.423.062-.94.183-1.565.33l-.032.008-5.023 1.182-.043.01c-.703.165-1.295.305-1.762.476-.495.18-.929.425-1.263.846-.334.422-.471.9-.535 1.424-.059.493-.059 1.101-.059 1.823V16a3.75 3.75 0 101.5 3V9.586l10.5-2.625z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMusicNote2;
