import * as React from 'react';

function SvgChartColumn(props) {
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
        d="M9 2.25h-.055c-1.368 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.982 2.26-.116.867-.116 1.97-.116 3.337v6.11c0 1.367 0 2.47.116 3.337.121.9.38 1.658.982 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.601-.602.86-1.36.981-2.26.117-.867.117-1.97.117-3.337v-6.11c0-1.367 0-2.47-.117-3.337-.12-.9-.38-1.658-.982-2.26-.601-.602-1.36-.86-2.26-.981-.866-.117-1.969-.117-3.336-.117H9zm-1 7a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6A.75.75 0 018 9.25zM12.75 8a.75.75 0 00-1.5 0v8a.75.75 0 001.5 0V8zM16 11.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChartColumn;