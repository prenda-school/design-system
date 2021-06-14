import * as React from 'react';

function SvgGift(props) {
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
        d="M6.75 4.5c0-.966.784-1.75 1.75-1.75h.08c.808 0 1.521.53 1.753 1.304l.659 2.196H8.5A1.75 1.75 0 016.75 4.5zM8.5 1.25a3.25 3.25 0 100 6.5h2.75v2.5H5a.75.75 0 00-.75.75v6.052c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h6.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242V11a.75.75 0 00-.75-.75h-6.25v-2.5h2.75a3.25 3.25 0 000-6.5h-.08a3.33 3.33 0 00-3.19 2.373L12 4.39l-.23-.767A3.33 3.33 0 008.58 1.25H8.5zm2.75 10.5h-5.5V17c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h2.25v-8.5zm1.5 8.5v-8.5h5.5V17c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066h-2.25zm2.75-17.5a1.75 1.75 0 110 3.5h-2.492l.659-2.196A1.83 1.83 0 0115.42 2.75h.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGift;