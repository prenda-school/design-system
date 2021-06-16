import * as React from 'react';

function SvgBookmarkPlus(props) {
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
        fillRule="evenodd"
        d="M20 8v10.764c0 1.45 0 2.175-.474 2.469-.474.293-1.123-.032-2.42-.68l-3.317-1.659c-.878-.438-1.317-.658-1.789-.658s-.911.22-1.789.658l-3.317 1.659c-1.297.648-1.945.973-2.42.68C4 20.939 4 20.214 4 18.763V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8zm-7.25 0a.75.75 0 00-1.5 0v1.75H9.5a.75.75 0 000 1.5h1.75V13a.75.75 0 001.5 0v-1.75h1.75a.75.75 0 000-1.5h-1.75V8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarkPlus;
