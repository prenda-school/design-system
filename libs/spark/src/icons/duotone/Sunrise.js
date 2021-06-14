import * as React from 'react';

function SvgSunrise(props) {
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
        d="M12 13a4 4 0 00-4 4h8a4 4 0 00-4-4z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.47 1.47a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V9a.75.75 0 01-1.5 0V3.81L9.53 5.53a.75.75 0 01-1.06-1.06l3-3zM8.837 16.25a3.251 3.251 0 016.326 0H8.837zm-1.528 0H2a.75.75 0 000 1.5h20a.75.75 0 000-1.5h-5.309a4.751 4.751 0 00-9.382 0zM6 20.25a.75.75 0 000 1.5h12a.75.75 0 000-1.5H6zM4.399 9.399a.75.75 0 011.06 0l2.122 2.12a.75.75 0 01-1.061 1.062l-2.121-2.122a.75.75 0 010-1.06zm12.02 2.12a.75.75 0 001.061 1.062l2.121-2.122a.75.75 0 10-1.06-1.06l-2.122 2.12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSunrise;
