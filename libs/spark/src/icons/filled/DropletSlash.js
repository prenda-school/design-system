import * as React from 'react';

function SvgDropletSlash(props) {
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
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l4.3 4.302c-1.39 1.92-2.52 4.311-2.52 7.02 0 4.83 2.956 7.738 6.44 8.614 3.157.793 6.803-.073 9.03-2.685l2.75 2.75a.75.75 0 101.06-1.061l-3.356-3.356L7.292 6.232 2.53 1.47zm7.96 2.572c.895-.738 1.107-.875 1.51-.875.402 0 .614.137 1.507.873 1.152.951 2.6 2.331 3.754 4.022 1.155 1.692 1.989 3.655 1.989 5.79 0 .37-.02.725-.058 1.065a.75.75 0 001.49.167c.045-.397.068-.808.068-1.232 0-2.533-.989-4.788-2.25-6.635-1.262-1.848-2.822-3.33-4.039-4.334l-.099-.082c-.75-.62-1.37-1.134-2.363-1.134-.991 0-1.613.515-2.364 1.136l-.099.082a25.76 25.76 0 00-.647.553.75.75 0 10.994 1.124c.21-.186.413-.36.608-.52z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDropletSlash;