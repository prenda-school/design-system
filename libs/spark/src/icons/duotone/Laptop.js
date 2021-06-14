import * as React from 'react';

function SvgLaptop(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        d="M3 9c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h10c1.886 0 2.828 0 3.414.586C21 6.172 21 7.114 21 9v8H3V9z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M7 4.25h-.052c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v7.302H1.6A1.35 1.35 0 00.25 17.6a3.15 3.15 0 003.15 3.15h17.2a3.15 3.15 0 003.15-3.15 1.35 1.35 0 00-1.35-1.35h-.65V8.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.343-.08-2.242-.08H7zm13.25 12V9c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H7c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C3.753 7.388 3.75 8.036 3.75 9v7.25h16.5zM3 17.75H1.757a1.65 1.65 0 001.643 1.5h17.2a1.65 1.65 0 001.643-1.5H3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLaptop;