import * as React from 'react';

function SvgLink2(props) {
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
        d="M19 12l-7 7a4.95 4.95 0 11-7-7l7-7a4.95 4.95 0 117 7z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M19.602 4.399a5.75 5.75 0 00-8.132 0l-.707.707a.75.75 0 101.06 1.06l.707-.707a4.25 4.25 0 016.01 6.01l-1.685 1.687a3.865 3.865 0 01-5.467 0l-.272-.272a.75.75 0 00-1.06 1.06l.272.272a5.365 5.365 0 007.587 0l1.687-1.686a5.75 5.75 0 000-8.131zM7.146 10.844a3.865 3.865 0 015.466 0l.272.272a.75.75 0 001.06-1.06l-.271-.272a5.365 5.365 0 00-7.588 0L4.399 11.47a5.75 5.75 0 108.131 8.13l.707-.707a.75.75 0 00-1.061-1.06l-.707.707a4.25 4.25 0 11-6.01-6.01l1.686-1.687z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLink2;
