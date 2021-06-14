import * as React from 'react';

function SvgEmail(props) {
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
        d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172zm3.244 2.204a.75.75 0 00-.832 1.248l6 4a.75.75 0 00.832 0l6-4a.75.75 0 10-.832-1.248L12 11.099 6.416 7.376z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEmail;
