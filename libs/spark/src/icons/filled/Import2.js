import * as React from 'react';

function SvgImport2(props) {
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
        d="M12.75 3a.75.75 0 00-1.5 0v6H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15c0-2.829 0-4.243-.879-5.121C20.243 9 18.828 9 16 9h-3.25V3zm0 6h-1.5v6.19l-2.72-2.72a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 10-1.06-1.06l-2.72 2.72V9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImport2;
