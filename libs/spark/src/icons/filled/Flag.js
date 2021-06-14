import * as React from 'react';

function SvgFlag(props) {
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
        d="M5.75 2a.75.75 0 00-1.5 0v20a.75.75 0 001.5 0v-8h10.014c1.45 0 2.175 0 2.469-.474.293-.474-.032-1.123-.68-2.42l-.159-.317c-.438-.878-.658-1.317-.658-1.789s.22-.911.658-1.789l.159-.317c.648-1.297.973-1.945.68-2.42C17.939 4 17.214 4 15.763 4H5.75V2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFlag;
