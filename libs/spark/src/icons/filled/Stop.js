import * as React from 'react';

function SvgStop(props) {
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
        d="M4 10c0-2.828 0-4.243.879-5.121C5.757 4 7.172 4 10 4h4c2.828 0 4.243 0 5.121.879C20 5.757 20 7.172 20 10v4c0 2.828 0 4.243-.879 5.121C18.243 20 16.828 20 14 20h-4c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14v-4z"
      />
    </svg>
  );
}

export default SvgStop;
