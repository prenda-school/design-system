import * as React from 'react';

function SvgDistributeHorizontally(props) {
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
        d="M3 2.25a.75.75 0 01.75.75v18a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25zm9 2h-.052c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v6.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.344.08-2.242V8.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.725-1.65-.456-.456-1.023-.642-1.65-.726-.595-.08-1.345-.08-2.243-.08H12zM21.75 3a.75.75 0 00-1.5 0v18a.75.75 0 001.5 0V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDistributeHorizontally;
