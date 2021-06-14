import * as React from 'react';

function SvgShoppingBag(props) {
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
        d="M5.882 4.142c-1.008.987-1.193 2.553-1.563 5.686l-.264 2.234c-.492 4.169-.738 6.253.455 7.595C5.704 21 7.802 21 12 21c4.197 0 6.296 0 7.49-1.343 1.193-1.342.947-3.426.455-7.595l-.264-2.234c-.37-3.133-.555-4.699-1.563-5.686a3.991 3.991 0 00-.288-.256C16.73 3 15.153 3 12 3s-4.73 0-5.83.886a4 4 0 00-.288.256zM9.75 9a2.25 2.25 0 004.5 0V7a.75.75 0 011.5 0v2a3.75 3.75 0 11-7.5 0V7a.75.75 0 011.5 0v2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShoppingBag;
