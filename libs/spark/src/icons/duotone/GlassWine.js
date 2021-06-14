import * as React from 'react';

function SvgGlassWine(props) {
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
        d="M4 4.222C4 3.547 4.547 3 5.222 3h13.556C19.453 3 20 3.547 20 4.222V6A8 8 0 114 6V4.222z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M5.222 2.25A1.972 1.972 0 003.25 4.222V6a8.75 8.75 0 008 8.718v5.532H8a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-3.25v-5.532a8.75 8.75 0 008-8.718V4.222a1.972 1.972 0 00-1.972-1.972H5.222zM4.75 4.222c0-.26.212-.472.472-.472h13.556c.26 0 .472.211.472.472V6a7.25 7.25 0 11-14.5 0V4.222z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlassWine;
