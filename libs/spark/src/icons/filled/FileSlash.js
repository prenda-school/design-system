import * as React from 'react';

function SvgFileSlash(props) {
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
        d="M1.47 1.47a.75.75 0 011.06 0l2.113 2.112A2.749 2.749 0 017 2.25h5.657c.21 0 .406 0 .593.002v1.8c0 .898 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.343.08 2.242.08h1.8c.002.187.002.383.002.593v9.346l2.78 2.78a.75.75 0 01-1.06 1.061l-3-3-14-14-3-3a.75.75 0 010-1.06zm18.139 5.78a3.064 3.064 0 00-.145-.442c-.286-.692-.82-1.226-1.59-1.995l-.101-.1-.485-.486-.101-.1c-.769-.77-1.303-1.305-1.995-1.592a3.058 3.058 0 00-.442-.144V4c0 .964.002 1.612.066 2.095.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066h1.609zM5 8.25a.75.75 0 01.75.75v6c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h6a.75.75 0 010 1.5h-6.055c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V9A.75.75 0 015 8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileSlash;